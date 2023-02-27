import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcement/create.controller";
import { getAllAnnouncementsController } from "../controllers/announcement/getAll.controller";
import { getAllByAdvertiserController } from "../controllers/announcement/getAllByAdvertiser.controller";
import { updateAnnouncementController } from "./../controllers/announcement/update.controller";

import { deleteAnnouncementController } from "../controllers/announcement/delete.controller";
import { verifyAdvertiserId } from "../middleware/announcement/middleware";
import { verifyExistAnnouncement } from "../middleware/announcement/verify.exist.middleware";

const routes = Router();

export const announcementRouter = () => {
  routes.post("/", createAnnouncementController);
  routes.delete(":id", verifyExistAnnouncement, deleteAnnouncementController);
  routes.patch("/:id/", verifyExistAnnouncement, updateAnnouncementController);
  routes.get("/", getAllAnnouncementsController);
  routes.get("/:advertiserId/", verifyAdvertiserId, getAllByAdvertiserController);
  routes.get("/:announcementId/advertiser/:advertiserId/");

  return routes;
};
