import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Announcement } from "../../entities";
import { AnnouncementUpdate } from "../../interfaces/announcement.interface";
import { updateVehicleService } from "../vehicle/updateVehicle.service";

export const updateAnnouncementService = async (
  data: AnnouncementUpdate,
  id: string
): Promise<Announcement> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const findAnnouncement = await announcementRepository.findOne({ 
    where:{
      id
    },relations: {
      vehicle:true
    }
   });

  await announcementRepository.update(id, {
    title: data.title ? data.title : findAnnouncement!.title,
    type: data.type ? data.type : findAnnouncement!.type,
    description: data.description
      ? data.description
      : findAnnouncement!.description,
    isActive: data.published,
    vehicle: await updateVehicleService(
      data.vehicle!,
      findAnnouncement!.vehicle.id
    ),
  });

  const updatedAnnouncement = await announcementRepository.findOne({ 
    where: {
      id
    }, relations: {
      vehicle: {       
        galleryImages: true,
    },
      advertiser: true
    }
   });

  return instanceToInstance(updatedAnnouncement!);
};
