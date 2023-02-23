import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { UserSessionRequest } from "../../interfaces/user.interface";

export const createSessionService = async (body: UserSessionRequest): Promise<string> => {
    
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({email: body.email});

    const token = jwt.sign(
        {
            email: body.email,
            isAdm: findUser!.isAdvertiser,
            isActive: findUser!.isActive,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: findUser!.id,
        }   
    );

    return token;

}