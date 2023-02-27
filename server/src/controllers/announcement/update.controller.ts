import { AnnouncementUpdate } from "../../interfaces/announcement.interface";
import { updateAnnouncementService } from "../../services/announcement/update.service";
import { Request, Response } from "express";

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const announcement: AnnouncementUpdate = req.body;
  const id: string = req.params.id;
  
  const updatedAnnouncement = await updateAnnouncementService(announcement, id);
  return res
    .status(200)
    .json({
      message: "announcement updated", 
      announcement: updatedAnnouncement
    });
};
