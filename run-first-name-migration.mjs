#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nbwzrmmlbfbqsifdrmux.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id3pybW1sYmZicXNpZmRybXV4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk0ODg2NCwiZXhwIjoyMDg3NTI0ODY0fQ.XF2q8E3ab5PCRiuRzhVXuT4y6mOXzt9ZXJGq_jRSQug';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

console.log('🔧 Adding first_name column to subscriber_profiles...\n');

// Try to select from the table with first_name column
const { data, error } = await supabase
  .from('subscriber_profiles')
  .select('first_name')
  .limit(1);

if (error) {
  if (error.message.includes('first_name')) {
    console.log('❌ Column does not exist yet. Need to run migration in SQL Editor.');
    console.log('\nGo to: https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/sql/new');
    console.log('\nRun this SQL:\n');
    console.log('ALTER TABLE subscriber_profiles ADD COLUMN IF NOT EXISTS first_name TEXT;');
    console.log('CREATE INDEX IF NOT EXISTS idx_subscriber_profiles_first_name ON subscriber_profiles(first_name);');
  } else {
    console.error('❌ Error:', error.message);
  }
} else {
  console.log('✅ first_name column already exists!');
  console.log('✅ Migration complete - ready to test!');
}
