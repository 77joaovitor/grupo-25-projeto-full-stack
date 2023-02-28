import { Entity, PrimaryGeneratedColumn ,Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import User from './user.entity';
import Comment from "./comment.entity";
import Vehicle from './vehicle.entity';

@Entity('announcements')
class Announcement {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ length: 100 })
    type: string;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 250 })
    description: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => User)
    advertiser: User;

    @OneToMany(() => Comment, comments => comments.announcement, {
        onDelete: 'CASCADE'
    })
    comments: Comment[]

    @OneToOne(() => Vehicle, (vehicle) => vehicle.announcement, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    vehicle: Vehicle;


}

export default Announcement;