import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyAdvertiseId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const advertiseId = req.params.advertiseId;

        const userRepository = AppDataSource.getRepository(User);

        if(!advertiseId){ throw new AppError(404, 'Invalid id') };

        const user = await userRepository.findOneBy({id: advertiseId});

        if(!user ){ throw new AppError(404, 'Invalid id') };

        if(advertiseId !== user?.id ){ throw new AppError(404, 'Invalid id') };

        if(!user?.isAdvertiser ){ throw new AppError(401, 'Unauthorized user') };

        return next()

    } catch (error) {
        if(error instanceof AppError){

            handleError(error, res);

        };
    }
}