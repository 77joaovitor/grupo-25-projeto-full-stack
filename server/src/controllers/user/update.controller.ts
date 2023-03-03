import { Request, Response } from "express";
import { userUpdateService } from "../../services/user/update.service";

export const updateUserController = async (req: Request, res: Response) => {

    const body = req.body;

    const id = req.params.id;

    const user = await userUpdateService(body, id);

    return res.status(200).json({message: "User Updated successful",user: user});

}