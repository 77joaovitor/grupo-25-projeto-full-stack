import { Router } from "express";
import { updateAddressController } from "../controllers/address/update.controller";

import { createUserController } from "../controllers/user/create.controller";
import { deleteUserController } from "../controllers/user/delete.controller";
import { getOneUserController } from "../controllers/user/getOne.controller";
import { recoverPasswordController } from "../controllers/user/recover.controller";
import { updateUserController } from "../controllers/user/update.controller";
import verifyAuthToken from "../middleware/user/verify.authToken.middleware";
import verifyExist from "../middleware/user/verify.exist.middleware";
import verifyId from "../middleware/user/verify.id.middleware";
import { verifyOwnerAccount } from "../middleware/user/verify.ownerAccount.middleware";
import { verifyPin } from "../middleware/user/verify.pin.middleware";

const routes = Router();

export const userRouter = () => {
    routes.post('', verifyExist, createUserController);
    routes.patch('/recover/', verifyPin, recoverPasswordController);
    routes.get('/:id', verifyAuthToken, verifyId, getOneUserController);
    routes.patch('/:id', verifyAuthToken, verifyId, verifyOwnerAccount, updateUserController);
    routes.patch('/:id/address/',verifyAuthToken, verifyId, verifyOwnerAccount,updateAddressController)
    routes.delete('/:id', verifyAuthToken, verifyId, verifyOwnerAccount, deleteUserController);

    return routes;
}
