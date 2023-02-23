import { Entity, PrimaryGeneratedColumn ,Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import Vehicle from './vehicle.entity';

@Entity('galleryImages')
class GalleryImage {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({ length: 200 })
    imageUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => Vehicle)
    vehicle: Vehicle;

}

export default GalleryImage;