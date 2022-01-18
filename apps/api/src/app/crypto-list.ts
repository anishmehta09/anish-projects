export interface CryptoList {
  id: number
  name: string
  symbol: string
  quote: QuoteDetails
}

export interface QuoteDetails {
  price: string
  volume24Hours: string
  percentChange1h: string
  percentChange24h: string
  percentChange7d: string
  marketCap: string
  lastUpdated: string
}

export interface ServerList {
  id: number
  name: string
  symbol: string
  slug: string
  cmc_rank: number
  circulating_supply: number
  total_supply: string
  last_updated: string
  date_added: string
  quote: ServerQuoteTypes
}

export interface ServerQuoteTypes {
  USD: ServerQuoteDetails
}

export interface ServerQuoteDetails {
  price: number
  volume_24h: number
  volume_change_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  market_cap: number
  market_cap_dominance: number
  fully_diluted_market_cap: number
  last_updated: string
}

