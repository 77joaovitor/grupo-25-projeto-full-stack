import { Response, Request } from "express";
import { deleteAnnouncementService as deleteAnnouncementService } from "../../services/announcement/delete.service";

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;
  const deletedAnnouncement: object = await deleteAnnouncementService(id);
  return res.status(204).json(deletedAnnouncement);
};
