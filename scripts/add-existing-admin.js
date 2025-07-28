const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function addExistingAdmin() {
  try {
    console.log('🔧 Adding existing user to admin table...\n');

    // Use waseem.k@legendholding.com (existing user)
    const adminEmail = 'waseem.k@legendholding.com';
    const adminUserId = '989c81d1-55f3-4f7c-87b9-c4aa641923ff';

    console.log('Using existing user:');
    console.log('Email:', adminEmail);
    console.log('User ID:', adminUserId);

    // Check if user already exists in admin table
    const { data: existingAdmin, error: checkError } = await supabase
      .from('legendx_admin_users')
      .select('*')
      .eq('id', adminUserId)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing admin:', checkError.message);
      return;
    }

    if (existingAdmin) {
      console.log('✅ User is already an admin!');
      console.log('You can login with:', adminEmail);
      return;
    }

    // Add user to legendx_admin_users table
    const { data: adminData, error: adminError } = await supabase
      .from('legendx_admin_users')
      .insert([
        {
          id: adminUserId,
          email: adminEmail,
          role: 'super_admin'
        }
      ])
      .select();

    if (adminError) {
      console.error('Error adding user to admin table:', adminError.message);
      return;
    }

    console.log('✅ Admin user setup completed successfully!');
    console.log('You can now login at /admin/login');
    console.log('Email:', adminEmail);
    console.log('Note: Use the password you set for this user in Supabase Auth');

  } catch (error) {
    console.error('Setup failed:', error.message);
  }
}

addExistingAdmin(); 