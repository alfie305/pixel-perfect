import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const BEEHIIV_API_KEY = Deno.env.get('BEEHIIV_API_KEY')!;
const BEEHIIV_PUB_ID = 'pub_b22d1584-185d-4979-8a67-e8066c2fcda6';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

Deno.serve(async () => {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    // Fetch published posts from Beehiiv V2 API
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/posts?status=confirmed&limit=100&order_by=publish_date&direction=desc`,
      {
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ error: 'Beehiiv API error', details: err }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data: posts } = await res.json();

    if (!posts?.length) {
      return new Response(JSON.stringify({ message: 'No posts found', synced: 0 }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Map Beehiiv posts to our DB schema
    const rows = posts.map((p: any) => ({
      beehiiv_id: p.id,
      title: p.title ?? null,
      subtitle: p.subtitle ?? null,
      slug: p.slug ?? null,
      status: p.status ?? null,
      web_url: p.url ?? null,
      thumbnail_url: p.thumbnail_url ?? null,
      preview_text: p.preview_text ?? null,
      publish_date: p.publish_date
        ? new Date(p.publish_date * 1000).toISOString()
        : null,
      updated_at: new Date().toISOString(),
    }));

    // Upsert — update existing, insert new
    const { error, count } = await supabase
      .from('posts')
      .upsert(rows, { onConflict: 'beehiiv_id', count: 'exact' });

    if (error) throw error;

    return new Response(
      JSON.stringify({ message: 'Sync complete', synced: count }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
