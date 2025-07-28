const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkDatabase() {
  try {
    console.log('🔍 Checking database setup...\n');

    // Check if legendx_contact_submissions table exists
    const { data: contactData, error: contactError } = await supabase
      .from('legendx_contact_submissions')
      .select('count')
      .limit(1);

    if (contactError) {
      console.log('❌ legendx_contact_submissions table:', contactError.message);
    } else {
      console.log('✅ legendx_contact_submissions table: EXISTS');
    }

    // Check if legendx_admin_users table exists
    const { data: adminData, error: adminError } = await supabase
      .from('legendx_admin_users')
      .select('count')
      .limit(1);

    if (adminError) {
      console.log('❌ legendx_admin_users table:', adminError.message);
    } else {
      console.log('✅ legendx_admin_users table: EXISTS');
    }

    // Check existing users
    const { data: users, error: usersError } = await supabase.auth.admin.listUsers();
    
    if (usersError) {
      console.log('❌ Error fetching users:', usersError.message);
    } else {
      console.log(`✅ Found ${users.users.length} existing users`);
      users.users.forEach(user => {
        console.log(`   - ${user.email} (${user.id})`);
      });
    }

    console.log('\n📋 Database Status Summary:');
    console.log('- Contact submissions table:', contactError ? 'MISSING' : 'OK');
    console.log('- Admin users table:', adminError ? 'MISSING' : 'OK');
    console.log('- Auth users:', usersError ? 'ERROR' : 'OK');

  } catch (error) {
    console.error('❌ Database check failed:', error.message);
  }
}

checkDatabase(); 