import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { HttpModule } from '@nestjs/axios';
import { ListService } from './list.service';
import { ListResolver } from './list.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql']
  }), HttpModule],
  controllers: [AppController],
  providers: [AppService, ListResolver, ListService],
})
export class AppModule {}
