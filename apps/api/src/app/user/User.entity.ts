import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'user'
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name!: string;
}