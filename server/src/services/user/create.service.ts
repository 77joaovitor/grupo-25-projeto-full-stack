import * as bcrypt from 'bcrypt';
import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Address, User } from "../../entities";
import { UserRequest } from "../../interfaces/user.interface";
import moment from 'moment';

export const createUserService = async (body: UserRequest): Promise<User> => {

    const { birthdate, cpf, description, email, isAdvertiser, name, password, phone, address } = body;

    const addressRepository = AppDataSource.getRepository(Address);
    const userRepository = AppDataSource.getRepository(User);

    const newAddress = addressRepository.create({ ...address})
    await addressRepository.save(newAddress);
    
    const hashPassword = await bcrypt.hash(password, 10);
    
    const user = userRepository.create({
        birthdate: moment(birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
         cpf, description, email, isAdvertiser, name, password: hashPassword, phone, addresses: newAddress
    })

    await userRepository.save(user)
    


    const newUser = instanceToInstance(user);

    return newUser
};

