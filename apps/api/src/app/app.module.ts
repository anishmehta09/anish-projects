import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { HttpModule } from '@nestjs/axios';
import { CryptoListService } from './crypto-list.service';
import { CryptoListResolver } from './crypto-list.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql']
  }), HttpModule],
  controllers: [AppController],
  providers: [AppService, CryptoListResolver, CryptoListService],
})
export class AppModule {}
