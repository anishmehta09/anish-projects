import { Query, Resolver } from '@nestjs/graphql';
import { ListService } from './list.service';

@Resolver('Currency')
export class ListResolver {

  constructor(private listService: ListService) {
  }

  @Query('allCurrencies')
  getAllCurrencies() {
    return this.listService.getList()
  }
}
