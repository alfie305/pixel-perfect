#!/usr/bin/env node

/**
 * Setup script for questionnaire feature
 * This script will:
 * 1. Create the subscriber_profiles table in Supabase
 * 2. Verify the edge function is deployed
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get Supabase credentials from environment or prompt
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://nbwzrmmlbfbqsifdrmux.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('\n❌ Error: SUPABASE_SERVICE_ROLE_KEY environment variable is required');
  console.error('\nTo run this script:');
  console.error('1. Get your service role key from: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/settings/api');
  console.error('2. Run: SUPABASE_SERVICE_ROLE_KEY=your_key_here node setup-questionnaire.js\n');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function createTable() {
  console.log('\n📊 Creating subscriber_profiles table...');

  const sql = readFileSync(join(__dirname, 'supabase/create_subscriber_profiles.sql'), 'utf-8');

  try {
    const { error } = await supabase.rpc('exec_sql', { sql_string: sql });

    if (error) {
      // Try alternative method - direct query
      const { error: directError } = await supabase.from('subscriber_profiles').select('count').limit(1);

      if (directError && !directError.message.includes('does not exist')) {
        throw directError;
      }

      // If we can't create via RPC, instruct manual creation
      console.log('⚠️  Unable to create table automatically.');
      console.log('\nPlease run the SQL manually:');
      console.log('1. Go to: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/sql/new');
      console.log('2. Copy the contents of supabase/create_subscriber_profiles.sql');
      console.log('3. Paste and run\n');
      return false;
    }

    console.log('✅ Table created successfully!\n');
    return true;
  } catch (err) {
    console.error('❌ Error creating table:', err.message);
    console.log('\nPlease run the SQL manually:');
    console.log('1. Go to: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/sql/new');
    console.log('2. Copy the contents of supabase/create_subscriber_profiles.sql');
    console.log('3. Paste and run\n');
    return false;
  }
}

async function verifySetup() {
  console.log('🔍 Verifying setup...\n');

  // Check if table exists
  const { data, error } = await supabase.from('subscriber_profiles').select('count').limit(1);

  if (error) {
    console.log('❌ Table does not exist or is not accessible');
    return false;
  }

  console.log('✅ subscriber_profiles table exists and is accessible');
  return true;
}

async function main() {
  console.log('🚀 Setting up questionnaire feature...\n');
  console.log('Project: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux\n');

  // Try to create table
  await createTable();

  // Verify setup
  const isSetup = await verifySetup();

  if (isSetup) {
    console.log('\n✅ Database setup complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Deploy edge function: npx supabase functions deploy subscribe-beehiiv');
    console.log('2. Configure Beehiiv custom fields (city, role, interests)');
    console.log('3. Test the flow at http://localhost:5173\n');
  } else {
    console.log('\n⚠️  Setup incomplete. Please follow manual steps in DEPLOYMENT_STEPS.md\n');
  }
}

main().catch(console.error);
