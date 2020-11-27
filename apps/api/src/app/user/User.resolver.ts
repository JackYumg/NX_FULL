import { Args, ArgsType, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UsersResolver {
    constructor(
        private userService: UserService
    ) { }

    @Mutation()
    async insertUser(@Args('user') user: User) {
        return this.userService.insertUser(user);
    }

    @Query('findUserById')
    async findUser(@Args('id') id: number) {
        return this.userService.findUserById(id);
    }
}