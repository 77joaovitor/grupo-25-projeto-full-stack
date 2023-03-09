import { Request, Response } from "express";
import { createUserService } from "../../services/user/create.service";
import { getAllUserService } from "../../services/user/getAll.service";

export const getAllUserController = async (req: Request, res: Response) => {
    const newUser = await getAllUserService();
    return res.status(201).json(newUser);
};
