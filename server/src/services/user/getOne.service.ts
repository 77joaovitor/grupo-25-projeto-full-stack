import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { User } from "../../entities";


export const getOneUserService = async (id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
        where: {
            id
        },
        relations:{
            addresses: true
        }
    })

    return instanceToInstance(user!)
}