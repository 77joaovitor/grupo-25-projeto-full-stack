import { AnnoucementUpdate } from "../../interfaces/announcement.interface";
import { updateAnnouncementService } from "../../services/announcement/updateAannoucement.service";
import { Request, Response } from "express";

export const updateAnnoucementController = async (
  req: Request,
  res: Response
) => {
  const annoucement: AnnoucementUpdate = req.body;
  const id: string = req.params.id;
  const updtaedAnnoucement = await updateAnnouncementService(annoucement, id);
  return res
    .status(200)
    .json({ message: "annoucement updated", annoucement: annoucement });
};
