import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CryptoListService } from './crypto-list.service';

@Resolver('Currency')
export class CryptoListResolver {

  constructor(private listService: CryptoListService) {
  }

  @Query('cryptoList')
  getCryptoList() {
    return this.listService.getList()
  }

}
