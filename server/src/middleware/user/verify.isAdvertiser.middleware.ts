import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyIsAdvertiser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.user.sub;

        const userRepository = AppDataSource.getRepository(User);

        const user = await userRepository.findOneBy({id});

        if(!user?.isAdvertiser ){ throw new AppError(401, 'Unauthorized user') };

        return next();  

    } catch (error) {
        if(error instanceof AppError){

            handleError(error, res);

        };
    }
}