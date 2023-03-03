import AppDataSource from "../../data-source"
import { User } from "../../entities"

export const deleteUserService = async (paramsId: string): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        id: paramsId
    });

    await userRepository.delete(user!.id);

    return {message: "User deleted"};

}