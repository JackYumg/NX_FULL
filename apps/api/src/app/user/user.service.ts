import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }

    async insertUser(
        user: User
    ) {
        const e = await this.userRepository.insert(user);
        return { id: e.raw.insertId };
    }

    async findUserById(id: number) {
        const e = await this.userRepository.findOne(id);
        console.log(e);
        return e;
    }
}
