# Deployment Steps for Questionnaire Feature

## Summary of Changes

I've successfully updated the codebase to implement the 3-step subscriber questionnaire that collects city, role, and interests. Here's what was done:

### ✅ Completed Code Changes

1. **SubscribeModal Component** - Created 3-step questionnaire with:
   - Step 1: Email input
   - Step 2: City dropdown (20 metros) + Role selection (Agent/Broker/Team Leader/Manager/Lender)
   - Step 3: Interest checkboxes (Market trends, AI & tech, Marketing, Business growth, Commercial RE, Finance)

2. **Updated Components** - Both HeroSection and BottomCTA now open the modal instead of inline forms

3. **Edge Function Updated** - [supabase/functions/subscribe-beehiiv/index.ts](supabase/functions/subscribe-beehiiv/index.ts) now:
   - Accepts `city`, `role`, and `interests` parameters
   - Sends them as `custom_fields` to Beehiiv API
   - Stores subscriber profile data in Supabase

4. **Database Migration Created** - SQL file ready to create the `subscriber_profiles` table

---

## 🔧 Manual Steps Required

### Step 1: Create Database Table

Run the SQL in your Supabase dashboard:

1. Go to: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/sql/new
2. Copy the contents of [supabase/create_subscriber_profiles.sql](supabase/create_subscriber_profiles.sql)
3. Paste into the SQL Editor
4. Click "Run"

This creates the `subscriber_profiles` table with proper indexes and Row Level Security policies.

---

### Step 2: Deploy Updated Edge Function

You need to deploy the updated `subscribe-beehiiv` function:

**Option A: Using Supabase CLI (Recommended)**

```bash
cd /Users/alfie/Desktop/pixel-perfect

# Login to Supabase CLI (if not already)
npx supabase login

# Deploy the function
npx supabase functions deploy subscribe-beehiiv --project-ref nbwzrmmlbfbqsifdrmux
```

**Option B: Using Supabase Dashboard**

1. Go to: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/functions
2. Click on "subscribe-beehiiv" function
3. Click "Edit function"
4. Copy the contents of [supabase/functions/subscribe-beehiiv/index.ts](supabase/functions/subscribe-beehiiv/index.ts)
5. Paste and save

---

### Step 3: Configure Beehiiv Custom Fields

Before the questionnaire data appears in Beehiiv, you need to create custom fields in your Beehiiv account:

1. Go to: https://app.beehiiv.com/publications/[your-pub-id]/settings/custom-fields
2. Create 3 new custom fields:
   - **Field name:** `city` | **Type:** Text
   - **Field name:** `role` | **Type:** Text
   - **Field name:** `interests` | **Type:** Text

These field names must match exactly (lowercase) for the API to work.

---

### Step 4: Test the Flow

1. Open your website: http://localhost:5173 (or your production URL)
2. Click "Join the Transmission" button
3. Complete all 3 steps of the questionnaire
4. Verify:
   - Success message appears: "✓ You're in the transmission."
   - Check Supabase: New row in `subscriber_profiles` table
   - Check Beehiiv: New subscriber with custom fields populated

---

## 📊 What This Enables

Once deployed, you can now:

### Sponsor Targeting
- **Geo-targeting**: "Show this ad only to Miami agents"
- **Role-based**: "Target only Team Leaders and Brokers"
- **Interest-based**: "Show AI tools to people interested in AI & tech"

### Example Segments
- "Tech-Forward Miami Agents" (City=Miami, Role=Agent, Interests includes "AI & tech tools")
- "Growth-Minded Team Leaders" (Role=Team Leader, Interests includes "Business growth")
- "Commercial Real Estate Pros" (Interests includes "Commercial real estate")

### Analytics
Query your subscriber base:
```sql
-- Most popular cities
SELECT city, COUNT(*) as count
FROM subscriber_profiles
GROUP BY city
ORDER BY count DESC;

-- Interest distribution
SELECT unnest(interests) as interest, COUNT(*) as count
FROM subscriber_profiles
GROUP BY interest
ORDER BY count DESC;

-- Role breakdown
SELECT role, COUNT(*) as count
FROM subscriber_profiles
GROUP BY role
ORDER BY count DESC;
```

---

## 🎯 Next Steps

After deployment:
1. Test the full flow end-to-end
2. Monitor the `subscriber_profiles` table for incoming data
3. Verify custom fields appear in Beehiiv dashboard
4. Start building sponsor pitch deck with targeting options

---

## 📝 Files Modified

- `src/components/SubscribeModal.tsx` - New 3-step questionnaire component
- `src/components/HeroSection.tsx` - Updated to use modal
- `src/components/BottomCTA.tsx` - Updated to use modal
- `supabase/functions/subscribe-beehiiv/index.ts` - Updated to handle custom fields
- `supabase/migrations/20260226175024_create_subscriber_profiles_table.sql` - Database migration
- `supabase/create_subscriber_profiles.sql` - Standalone SQL file for manual execution

---

## ❓ Questions?

If you encounter any issues:
- Check Supabase logs: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/logs
- Test edge function directly in Supabase dashboard
- Verify Beehiiv custom fields are created correctly
