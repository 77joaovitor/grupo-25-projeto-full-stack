import { Request, Response } from "express";
import { createCommentService } from "../../services/comment/create.service";

export const createCommentController = async (req: Request, res: Response) => {

    const paramsId = req.params.id;

    const tokenId = req.user.sub;

    const body = req.body

    const newComment = await createCommentService(body, paramsId, tokenId);

    return res.status(200).json(newComment);
}