import { YieldOpportunity, Chain } from '../types';

export const opportunities: YieldOpportunity[] = [
  // Ethereum Opportunities
  {
    id: '1',
    protocol: 'Aave V3',
    chain: Chain.ETHEREUM,
    apy: 5.2,
    tvl: 1_452_000_000,
    riskScore: 15,
    token: 'ETH',
    rewardToken: 'AAVE',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/aave/aave-v3-core/blob/master/audits/27-01-2022_SigmaPrime_AaveV3.pdf',
    poolUrl: 'https://app.aave.com/reserve-overview/ETH'
  },
  {
    id: '2',
    protocol: 'Curve Finance',
    chain: Chain.ETHEREUM,
    apy: 18.5,
    tvl: 982_000_000,
    riskScore: 20,
    token: 'ETH-USDC',
    rewardToken: 'CRV',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://curve.fi/files/curve-audit.pdf',
    poolUrl: 'https://curve.fi/#/ethereum/pools'
  },
  {
    id: '3',
    protocol: 'Uniswap V3',
    chain: Chain.ETHEREUM,
    apy: 32.8,
    tvl: 890_000_000,
    riskScore: 25,
    token: 'ETH-USDT',
    rewardToken: 'UNI',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/Uniswap/v3-core/blob/main/audits/20210315_Trail_of_Bits.pdf',
    poolUrl: 'https://app.uniswap.org/#/pools'
  },
  {
    id: '4',
    protocol: 'Balancer',
    chain: Chain.ETHEREUM,
    apy: 28.4,
    tvl: 680_000_000,
    riskScore: 25,
    token: 'BAL-ETH',
    rewardToken: 'BAL',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.balancer.fi/reference/security/audits',
    poolUrl: 'https://app.balancer.fi/#/ethereum/pools'
  },
  {
    id: '5',
    protocol: 'Convex Finance',
    chain: Chain.ETHEREUM,
    apy: 21.5,
    tvl: 725_000_000,
    riskScore: 35,
    token: 'CVX-ETH',
    rewardToken: 'CVX',
    lockupPeriod: 16,
    audited: true,
    auditUrl: 'https://docs.convexfinance.com/convexfinance/faq/security',
    poolUrl: 'https://www.convexfinance.com/stake'
  },
  {
    id: '6',
    protocol: 'Lido Finance',
    chain: Chain.ETHEREUM,
    apy: 3.8,
    tvl: 2_500_000_000,
    riskScore: 20,
    token: 'ETH',
    rewardToken: 'stETH',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/lidofinance/audits',
    poolUrl: 'https://stake.lido.fi/'
  },
  {
    id: '7',
    protocol: 'Frax Finance',
    chain: Chain.ETHEREUM,
    apy: 15.3,
    tvl: 520_000_000,
    riskScore: 30,
    token: 'FRAX',
    rewardToken: 'FXS',
    lockupPeriod: 7,
    audited: true,
    auditUrl: 'https://docs.frax.finance/smart-contracts/security',
    poolUrl: 'https://app.frax.finance/staking'
  },
  {
    id: '8',
    protocol: 'Yearn Finance',
    chain: Chain.ETHEREUM,
    apy: 12.8,
    tvl: 450_000_000,
    riskScore: 28,
    token: 'ETH-DAI',
    rewardToken: 'YFI',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/yearn/yearn-security/tree/master/audits',
    poolUrl: 'https://yearn.finance/vaults'
  },
  {
    id: '9',
    protocol: 'Compound V3',
    chain: Chain.ETHEREUM,
    apy: 4.8,
    tvl: 890_000_000,
    riskScore: 18,
    token: 'USDC',
    rewardToken: 'COMP',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/compound-finance/compound-protocol/tree/master/audits',
    poolUrl: 'https://app.compound.finance/'
  },
  {
    id: '10',
    protocol: 'dYdX',
    chain: Chain.ETHEREUM,
    apy: 8.5,
    tvl: 380_000_000,
    riskScore: 32,
    token: 'ETH-USDC',
    rewardToken: 'DYDX',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.dydx.community/dydx-governance/security/audits',
    poolUrl: 'https://trade.dydx.exchange/portfolio/overview'
  },

  // BSC Opportunities
  {
    id: '11',
    protocol: 'PancakeSwap',
    chain: Chain.BSC,
    apy: 120.5,
    tvl: 545_000_000,
    riskScore: 45,
    token: 'CAKE-BNB',
    rewardToken: 'CAKE',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-PancakeSwap-v1.0.pdf',
    poolUrl: 'https://pancakeswap.finance/farms'
  },
  {
    id: '12',
    protocol: 'Venus',
    chain: Chain.BSC,
    apy: 28.4,
    tvl: 420_000_000,
    riskScore: 38,
    token: 'BNB',
    rewardToken: 'XVS',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/VenusProtocol/venus-protocol/tree/master/audits',
    poolUrl: 'https://app.venus.io/dashboard'
  },
  {
    id: '13',
    protocol: 'Alpaca Finance',
    chain: Chain.BSC,
    apy: 45.2,
    tvl: 280_000_000,
    riskScore: 42,
    token: 'ALPACA-BNB',
    rewardToken: 'ALPACA',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/alpaca-finance/alpaca-contract/tree/main/audits',
    poolUrl: 'https://app.alpacafinance.org/farm'
  },
  {
    id: '14',
    protocol: 'BiSwap',
    chain: Chain.BSC,
    apy: 85.6,
    tvl: 180_000_000,
    riskScore: 48,
    token: 'BSW-BNB',
    rewardToken: 'BSW',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.biswap.org/security/audits',
    poolUrl: 'https://biswap.org/farms'
  },
  {
    id: '15',
    protocol: 'ApeSwap',
    chain: Chain.BSC,
    apy: 65.8,
    tvl: 150_000_000,
    riskScore: 45,
    token: 'BANANA-BNB',
    rewardToken: 'BANANA',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://apeswap.gitbook.io/apeswap-finance/security/audits',
    poolUrl: 'https://apeswap.finance/farms'
  },
  {
    id: '16',
    protocol: 'Belt Finance',
    chain: Chain.BSC,
    apy: 32.4,
    tvl: 220_000_000,
    riskScore: 40,
    token: 'BELT-BNB',
    rewardToken: 'BELT',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.belt.fi/introduction/security',
    poolUrl: 'https://belt.fi/farming'
  },
  {
    id: '17',
    protocol: 'Ellipsis Finance',
    chain: Chain.BSC,
    apy: 25.8,
    tvl: 190_000_000,
    riskScore: 38,
    token: 'EPS-BNB',
    rewardToken: 'EPS',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.ellipsis.finance/security/audits',
    poolUrl: 'https://ellipsis.finance/pool'
  },
  {
    id: '18',
    protocol: 'Autofarm',
    chain: Chain.BSC,
    apy: 42.6,
    tvl: 160_000_000,
    riskScore: 42,
    token: 'AUTO-BNB',
    rewardToken: 'AUTO',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://autofarm.gitbook.io/autofarm-network/security/audits',
    poolUrl: 'https://autofarm.network/bsc/'
  },
  {
    id: '19',
    protocol: 'MDEX',
    chain: Chain.BSC,
    apy: 55.2,
    tvl: 240_000_000,
    riskScore: 44,
    token: 'MDX-BNB',
    rewardToken: 'MDX',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.mdex.com/#/security',
    poolUrl: 'https://bsc.mdex.com/#/pool'
  },
  {
    id: '20',
    protocol: 'Beefy Finance',
    chain: Chain.BSC,
    apy: 38.5,
    tvl: 210_000_000,
    riskScore: 35,
    token: 'BIFI-BNB',
    rewardToken: 'BIFI',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.beefy.finance/security/audits',
    poolUrl: 'https://app.beefy.finance/'
  },

  // Solana Opportunities
  {
    id: '21',
    protocol: 'Raydium',
    chain: Chain.SOLANA,
    apy: 85.2,
    tvl: 320_000_000,
    riskScore: 55,
    token: 'RAY-SOL',
    rewardToken: 'RAY',
    lockupPeriod: 7,
    audited: true,
    auditUrl: 'https://github.com/raydium-io/raydium-audits',
    poolUrl: 'https://raydium.io/farms/'
  },
  {
    id: '22',
    protocol: 'Orca',
    chain: Chain.SOLANA,
    apy: 72.1,
    tvl: 290_000_000,
    riskScore: 50,
    token: 'ORCA-SOL',
    rewardToken: 'ORCA',
    lockupPeriod: 14,
    audited: true,
    auditUrl: 'https://www.orca.so/security',
    poolUrl: 'https://www.orca.so/pools'
  },
  {
    id: '23',
    protocol: 'Marinade Finance',
    chain: Chain.SOLANA,
    apy: 6.8,
    tvl: 380_000_000,
    riskScore: 25,
    token: 'SOL',
    rewardToken: 'MNDE',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.marinade.finance/marinade-protocol/security',
    poolUrl: 'https://marinade.finance/app/staking'
  },
  {
    id: '24',
    protocol: 'Saber',
    chain: Chain.SOLANA,
    apy: 45.6,
    tvl: 180_000_000,
    riskScore: 48,
    token: 'SBR-USDC',
    rewardToken: 'SBR',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.saber.so/security/audits',
    poolUrl: 'https://app.saber.so/farms'
  },
  {
    id: '25',
    protocol: 'Port Finance',
    chain: Chain.SOLANA,
    apy: 32.4,
    tvl: 150_000_000,
    riskScore: 52,
    token: 'PORT-SOL',
    rewardToken: 'PORT',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.port.finance/security/audits',
    poolUrl: 'https://mainnet.port.finance/'
  },
  {
    id: '26',
    protocol: 'Solend',
    chain: Chain.SOLANA,
    apy: 15.8,
    tvl: 420_000_000,
    riskScore: 35,
    token: 'SLND-USDC',
    rewardToken: 'SLND',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.solend.fi/protocol/security',
    poolUrl: 'https://solend.fi/dashboard'
  },
  {
    id: '27',
    protocol: 'Quarry',
    chain: Chain.SOLANA,
    apy: 58.2,
    tvl: 140_000_000,
    riskScore: 50,
    token: 'QRY-SOL',
    rewardToken: 'QRY',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.quarry.so/security',
    poolUrl: 'https://app.quarry.so/'
  },
  {
    id: '28',
    protocol: 'Tulip Protocol',
    chain: Chain.SOLANA,
    apy: 42.5,
    tvl: 160_000_000,
    riskScore: 45,
    token: 'TULIP-SOL',
    rewardToken: 'TULIP',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.tulip.garden/security',
    poolUrl: 'https://tulip.garden/vaults'
  },
  {
    id: '29',
    protocol: 'Francium',
    chain: Chain.SOLANA,
    apy: 38.6,
    tvl: 130_000_000,
    riskScore: 48,
    token: 'FRAN-SOL',
    rewardToken: 'FRAN',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.francium.io/security/audits',
    poolUrl: 'https://francium.io/app/farming'
  },
  {
    id: '30',
    protocol: 'Sunny Aggregator',
    chain: Chain.SOLANA,
    apy: 52.4,
    tvl: 170_000_000,
    riskScore: 46,
    token: 'SUNNY-SOL',
    rewardToken: 'SUNNY',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.sunny.ag/sunny-aggregator/security',
    poolUrl: 'https://app.sunny.ag/'
  },

  // Avalanche Opportunities
  {
    id: '31',
    protocol: 'Trader Joe',
    chain: Chain.AVALANCHE,
    apy: 45.6,
    tvl: 180_000_000,
    riskScore: 40,
    token: 'JOE-AVAX',
    rewardToken: 'JOE',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://github.com/traderjoe-xyz/audits',
    poolUrl: 'https://traderjoexyz.com/farm'
  },
  {
    id: '32',
    protocol: 'Pangolin',
    chain: Chain.AVALANCHE,
    apy: 38.2,
    tvl: 150_000_000,
    riskScore: 42,
    token: 'PNG-AVAX',
    rewardToken: 'PNG',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://pangolin.exchange/audits',
    poolUrl: 'https://app.pangolin.exchange/#/png/1'
  },
  {
    id: '33',
    protocol: 'Benqi',
    chain: Chain.AVALANCHE,
    apy: 12.5,
    tvl: 280_000_000,
    riskScore: 35,
    token: 'QI-AVAX',
    rewardToken: 'QI',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.benqi.fi/security/audits',
    poolUrl: 'https://app.benqi.fi/markets'
  },
  {
    id: '34',
    protocol: 'Platypus Finance',
    chain: Chain.AVALANCHE,
    apy: 52.8,
    tvl: 120_000_000,
    riskScore: 48,
    token: 'PTP-AVAX',
    rewardToken: 'PTP',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.platypus.finance/security/audits',
    poolUrl: 'https://app.platypus.finance/pool'
  },
  {
    id: '35',
    protocol: 'Vector Finance',
    chain: Chain.AVALANCHE,
    apy: 35.6,
    tvl: 90_000_000,
    riskScore: 45,
    token: 'VTX-AVAX',
    rewardToken: 'VTX',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.vector.finance/security/audits',
    poolUrl: 'https://app.vector.finance/'
  },
  {
    id: '36',
    protocol: 'Yeti Finance',
    chain: Chain.AVALANCHE,
    apy: 42.4,
    tvl: 110_000_000,
    riskScore: 44,
    token: 'YETI-AVAX',
    rewardToken: 'YETI',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.yeti.finance/security/audits',
    poolUrl: 'https://app.yeti.finance/'
  },
  {
    id: '37',
    protocol: 'Iron Bank',
    chain: Chain.AVALANCHE,
    apy: 15.8,
    tvl: 220_000_000,
    riskScore: 32,
    token: 'IB-AVAX',
    rewardToken: 'IB',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.ironbank.finance/security/audits',
    poolUrl: 'https://app.ironbank.finance/'
  },
  {
    id: '38',
    protocol: 'Yield Yak',
    chain: Chain.AVALANCHE,
    apy: 48.2,
    tvl: 140_000_000,
    riskScore: 38,
    token: 'YAK-AVAX',
    rewardToken: 'YAK',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.yieldyak.com/security/audits',
    poolUrl: 'https://yieldyak.com/farms'
  },
  {
    id: '39',
    protocol: 'Snowball',
    chain: Chain.AVALANCHE,
    apy: 32.5,
    tvl: 85_000_000,
    riskScore: 42,
    token: 'SNOB-AVAX',
    rewardToken: 'SNOB',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.snowball.network/security/audits',
    poolUrl: 'https://snowball.network/earn'
  },
  {
    id: '40',
    protocol: 'Aave Avalanche',
    chain: Chain.AVALANCHE,
    apy: 8.4,
    tvl: 320_000_000,
    riskScore: 25,
    token: 'AVAX',
    rewardToken: 'AAVE',
    lockupPeriod: 0,
    audited: true,
    auditUrl: 'https://docs.aave.com/security/audits',
    poolUrl: 'https://app.aave.com/markets/'
  }
];