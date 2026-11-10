/*
# Create tourist callback requests

1. New Tables
- `tourist_callback_requests`
  - `id` (uuid, primary key)
  - `service_key` (text, which UAE tourist service the visitor asked about)
  - `full_name` (text, required)
  - `phone` (text, required)
  - `email` (text, required)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `tourist_callback_requests`.
- Website visitors (anon and signed-in roles) may only INSERT a request, and only through the grant below.
- SELECT, UPDATE and DELETE policies exist and deny everything, so submitted leads cannot be read or changed from the public site.

3. Notes
- Field lengths are capped with check constraints to keep bad input out of the table.
*/

CREATE TABLE IF NOT EXISTS tourist_callback_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_key text NOT NULL CHECK (char_length(service_key) BETWEEN 1 AND 60),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 1 AND 40),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE tourist_callback_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON tourist_callback_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_tourist_callback_requests" ON tourist_callback_requests;
CREATE POLICY "anon_insert_tourist_callback_requests"
ON tourist_callback_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "deny_select_tourist_callback_requests" ON tourist_callback_requests;
CREATE POLICY "deny_select_tourist_callback_requests"
ON tourist_callback_requests FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "deny_update_tourist_callback_requests" ON tourist_callback_requests;
CREATE POLICY "deny_update_tourist_callback_requests"
ON tourist_callback_requests FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "deny_delete_tourist_callback_requests" ON tourist_callback_requests;
CREATE POLICY "deny_delete_tourist_callback_requests"
ON tourist_callback_requests FOR DELETE
TO anon, authenticated
USING (false);
