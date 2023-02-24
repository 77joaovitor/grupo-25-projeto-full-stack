import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { AppError, handleError } from "../../errors";
import { userRequestSchema } from "../../schema/user/user.schema";

const verifyExist = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // console.log(req.body)
        const serialized = await userRequestSchema.validate(req.body, {
        });
        console.log(serialized)
        const userRepository = AppDataSource.getRepository(User);
        
        const user = await userRepository.findOneBy({
            email: req.body.email
        });

        if (user) { throw new AppError(400, "Email already exist.") }

        return next();

    } catch (error) {
        if( error instanceof AppError){
            handleError(error, res);
        }
    }
}

export default verifyExist;