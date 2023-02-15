import { Entity, PrimaryGeneratedColumn ,Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import User from './user.entity';

@Entity('addresses')
class Address {
    
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ length: 20 })
    zipCode: string;

    @Column({ length: 50 })
    city: string;

    @Column({ length: 50 })
    state: string;

    @Column({ length: 50 })
    road: string;

    @Column({ length: 20 })
    number: string;

    @Column({ length: 200 })
    complement: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => User)
    user: User;    

}

export default Address;