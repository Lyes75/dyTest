import React from 'react';
import { ChainFilter } from './ChainFilter';
import { SortFilter } from './SortFilter';
import { SearchFilter } from './SearchFilter';
import { Chain } from '../../types';

interface FilterBarProps {
  selectedChain: Chain | 'all';
  onChainSelect: (chain: Chain | 'all') => void;
  sortBy: 'apy' | 'tvl' | 'risk';
  onSortChange: (sort: 'apy' | 'tvl' | 'risk') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({
  selectedChain,
  onChainSelect,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow mb-6">
      <ChainFilter selectedChain={selectedChain} onChainSelect={onChainSelect} />
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchFilter value={searchQuery} onChange={onSearchChange} />
        <SortFilter value={sortBy} onChange={onSortChange} />
      </div>
    </div>
  );
}