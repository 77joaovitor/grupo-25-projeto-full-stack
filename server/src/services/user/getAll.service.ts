import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { User } from "../../entities";


export const getAllUserService = async (): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.find()

    return instanceToInstance(user!)
}