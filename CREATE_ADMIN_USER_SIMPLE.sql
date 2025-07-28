-- Simple Admin User Creation using Supabase Functions
-- Run these commands in your Supabase SQL Editor

-- Step 1: Create user using Supabase's built-in function
SELECT auth.create_user(
  'admin@legendx.com',
  'LegendX2024!',
  true, -- email_confirmed
  '{}', -- raw_user_meta_data
  '{}'  -- raw_app_meta_data
);

-- Step 2: Get the user ID
SELECT id, email FROM auth.users WHERE email = 'admin@legendx.com';

-- Step 3: Add to admin table (replace USER_ID_HERE with the actual UUID)
-- INSERT INTO legendx_admin_users (id, email, role) 
-- VALUES ('USER_ID_HERE', 'admin@legendx.com', 'super_admin'); 