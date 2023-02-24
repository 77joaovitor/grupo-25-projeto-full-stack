import { updateAnnoucementController as updateAnnouncementController } from "./../controllers/announcement/update.controller";
import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcement/create.controller";
import { getAllAnnouncementsController } from "../controllers/announcement/getAll.controller";
import { getAllByAdvertiserController } from "../controllers/announcement/getAllByAdvertiser.controller";

import verifyExist from "../middlewares/user/verify.exist.middleware";
import { deleteAnnoucementController as deleteAnnouncementController } from "../controllers/announcement/delete.controller";
import { verifyAdvertiserId } from "../middlewares/announcement/verify.idAdvertiser.middleware";

const routes = Router();

export const announcementRouter = () => {
  routes.post("/", createAnnouncementController);
  routes.post("/:id", updateAnnouncementController);
  routes.delete(":id", deleteAnnouncementController);
  routes.get("/", getAllAnnouncementsController);
  routes.get("/:advertiserId/", verifyAdvertiserId, getAllByAdvertiserController);
  routes.get("/:announcementId/advertiser/:advertiserId/");

  return routes;
};
