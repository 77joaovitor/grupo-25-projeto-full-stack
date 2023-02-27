import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";
import { userSessionRequestSchema } from "../../schema/user/user.schema";
import * as bcrypt from 'bcrypt';

export const verifyUserSession = async (req: Request, res: Response, next: NextFunction) => {
   
    try {

        const serialized = await userSessionRequestSchema.validate(req.body, {
            abortEarly: true,
            stripUnknown: false
        });

        const userRepository = AppDataSource.getRepository(User);
        
        const findUser = await userRepository.findOneBy({email: serialized.email});
    
        if(!findUser) {throw new AppError(403, 'Invalid email or password')};
    
        const passwordMatch = await bcrypt.compare(serialized.password, findUser.password);
    
        if(!passwordMatch) {throw new AppError(403, 'Invalid email or password')};

        return next();

    } catch (error) {
        if(error instanceof AppError){

            handleError(error, res)

        };        
    }
};