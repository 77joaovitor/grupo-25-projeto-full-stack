import { Router } from "express";

import { createUserController } from "../controllers/user/create.controller";
import { getOneUserController } from "../controllers/user/getOne.controller";
import verifyExist from "../middleware/user/verify.exist.middleware";
import verifyId from "../middleware/user/verify.id.middleware";

const routes = Router();

export const userRouter = () => {
    routes.post('', verifyExist, createUserController);
    routes.get('/:id', verifyId, getOneUserController);

    return routes;
}
