export interface EmailSubscriber {
  id: string;
  email: string;
  created_at: string;
  user_id: string;
}

export interface AlertConfiguration {
  id: string;
  subscriber_id: string;
  pool_id: string;
  metric: 'apy' | 'tvl';
  threshold: number;
  created_at: string;
}

export interface AlertThresholdConfig {
  poolId: string;
  metric: 'apy' | 'tvl';
  threshold: number;
}

export interface MetricChange {
  poolId: string;
  metric: 'apy' | 'tvl';
  previousValue: number;
  currentValue: number;
  percentageChange: number;
}