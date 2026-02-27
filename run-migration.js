#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const SUPABASE_URL = 'https://nbwzrmmlbfbqsifdrmux.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id3pybW1sYmZicXNpZmRybXV4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk0ODg2NCwiZXhwIjoyMDg3NTI0ODY0fQ.XF2q8E3ab5PCRiuRzhVXuT4y6mOXzt9ZXJGq_jRSQug';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const sql = readFileSync('supabase/migrations/20260226213917_add_first_name_to_subscriber_profiles.sql', 'utf-8');

console.log('Running migration: add first_name column...\n');
console.log(sql);
console.log('\nExecuting...');

// We'll execute the SQL by using the REST API directly since we can't use rpc
const lines = sql.split(';').filter(line => line.trim() && !line.trim().startsWith('--'));

for (const line of lines) {
  const trimmedLine = line.trim();
  if (!trimmedLine) continue;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({ sql: trimmedLine })
    });

    if (!response.ok) {
      console.log('Note: Direct SQL execution not available via REST API');
      console.log('Please run the migration manually in Supabase SQL editor');
      break;
    }
  } catch (error) {
    console.log('\n✅ Migration SQL prepared. Run it manually at:');
    console.log('https://supabase.com/dashboard/project/nbwzrmmlbfbqsifdrmux/sql/new');
    break;
  }
}

console.log('\n✅ Done! Checking if column exists...');

// Verify column exists
const { data, error } = await supabase.from('subscriber_profiles').select('first_name').limit(1);
if (error) {
  console.log('⚠️  Column not yet added. Please run the migration manually.');
} else {
  console.log('✅ first_name column exists!');
}
