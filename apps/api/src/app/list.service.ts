import { Injectable } from '@nestjs/common';
import { List, ServerList } from './list';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ListService {
  baseUrl = 'https://pro-api.coinmarketcap.com/'
  constructor(private httpService: HttpService) {}

  getList(): Observable<List[]> {
    const url = this.baseUrl + 'v1/cryptocurrency/map'
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

  getConvertedResponse(response: ServerList[]):List[] {
    return response.map((currency) => this.toConvertedList(currency))
  }

  toConvertedList(currency: ServerList): List {
    return {
      id: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      rank: currency.rank
    }
  }
}
