import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Announcement, GalleryImage, User, Vehicle } from "../../entities";
import { AnnouncementRequest } from "../../interfaces/announcement.interface";
import { createVehicleService } from "../vehicle/create.service";

export const createAnnouncementService = async (body: AnnouncementRequest): Promise<Announcement> => {
    const { vehicle, description, title, type } = body
    const announcementRepository = AppDataSource.getRepository(Announcement);
    const vehicleRepository = AppDataSource.getRepository(Vehicle);

    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.findOneBy({email: 'geovane@gmail.com'})

    const newVehicle: Vehicle = await createVehicleService(vehicle)
    
    const announcement: Announcement = announcementRepository.create({
        title,
        type,
        description,
        vehicle: newVehicle,
    })

    await announcementRepository.save(announcement)
    
    await announcementRepository.createQueryBuilder()
        .relation('advertiser')
        .of(announcement!.id)
        .set(user!.id)
    
    await vehicleRepository.createQueryBuilder()
        .relation('announcement')
        .of(newVehicle)
        .set(announcement)

    const a = await announcementRepository.findOne({
        where: {
            id: announcement!.id
        },
        relations: {
            vehicle: {       
                galleryImages: true,
            },
            advertiser: true
        }
    });
        
    return instanceToInstance(a!);
        
}
