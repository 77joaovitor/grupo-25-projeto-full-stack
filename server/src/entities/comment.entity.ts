import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Announcement from './announcement.entity';
import User from './user.entity';

@Entity('comments')
class Comment {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ type: 'text' })
    body: string;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Announcement)
    announcement: Announcement;

}

export default Comment;