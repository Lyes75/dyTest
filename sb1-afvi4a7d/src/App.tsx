import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Header from './components/Header';
import YieldTable from './components/YieldTable';
import StakingTable from './components/staking/StakingTable';
import RealTimeIndicator from './components/RealTimeIndicator';
import { FilterBar } from './components/filters/FilterBar';
import { opportunities } from './data/opportunities';
import { stakingOpportunities } from './data/stakingOpportunities';
import { useOpportunityFilters } from './hooks/useOpportunityFilters';
import { UnsubscribePage } from './pages/UnsubscribePage';
import { AuthCallbackPage } from './pages/AuthCallbackPage';
import { supabase } from './config/env';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/unsubscribe',
    element: <UnsubscribePage />,
  },
  {
    path: '/auth/callback',
    element: <AuthCallbackPage />,
  },
]);

function MainPage() {
  const {
    selectedChain,
    setSelectedChain,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    filteredOpportunities: yieldOpps
  } = useOpportunityFilters(opportunities);

  const {
    filteredOpportunities: stakingOpps
  } = useOpportunityFilters(stakingOpportunities);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <FilterBar
          selectedChain={selectedChain}
          onChainSelect={setSelectedChain}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top Yield Opportunities</h2>
            <RealTimeIndicator />
          </div>
          <YieldTable opportunities={yieldOpps} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Best Staking Yields</h2>
            <RealTimeIndicator />
          </div>
          <StakingTable opportunities={stakingOpps} />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <RouterProvider router={router} />
    </SessionContextProvider>
  );
}

export default App;