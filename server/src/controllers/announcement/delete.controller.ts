import { Response, Request } from "express";
import { deleteAnnoucementService } from "../../services/announcement/delete.service";

export const deleteAnnoucementController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;
  const deletedAnnoucement = await deleteAnnoucementService(id);
  return res.status(204);
};
