-- Check if RLS is enabled on the table
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'legendx_contact_submissions';

-- Check existing policies on the table
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'legendx_contact_submissions';

-- Check if the table exists and its structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'legendx_contact_submissions'
ORDER BY ordinal_position; 