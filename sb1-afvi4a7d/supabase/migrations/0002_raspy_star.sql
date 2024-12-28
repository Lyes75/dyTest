/*
  # Add Email Templates Table

  1. New Tables
    - `email_templates`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `subject` (text)
      - `html_content` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on email_templates table
    - Add policy for authenticated users to read templates
*/

-- Create email_templates table
CREATE TABLE IF NOT EXISTS email_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  subject text NOT NULL,
  html_content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;

-- Create policy for reading templates
CREATE POLICY "Allow authenticated users to read templates"
  ON email_templates
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert default templates
INSERT INTO email_templates (name, subject, html_content) VALUES
  ('welcome_alert', 'Welcome to DeFiYield.io Alerts!', '
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to DeFiYield.io Alerts</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .unsubscribe {
      color: #6B7280;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Hello,</p>

    <p>Thank you for subscribing to DeFiYield.io alerts!</p>

    <p>You will now receive personalized updates on APY and TVL changes for your favorite liquidity pools.</p>

    <p>If you no longer wish to receive our alerts, you can unsubscribe at any time by clicking the link below:</p>

    <p><a href="{{unsubscribeUrl}}" class="unsubscribe">Unsubscribe</a></p>

    <p>
      Best regards,<br>
      The DeFiYield.io Team
    </p>
  </div>
</body>
</html>
  ');