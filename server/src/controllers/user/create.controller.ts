import { Request, Response } from "express";
import { createUserService } from "../../services/user/create.service";

export const createUserController = async (req: Request, res: Response) => {
    const newUser = await createUserService(req.body);
    return res.status(201).json(newUser);
};
