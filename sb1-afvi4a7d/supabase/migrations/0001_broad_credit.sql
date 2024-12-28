/*
  # Email Alert System Tables

  1. New Tables
    - `email_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
    - `alert_configurations`
      - `id` (uuid, primary key)
      - `subscriber_id` (uuid, references email_subscribers)
      - `pool_id` (text)
      - `metric` (text, either 'apy' or 'tvl')
      - `threshold` (numeric)
      - `created_at` (timestamp)
    - `unsubscribed_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `unsubscribed_at` (timestamp)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create email_subscribers table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Create alert_configurations table
CREATE TABLE IF NOT EXISTS alert_configurations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id uuid REFERENCES email_subscribers NOT NULL,
  pool_id text NOT NULL,
  metric text NOT NULL CHECK (metric IN ('apy', 'tvl')),
  threshold numeric NOT NULL CHECK (threshold > 0),
  created_at timestamptz DEFAULT now()
);

-- Create unsubscribed_users table
CREATE TABLE IF NOT EXISTS unsubscribed_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  unsubscribed_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE alert_configurations ENABLE ROW LEVEL SECURITY;
ALTER TABLE unsubscribed_users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own subscriptions"
  ON email_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscriptions"
  ON email_subscribers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own subscriptions"
  ON email_subscribers
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own alert configurations"
  ON alert_configurations
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM email_subscribers
      WHERE email_subscribers.id = alert_configurations.subscriber_id
      AND email_subscribers.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can manage their own alert configurations"
  ON alert_configurations
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM email_subscribers
      WHERE email_subscribers.id = alert_configurations.subscriber_id
      AND email_subscribers.user_id = auth.uid()
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_subscribers_user_id ON email_subscribers(user_id);
CREATE INDEX IF NOT EXISTS idx_alert_configurations_subscriber_id ON alert_configurations(subscriber_id);
CREATE INDEX IF NOT EXISTS idx_unsubscribed_users_email ON unsubscribed_users(email);