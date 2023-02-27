import { Router } from "express";
import { createSessionController } from "../controllers/session/create.controller";
import { verifyUserSession } from "../middleware/user/verify.userSession.middleware";

const routes = Router();

export const sessionRouter = () => {
    routes.post('/', verifyUserSession, createSessionController);

    return routes;
};