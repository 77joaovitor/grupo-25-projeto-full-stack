import { Request, NextFunction, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

const verifyId = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = req.params.id;

        const userRepository = AppDataSource.getRepository(User);

        if(!id){ throw new AppError(404, 'Invalid id') };

        const user = await userRepository.findOneBy({id});

        if(!user ){ throw new AppError(404, 'Invalid id') };
        
        if(id !== user?.id ){ throw new AppError(404, 'Invalid id') };

        return next();  
   
    } catch (error) {
        
    }    
};

export default verifyId;