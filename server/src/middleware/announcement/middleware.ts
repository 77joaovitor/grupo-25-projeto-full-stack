import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyAdvertiserId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const advertiserId = req.params.advertiserId;

        const userRepository = AppDataSource.getRepository(User);

        if(!advertiserId){ throw new AppError(404, 'Invalid id') };

        const user = await userRepository.findOneBy({id: advertiserId});

        if(!user ){ throw new AppError(404, 'Invalid id') };

        if(advertiserId !== user?.id ){ throw new AppError(404, 'Invalid id') };

        if(!user?.isAdvertiser ){ throw new AppError(401, 'Unauthorized user') };

        return next()

    } catch (error) {
        if(error instanceof AppError){

            handleError(error, res);

        };
    }
}