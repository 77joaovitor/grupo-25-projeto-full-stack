import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Announcement from "./announcement.entity";
import GalleryImage from "./galleryImage.entity";

@Entity("vehicles")
class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 10 })
  type: string;

  @Column({ type: "float" })
  price: number;

  @Column({ length: 4 })
  year: string;

  @Column({ type: "float" })
  mileage: number;

  @Column()
  coverImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Announcement, (announcement) => announcement.vehicle, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  announcement: Announcement;

  @OneToMany(() => GalleryImage, (galleryImage) => galleryImage.vehicle, {
    onDelete: "CASCADE",
  })
  galleryImages: GalleryImage[];
}

export default Vehicle;
