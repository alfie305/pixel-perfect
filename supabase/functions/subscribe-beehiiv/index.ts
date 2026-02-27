import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper function to store subscriber profile in Supabase
async function storeSubscriberProfile(
  email: string,
  firstName?: string,
  city?: string,
  role?: string,
  interests?: string[]
) {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Upsert subscriber profile (insert or update if exists)
    const { error } = await supabase.from('subscriber_profiles').upsert(
      {
        email,
        first_name: firstName || null,
        city: city || null,
        role: role || null,
        interests: interests || [],
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'email' }
    );

    if (error) {
      console.error('Failed to store subscriber profile:', error);
      // Don't fail the whole request if profile storage fails
    }
  } catch (error) {
    console.error('Exception storing subscriber profile:', error);
    // Don't fail the whole request if profile storage fails
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, firstName, city, role, interests } = await req.json();

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build custom_fields array for Beehiiv
    const custom_fields: Array<{ name: string; value: string }> = [];
    if (firstName && typeof firstName === 'string') {
      custom_fields.push({ name: 'first_name', value: firstName });
    }
    if (city && typeof city === 'string') {
      custom_fields.push({ name: 'metro', value: city });
    }
    if (role && typeof role === 'string') {
      custom_fields.push({ name: 'role', value: role });
    }
    if (interests && Array.isArray(interests) && interests.length > 0) {
      custom_fields.push({ name: 'interests', value: interests.join(', ') });
    }

    // Build tags array for Beehiiv (for easy segmentation)
    const tags: string[] = [];

    // Add city tag (normalized: lowercase, no spaces)
    if (city && typeof city === 'string') {
      const cityTag = city.toLowerCase().replace(/\s+/g, '');
      tags.push(cityTag);
    }

    // Add role tag (normalized: lowercase, no spaces)
    if (role && typeof role === 'string') {
      const roleTag = role.toLowerCase().replace(/\s+/g, '');
      tags.push(roleTag);
    }

    // Add interest tags (normalized: lowercase, no spaces, ampersands removed)
    if (interests && Array.isArray(interests)) {
      interests.forEach((interest) => {
        const interestTag = interest
          .toLowerCase()
          .replace(/\s+/g, '')
          .replace(/&/g, '');
        tags.push(interestTag);
      });
    }

    const apiKey = Deno.env.get('BEEHIIV_API_KEY');
    const pubId = 'pub_b22d1584-185d-4979-8a67-e8066c2fcda6';

    // Build request body for Beehiiv
    const beehiivBody: any = {
      email,
      reactivate_existing: false,
      send_welcome_email: true,
    };

    // Add custom_fields if any were provided
    if (custom_fields.length > 0) {
      beehiivBody.custom_fields = custom_fields;
    }

    // Note: Tags cannot be added during subscription creation
    // They will be added via separate POST /tags endpoint after subscription is created

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(beehiivBody),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      // Beehiiv returns 400 if email already subscribed — treat as success
      if (res.status === 400 && data?.errors?.some((e: { message?: string }) => e?.message?.toLowerCase().includes('already'))) {
        // Still store/update profile data for existing subscribers
        await storeSubscriberProfile(email, firstName, city, role, interests);

        // Try to add tags for existing subscriber
        if (tags.length > 0) {
          try {
            console.log('Attempting to add tags to existing subscriber:', { email, tags });

            // First, get the subscriber ID by email
            const getSubResponse = await fetch(
              `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions/by_email/${encodeURIComponent(email)}`,
              {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json',
                },
              }
            );

            if (getSubResponse.ok) {
              const subData = await getSubResponse.json();
              const existingSubId = subData?.data?.id;

              if (existingSubId) {
                // Now add tags using the subscriber ID
                const tagResponse = await fetch(
                  `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions/${existingSubId}/tags`,
                  {
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${apiKey}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ tags }),
                  }
                );
                const tagData = await tagResponse.json();
                if (!tagResponse.ok) {
                  console.error('Failed to add tags for existing subscriber - API error:', {
                    status: tagResponse.status,
                    data: tagData
                  });
                } else {
                  console.log('Tags added successfully for existing subscriber:', { email, existingSubId, tags });
                }
              } else {
                console.error('Could not extract subscriber ID from response');
              }
            } else {
              console.error('Failed to fetch existing subscriber by email:', { status: getSubResponse.status });
            }
          } catch (err) {
            console.error('Failed to add tags for existing subscriber - exception:', err);
          }
        }

        return new Response(JSON.stringify({ success: true, alreadySubscribed: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ error: data?.message ?? 'Subscription failed' }), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get subscriber ID from response to add tags
    const subscriberId = data?.data?.id;

    // Add tags via separate API call if we have tags and a subscriber ID
    if (tags.length > 0 && subscriberId) {
      try {
        console.log('Attempting to add tags to new subscriber:', { subscriberId, tags });
        const tagResponse = await fetch(
          `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions/${subscriberId}/tags`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tags }),
          }
        );
        const tagData = await tagResponse.json();
        if (!tagResponse.ok) {
          console.error('Failed to add tags - API error:', { status: tagResponse.status, data: tagData });
        } else {
          console.log('Tags added successfully:', { subscriberId, tags });
        }
      } catch (err) {
        console.error('Failed to add tags - exception:', err);
        // Don't fail the whole request if tag addition fails
      }
    } else {
      console.log('Skipping tag addition:', { hasTags: tags.length > 0, hasSubscriberId: !!subscriberId });
    }

    // Store subscriber profile data in Supabase
    await storeSubscriberProfile(email, firstName, city, role, interests);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
