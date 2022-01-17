export interface List {
  id: number
  name: string
  symbol: string
  rank: number
}

export interface ServerList {
  id: number
  name: string
  symbol: string
  slug: string
  rank: number
  is_active: number
  first_historical_data: string
  last_historical_data: string
  platform: string

}
