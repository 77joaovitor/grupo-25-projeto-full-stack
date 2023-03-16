import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Vehicle from './vehicle.entity';

@Entity('galleryImages')
class GalleryImage {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    imageUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => Vehicle)
    vehicle: Vehicle;

}

export default GalleryImage;