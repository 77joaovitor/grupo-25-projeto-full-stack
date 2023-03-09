import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from "express";
import * as cache from "memory-cache";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";

export const verifyPin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const valorCache = cache.get("EMAIL_USER");

        const valorString = String(valorCache);    

        if(!valorString || valorString.length <= 0){ throw new AppError(400, "Email not save") };
        
        const user = await userRepository.findOneBy({
            email: valorString
        });
        
        if(!user) { throw new AppError(404, 'Invalid pin or password') };
        
        const pinMatch = await bcrypt.compare(String(req.body.pin), user!.pin);
        
        
        if(!pinMatch) {throw new AppError(403, 'Invalid pin or password')};

        return next()

    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}