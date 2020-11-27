import { createConnection } from 'typeorm';
import { User } from '../user/user.entity';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: '118.24.26.23',
            port: 3366,
            username: 'root',
            password: 'wym123...',
            database: 'test',
            synchronize: true,
            entities: [
                User
            ]
        }),
    },
];
