const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables:');
  console.error('- NEXT_PUBLIC_SUPABASE_URL');
  console.error('- SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createAdminUser() {
  try {
    const adminEmail = 'admin@legendx.com'; // Change this to your preferred email
    const adminPassword = 'LegendX2024!'; // Change this to your preferred password

    console.log('Creating admin user...');
    console.log('Email:', adminEmail);
    console.log('Password:', adminPassword);

    // Create user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true
    });

    if (authError) {
      console.error('Error creating user:', authError.message);
      return;
    }

    console.log('✅ User created successfully:', authData.user.email);
    console.log('User ID:', authData.user.id);

    // Add user to legendx_admin_users table
    const { data: adminData, error: adminError } = await supabase
      .from('legendx_admin_users')
      .insert([
        {
          id: authData.user.id,
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
    console.log('Password:', adminPassword);

  } catch (error) {
    console.error('Setup failed:', error.message);
  }
}

createAdminUser(); 