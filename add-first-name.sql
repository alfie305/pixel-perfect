-- Add first_name column to subscriber_profiles table
ALTER TABLE subscriber_profiles ADD COLUMN IF NOT EXISTS first_name TEXT;

-- Add index on first_name for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscriber_profiles_first_name ON subscriber_profiles(first_name);
