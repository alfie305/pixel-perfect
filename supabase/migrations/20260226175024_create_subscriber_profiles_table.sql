-- Create subscriber_profiles table to store questionnaire data
CREATE TABLE IF NOT EXISTS subscriber_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  city TEXT,
  role TEXT,
  interests TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscriber_profiles_email ON subscriber_profiles(email);

-- Add index on city for segmentation queries
CREATE INDEX IF NOT EXISTS idx_subscriber_profiles_city ON subscriber_profiles(city);

-- Add index on role for segmentation queries
CREATE INDEX IF NOT EXISTS idx_subscriber_profiles_role ON subscriber_profiles(role);

-- Enable Row Level Security
ALTER TABLE subscriber_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to manage all data
CREATE POLICY "Service role can manage all profiles"
  ON subscriber_profiles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create policy to allow authenticated users to read (for dashboard/analytics)
CREATE POLICY "Authenticated users can read profiles"
  ON subscriber_profiles
  FOR SELECT
  TO authenticated
  USING (true);
