import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcement/create.controller";
import { getAllAnnouncementsController } from "../controllers/announcement/getAll.controller";
import { getAllByAdvertiserController } from "../controllers/announcement/getAllByAdvertiser.controller";

import { verifyAdvertiseId } from "../middlewares/announcement/verify.idAdvertise.middleware";
import verifyExist from "../middlewares/user/verify.exist.middleware";

const routes = Router();

export const announcementRouter = () => {
    routes.post('/', createAnnouncementController);
    routes.get('/', getAllAnnouncementsController);
    routes.get('/:advertiseId/', verifyAdvertiseId, getAllByAdvertiserController)
    routes.get('/:announcementId/advertise/:advertiseId/')

    return routes;
}