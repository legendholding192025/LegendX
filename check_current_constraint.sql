-- First, let's see what the current constraint allows
SELECT conname, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'legendx_contact_submissions'::regclass 
AND contype = 'c';

-- Check what statuses currently exist
SELECT DISTINCT status FROM legendx_contact_submissions;

-- Check the constraint definition more specifically
SELECT 
    tc.constraint_name, 
    tc.constraint_type,
    cc.check_clause
FROM information_schema.table_constraints tc
JOIN information_schema.check_constraints cc 
    ON tc.constraint_name = cc.constraint_name
WHERE tc.table_name = 'legendx_contact_submissions' 
    AND tc.constraint_type = 'CHECK'; 