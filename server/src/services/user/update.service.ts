import * as bcrypt from 'bcrypt';
import { instanceToInstance } from "class-transformer";
import moment from 'moment';
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { UserUpdateRequest } from "../../interfaces/user.interface";

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
        birthdate: data.birthdate ? moment(data.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD') : user?.birthdate,
        cpf: data.cpf ? data.cpf : user?.cpf,
        name: data.name ? data.name : user?.name,
        phone: data.phone ? data.phone : user?.phone,
        password: data.password ? await bcrypt.hash(data.password, 10) : user?.password,
        description: data.description ? data.description : user?.description,
        email: data.email ? data.email : user?.email,
        
    });

    const userUpdated = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            announcements: true
        }
    });
    console.log(userUpdated);
    return instanceToInstance(userUpdated!)
}