import { Module } from '@nestjs/common';
import { databaseProviders } from '../databse/database.providers';
import { userProviders } from './User.providers';
import { UsersResolver } from './User.resolver';
import { UserService } from './user.service';

@Module({
  providers: [
    ...userProviders,
    ...databaseProviders,
    UserService,
    UsersResolver
  ],
  exports: [
  ]
})
export class UserModule { }
