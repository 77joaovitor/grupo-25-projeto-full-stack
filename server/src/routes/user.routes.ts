import { Router } from "express";

import { createUserController } from "../controllers/user/create.controller";
import verifyExist from "../middlewares/user/verify.exist.middleware";

const routes = Router();

export const userRouter = () => {
    routes.post('', verifyExist, createUserController);

    return routes;
}
