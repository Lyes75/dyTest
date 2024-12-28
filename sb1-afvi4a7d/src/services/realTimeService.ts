import { YieldOpportunity, StakingOpportunity } from '../types';
import { opportunities } from '../data/opportunities';
import { stakingOpportunities } from '../data/stakingOpportunities';
import { generateMockUpdates } from './mockDataGenerator';
import { ProtocolService } from './protocols/protocolService';

type DataUpdateCallback = () => void;
type ErrorCallback = (error: Error) => void;

export class RealTimeService {
  private static instance: RealTimeService;
  private subscribers: Set<DataUpdateCallback> = new Set();
  private errorHandlers: Set<ErrorCallback> = new Set();
  private updateInterval: NodeJS.Timer | null = null;
  private fastUpdateInterval: NodeJS.Timer | null = null;
  private protocolService: ProtocolService;
  
  private constructor() {
    this.protocolService = ProtocolService.getInstance();
    this.startMockUpdates();
  }

  static getInstance(): RealTimeService {
    if (!RealTimeService.instance) {
      RealTimeService.instance = new RealTimeService();
    }
    return RealTimeService.instance;
  }

  private startMockUpdates() {
    // Initial update
    this.handleDataUpdate({
      yields: opportunities,
      staking: stakingOpportunities
    });

    // Fast updates for APY (every 2 seconds)
    this.fastUpdateInterval = setInterval(() => {
      this.handleFastUpdate();
    }, 2000);

    // Larger updates for TVL and other metrics (every 10 seconds)
    this.updateInterval = setInterval(() => {
      const updates = generateMockUpdates(opportunities, stakingOpportunities);
      this.handleDataUpdate(updates);
    }, 10000);
  }

  private handleFastUpdate() {
    try {
      // Update only APY values with small variations
      [...opportunities, ...stakingOpportunities].forEach(pool => {
        const variation = 0.98 + Math.random() * 0.04; // ±2% change
        const newApy = pool.apy * variation;
        
        this.protocolService.notifyPoolUpdate({
          poolId: pool.id,
          protocol: pool.protocol,
          chain: pool.chain,
          update: {
            timestamp: Date.now(),
            apy: newApy,
            tvl: pool.tvl,
            baseRewards: newApy * 0.7,
            incentiveRewards: newApy * 0.3
          }
        });
      });

      this.notifySubscribers();
    } catch (error) {
      this.notifyError(error instanceof Error ? error : new Error('Fast update failed'));
    }
  }

  private handleDataUpdate(data: { yields: YieldOpportunity[], staking: StakingOpportunity[] }) {
    try {
      [...data.yields, ...data.staking].forEach(pool => {
        this.protocolService.notifyPoolUpdate({
          poolId: pool.id,
          protocol: pool.protocol,
          chain: pool.chain,
          update: {
            timestamp: Date.now(),
            apy: pool.apy,
            tvl: pool.tvl,
            baseRewards: pool.apy * 0.7,
            incentiveRewards: pool.apy * 0.3
          }
        });
      });

      this.notifySubscribers();
    } catch (error) {
      this.notifyError(error instanceof Error ? error : new Error('Update failed'));
    }
  }

  private notifyError(error: Error) {
    this.errorHandlers.forEach(handler => handler(error));
  }

  subscribe(callback: DataUpdateCallback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  onError(callback: ErrorCallback) {
    this.errorHandlers.add(callback);
    return () => this.errorHandlers.delete(callback);
  }

  private notifySubscribers() {
    this.subscribers.forEach(callback => callback());
  }

  cleanup() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    if (this.fastUpdateInterval) {
      clearInterval(this.fastUpdateInterval);
    }
  }
}