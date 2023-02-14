import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

export const handleErrorMiddleware = async(error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
    
        const {statusCode, message} = error;

        return res.status(statusCode).json({
            status: 'error',
            code: statusCode,
            message
        });

    }
    return res.status(500).json({
        message: 'Internal server error'
    });
};
