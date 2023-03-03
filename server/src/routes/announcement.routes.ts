import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcement/create.controller";
import { getAllAnnouncementsController } from "../controllers/announcement/getAll.controller";
import { getAllByAdvertiserController } from "../controllers/announcement/getAllByAdvertiser.controller";
import { updateAnnouncementController } from "./../controllers/announcement/update.controller";

import { deleteAnnouncementController } from "../controllers/announcement/delete.controller";
import { getOneAnnouncementController } from "../controllers/announcement/getOne.controller";
import { verifyAdvertiserId } from "../middleware/announcement/middleware";
import { verifyExistAnnouncement } from "../middleware/announcement/verify.exist.middleware";
import { verifyAnnouncementOwner } from "../middleware/announcement/verify.owner";
import verifyAuthToken from "../middleware/user/verify.authToken.middleware";
import { verifyIsAdvertiser } from "../middleware/user/verify.isAdvertiser.middleware";
import { createCommentController } from "../controllers/comment/create.controller";
import { getAllByAnnouncementController } from "../controllers/comment/getAllByAnnouncement.controller";

const routes = Router();

export const announcementRouter = () => {
  routes.post("/",verifyAuthToken, verifyIsAdvertiser, createAnnouncementController);
  routes.get("/", getAllAnnouncementsController);
  routes.get("/:id", verifyExistAnnouncement, getOneAnnouncementController);
  routes.patch("/:id/", verifyAuthToken, verifyIsAdvertiser, verifyExistAnnouncement, updateAnnouncementController);
  routes.delete("/:id/", verifyAuthToken, verifyIsAdvertiser, verifyAuthToken, verifyExistAnnouncement, verifyAnnouncementOwner, deleteAnnouncementController);
  routes.get("/:advertiserId/", verifyAdvertiserId, getAllByAdvertiserController);
  routes.post("/:id/comments", verifyAuthToken, verifyExistAnnouncement, createCommentController);
  routes.get("/:id/comments", verifyExistAnnouncement, getAllByAnnouncementController);
  return routes;
};
