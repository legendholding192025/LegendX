-- Manual Admin User Creation SQL
-- Run these commands in your Supabase SQL Editor

-- Step 1: Create the user in auth.users table
INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  gen_random_uuid(),
  'admin@legendx.com',
  crypt('LegendX2024!', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  false,
  '',
  '',
  '',
  ''
);

-- Step 2: Get the user ID (run this separately to see the ID)
SELECT id, email FROM auth.users WHERE email = 'admin@legendx.com';

-- Step 3: Add to admin table (replace 'USER_ID_HERE' with the actual UUID from step 2)
-- INSERT INTO legendx_admin_users (id, email, role) 
-- VALUES ('USER_ID_HERE', 'admin@legendx.com', 'super_admin'); 