import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const userRepository = AppDataSource.getRepository(User);
        
        const user = await userRepository.findOne({
           where: {
            email: req.body.email
           }
        });

        if (!user) { throw new AppError(400, "Email not exist.") }
       
        return next();

    } catch (error) {
        if( error instanceof AppError){
            handleError(error, res);
        }
    }
}
