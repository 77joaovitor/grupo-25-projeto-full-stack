import { updateAnnoucementController } from "./../controllers/announcement/update.controller";
import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcement/create.controller";
import { getAllAnnouncementsController } from "../controllers/announcement/getAll.controller";
import { getAllByAdvertiserController } from "../controllers/announcement/getAllByAdvertiser.controller";

import { verifyAdvertiseId } from "../middlewares/announcement/verify.idAdvertise.middleware";
import verifyExist from "../middlewares/user/verify.exist.middleware";
import { deleteAnnoucementController } from "../controllers/announcement/delete.controller";

const routes = Router();

export const announcementRouter = () => {
  routes.post("/", createAnnouncementController);
  routes.post("/:id", updateAnnoucementController);
  routes.delete(":id", deleteAnnoucementController);
  routes.get("/", getAllAnnouncementsController);
  routes.get("/:advertiseId/", verifyAdvertiseId, getAllByAdvertiserController);
  routes.get("/:announcementId/advertise/:advertiseId/");

  return routes;
};
