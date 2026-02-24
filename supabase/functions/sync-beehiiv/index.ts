// No external imports — uses native Deno fetch for both Beehiiv + Supabase REST
const BEEHIIV_API_KEY = Deno.env.get('BEEHIIV_API_KEY')!;
const BEEHIIV_PUB_ID = 'pub_b22d1584-185d-4979-8a67-e8066c2fcda6';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

Deno.serve(async () => {
  try {
    // 1. Fetch posts from Beehiiv V2
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/posts?status=confirmed&limit=100&order_by=publish_date&direction=desc`,
      { headers: { Authorization: `Bearer ${BEEHIIV_API_KEY}` } }
    );

    if (!beehiivRes.ok) {
      const err = await beehiivRes.text();
      return new Response(JSON.stringify({ error: 'Beehiiv error', details: err }), {
        status: 500, headers: { 'Content-Type': 'application/json' },
      });
    }

    const { data: posts } = await beehiivRes.json();

    if (!posts?.length) {
      return new Response(JSON.stringify({ message: 'No posts found', synced: 0 }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Map to DB schema
    const rows = posts.map((p: any) => ({
      beehiiv_id: p.id,
      title: p.title ?? null,
      subtitle: p.subtitle ?? null,
      slug: p.slug ?? null,
      status: p.status ?? null,
      web_url: p.url ?? null,
      thumbnail_url: p.thumbnail_url ?? null,
      preview_text: p.preview_text ?? null,
      publish_date: p.publish_date ? new Date(p.publish_date * 1000).toISOString() : null,
      updated_at: new Date().toISOString(),
    }));

    // 3. Upsert into Supabase via REST API
    const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(rows),
    });

    if (!sbRes.ok) {
      const err = await sbRes.text();
      return new Response(JSON.stringify({ error: 'Supabase upsert error', details: err }), {
        status: 500, headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({ message: 'Sync complete', synced: rows.length }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
});
