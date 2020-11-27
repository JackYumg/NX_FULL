import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EvetModule } from './evet/evet.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), './apps/api/src/types/graphql.ts'),
      },
    }),
    EvetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
