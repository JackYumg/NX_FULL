import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { databaseProviders } from './database.providers';

@Module({
    exports: [...databaseProviders],
    providers: [
        ...databaseProviders
    ],
    imports: [
        UserModule
    ]
})
export class DatabseModule { }
