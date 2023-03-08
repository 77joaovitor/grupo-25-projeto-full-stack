import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Address from './address.entity';
import Announcement from './announcement.entity';
import Comment from './comment.entity';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ length: 150, nullable: false })
    name: string;

    @Column({ length: 50, unique: true, nullable: false })
    email: string;

    @Column({ length: 150 })
    @Exclude()
    password: string;

    @Column({ length: 14, nullable: true })
    cpf: string;

    @Column({ length: 20 })
    phone: string;

    @Column({ length: 200 })
    description: string;

    @Column({ type: 'timestamp' })
    birthdate: Date;
    
    @Column()
    isAdvertiser: boolean;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true})
    pin: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @OneToOne(() => Address, address => address.user, {onDelete: 'CASCADE'})
    @JoinColumn()
    addresses: Address;
 
    @OneToMany(() => Announcement, announcement => announcement.advertiser)
    announcements: Announcement[];

    @OneToMany(() => Comment, comments => comments.user)
    comments: Comment[]
    
}

export default User;