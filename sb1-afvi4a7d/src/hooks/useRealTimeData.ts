import { useEffect, useState } from 'react';
import { RealTimeService } from '../services/realTimeService';
import { ProtocolService } from '../services/protocols/protocolService';
import { YieldUpdate } from '../services/protocols/types';

export function useRealTimeData(poolId?: string) {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [poolData, setPoolData] = useState<YieldUpdate | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const realTimeService = RealTimeService.getInstance();
    const protocolService = ProtocolService.getInstance();
    
    // Subscribe to general updates
    const unsubscribe = realTimeService.subscribe(() => {
      setLastUpdate(new Date());
    });

    // Subscribe to pool-specific updates if poolId is provided
    let unsubscribePool: (() => void) | undefined;
    if (poolId) {
      unsubscribePool = protocolService.onPoolUpdate((update) => {
        if (update.poolId === poolId) {
          setPoolData(update.update);
        }
      });
    }

    const unsubscribeError = realTimeService.onError((error) => {
      setError(error);
    });

    return () => {
      unsubscribe();
      if (unsubscribePool) {
        unsubscribePool();
      }
      unsubscribeError();
    };
  }, [poolId]);

  return { lastUpdate, poolData, error };
}