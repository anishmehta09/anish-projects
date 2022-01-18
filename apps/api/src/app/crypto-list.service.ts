import { Injectable } from '@nestjs/common';
import { CryptoList, QuoteDetails, ServerList } from './crypto-list';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CryptoListService {
  baseUrl = 'https://pro-api.coinmarketcap.com/'
  constructor(private httpService: HttpService) {}

  getList(): Observable<CryptoList[]> {
    const url = this.baseUrl + 'v1/cryptocurrency/listings/latest'
    const headers = {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': 'e432ec3c-a1c3-424b-81b3-9ff5798ca5a8'
    }
     return this.httpService.get(url, {headers: headers})
      .pipe(
        map((resp) => {
          const res = resp.data.data
          return this.getConvertedResponse(res)
        })
      )
  }

  getConvertedResponse(response: ServerList[]):CryptoList[] {
    return response.map((currency) => this.toConvertedList(currency))
  }

  toConvertedList(currency: ServerList): CryptoList {
    return {
      id: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      quote: {
        price: currency.quote.USD.price.toFixed(5),
        volume24Hours: currency.quote.USD.volume_24h.toFixed(5),
        percentChange1h: currency.quote.USD.percent_change_1h.toFixed(2),
        percentChange24h: currency.quote.USD.percent_change_24h.toFixed(2),
        percentChange7d: currency.quote.USD.percent_change_7d.toFixed(2),
        marketCap: currency.quote.USD.market_cap.toFixed(5),
        lastUpdated: currency.quote.USD.last_updated
      }
    }
  }

}
