import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { UserUpdateRequest } from "../../interfaces/user.interface";
import * as bcrypt from 'bcrypt';
import { instanceToInstance } from "class-transformer";

export const userUpdateService = async (data: UserUpdateRequest, id: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            announcements: true
        }
    });

    await userRepository.update(id, {
        birthdate: data.birthdate ? new Date(data.birthdate) : user?.birthdate,
        cpf: data.cpf ? data.cpf : user?.cpf,
        name: data.name ? data.name : user?.name,
        phone: data.phone ? data.phone : user?.phone,
        password: data.password ? await bcrypt.hash(data.password, 10) : user?.password,
    });

    const userUpdated = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            announcements: true
        }
    });

    return instanceToInstance(userUpdated!)
}