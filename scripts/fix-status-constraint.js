const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function fixStatusConstraint() {
  try {
    console.log('🔧 Fixing status constraint...');
    
    // Drop the existing constraint
    const { error: dropError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE legendx_contact_submissions DROP CONSTRAINT IF EXISTS legendx_contact_submissions_status_check;'
    });

    if (dropError) {
      console.log('Note: Could not drop constraint (might not exist):', dropError.message);
    }

    // Add the new constraint
    const { error: addError } = await supabase.rpc('exec_sql', {
      sql: `ALTER TABLE legendx_contact_submissions 
            ADD CONSTRAINT legendx_contact_submissions_status_check 
            CHECK (status IN ('pending', 'contacted', 'completed', 'archived'));`
    });

    if (addError) {
      console.error('Error adding constraint:', addError);
      return;
    }

    console.log('✅ Successfully updated constraint');

    // Update existing "new" status to "pending"
    console.log('🔄 Updating "new" status to "pending"...');
    
    const { data, error } = await supabase
      .from('legendx_contact_submissions')
      .update({ status: 'pending' })
      .eq('status', 'new');

    if (error) {
      console.error('Error updating status:', error);
      return;
    }

    console.log('✅ Successfully updated status from "new" to "pending"');
    
    // Verify the update
    const { data: countData, error: countError } = await supabase
      .from('legendx_contact_submissions')
      .select('status');

    if (countError) {
      console.error('Error counting submissions:', countError);
      return;
    }

    const statusCounts = countData.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {});

    console.log('📊 Current status distribution:');
    Object.entries(statusCounts).forEach(([status, count]) => {
      console.log(`  ${status}: ${count}`);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

fixStatusConstraint(); 