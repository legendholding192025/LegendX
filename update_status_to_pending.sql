-- Update all existing "new" status submissions to "pending"
UPDATE legendx_contact_submissions 
SET status = 'pending' 
WHERE status = 'new';

-- Verify the update
SELECT status, COUNT(*) as count 
FROM legendx_contact_submissions 
GROUP BY status 
ORDER BY status; 