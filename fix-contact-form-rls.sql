-- First, let's disable RLS temporarily to test if that's the issue
ALTER TABLE legendx_contact_submissions DISABLE ROW LEVEL SECURITY;

-- If you want to keep RLS enabled, uncomment and run these lines instead:

-- -- Drop all existing policies on the table
-- DROP POLICY IF EXISTS "Anyone can insert LegendX contact submissions" ON legendx_contact_submissions;
-- DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON legendx_contact_submissions;
-- DROP POLICY IF EXISTS "Enable read access for all users" ON legendx_contact_submissions;
-- DROP POLICY IF EXISTS "Enable update for users based on email" ON legendx_contact_submissions;
-- DROP POLICY IF EXISTS "Enable delete for users based on user_id" ON legendx_contact_submissions;

-- -- Re-enable RLS
-- ALTER TABLE legendx_contact_submissions ENABLE ROW LEVEL SECURITY;

-- -- Create a simple policy that allows anyone to insert
-- CREATE POLICY "Allow public inserts" ON legendx_contact_submissions
--   FOR INSERT 
--   WITH CHECK (true);

-- -- Optional: Allow admins to read all submissions (you'll need to adjust this based on your admin table)
-- CREATE POLICY "Allow admin reads" ON legendx_contact_submissions
--   FOR SELECT 
--   USING (true); 