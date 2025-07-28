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

console.log('Supabase URL:', supabaseUrl);
console.log('Service Key exists:', !!supabaseServiceKey);

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdminUser() {
  try {
    const adminEmail = 'admin@legendx.com';
    const adminPassword = 'LegendX2024!';

    console.log('Creating admin user...');
    console.log('Email:', adminEmail);
    console.log('Password:', adminPassword);

    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: { role: 'admin' }
    });

    if (error) {
      console.error('Error creating user:', error);
      console.error('Error details:', error.message);
      return;
    }

    if (!data || !data.user) {
      console.error('No user data returned');
      return;
    }

    console.log('✅ User created successfully!');
    console.log('User ID:', data.user.id);
    console.log('User Email:', data.user.email);

    // Add user to legendx_admin_users table
    const { data: adminData, error: adminError } = await supabase
      .from('legendx_admin_users')
      .insert([
        {
          id: data.user.id,
          email: adminEmail,
          role: 'super_admin'
        }
      ])
      .select();

    if (adminError) {
      console.error('Error adding user to admin table:', adminError);
      return;
    }

    console.log('✅ Admin user setup completed successfully!');
    console.log('You can now login at /admin/login');
    console.log('Email:', adminEmail);
    console.log('Password:', adminPassword);

  } catch (error) {
    console.error('Setup failed:', error);
    console.error('Error stack:', error.stack);
  }
}

createAdminUser(); 