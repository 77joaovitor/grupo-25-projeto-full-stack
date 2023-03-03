import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";
import * as cache from "memory-cache";  

export const verifyPin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const valorCache = cache.get("EMAIL_USER");

        const valorString = valorCache !== undefined ? valorCache : '';
    
        console.log(valorString);
        
        
        if(!valorString || valorString.length <= 0){ throw new AppError(400, "Email not save") };

        const userFromPin = await userRepository.findOneBy({
            pin: req.body.pin, 
            email: valorString
        });

        if(!userFromPin) { throw new AppError(404, "PIN code incorrect") };

        return next()

    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}