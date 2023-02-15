import { Entity, PrimaryGeneratedColumn ,Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm';
import User from './user.entity';
import Comment from "./comment.entity";

@Entity('announcements')
class Announcement {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ length: 10 })
    title: string;

    @Column({ length: 250 })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => User)
    advertiser: User;

    @OneToMany(() => Comment, comment => comment.announcement)
    comments: Comment[]

}

export default Announcement;