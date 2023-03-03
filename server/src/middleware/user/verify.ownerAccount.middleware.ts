import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyOwnerAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paramsId = req.params.id;
        const tokenId = req.user.sub;

        const userRepository = AppDataSource.getRepository(User);

        const user = await userRepository.findOneBy({
            id: paramsId
        })

        if(user!.id !== tokenId) { throw new AppError(401, "User unauthorized") };

        return next()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }   
}