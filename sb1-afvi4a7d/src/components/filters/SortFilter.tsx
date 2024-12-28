import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortFilterProps {
  value: 'apy' | 'tvl' | 'risk';
  onChange: (value: 'apy' | 'tvl' | 'risk') => void;
}

export function SortFilter({ value, onChange }: SortFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-4 w-4 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as 'apy' | 'tvl' | 'risk')}
        className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="apy">Sort by APY</option>
        <option value="tvl">Sort by TVL</option>
        <option value="risk">Sort by Risk</option>
      </select>
    </div>
  );
}