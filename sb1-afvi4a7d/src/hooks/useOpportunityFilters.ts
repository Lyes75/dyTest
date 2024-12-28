import { useState, useMemo } from 'react';
import { Chain } from '../types';

interface Opportunity {
  chain: Chain;
  protocol: string;
  apy: number;
  tvl: number;
  riskScore: number;
}

export function useOpportunityFilters<T extends Opportunity>(opportunities: T[]) {
  const [selectedChain, setSelectedChain] = useState<Chain | 'all'>('all');
  const [sortBy, setSortBy] = useState<'apy' | 'tvl' | 'risk'>('apy');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOpportunities = useMemo(() => {
    let filtered = [...opportunities];

    // Apply chain filter
    if (selectedChain !== 'all') {
      filtered = filtered.filter(opp => opp.chain === selectedChain);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(opp => 
        opp.protocol.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'apy':
          return b.apy - a.apy;
        case 'tvl':
          return b.tvl - a.tvl;
        case 'risk':
          return a.riskScore - b.riskScore;
        default:
          return 0;
      }
    });

    // Limit to 10 opportunities
    return filtered.slice(0, 10);
  }, [opportunities, selectedChain, sortBy, searchQuery]);

  return {
    selectedChain,
    setSelectedChain,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    filteredOpportunities,
  };
}