-- Step 1: First update all existing "new" status to "pending"
UPDATE legendx_contact_submissions 
SET status = 'pending' 
WHERE status = 'new';

-- Step 2: Drop the existing constraint
ALTER TABLE legendx_contact_submissions 
DROP CONSTRAINT IF EXISTS legendx_contact_submissions_status_check;

-- Step 3: Add the new constraint with "pending" instead of "new"
ALTER TABLE legendx_contact_submissions 
ADD CONSTRAINT legendx_contact_submissions_status_check 
CHECK (status IN ('pending', 'contacted', 'completed', 'archived'));

-- Step 4: Verify the update
SELECT status, COUNT(*) as count 
FROM legendx_contact_submissions 
GROUP BY status 
ORDER BY status; 