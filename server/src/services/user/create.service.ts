import * as bcrypt from 'bcrypt';
import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Address, User } from "../../entities";
import { UserRequest } from "../../interfaces/user.interface";

export const createUserService = async (body: UserRequest): Promise<User> => {

    const { birthdate, cpf, description, email, isAdvertiser, name, password, phone, address } = body;

    const addressRepository = AppDataSource.getRepository(Address);
    const userRepository = AppDataSource.getRepository(User);

    
    const hashPassword = await bcrypt.hash(password, 10);
    
    const user = userRepository.create({
        birthdate: new Date(birthdate), cpf, description, email, isAdvertiser, name, password: hashPassword, phone, 
    })
    
    await userRepository.save(user)
    
    const newAddress = addressRepository.create({ ...address, user})

    await addressRepository.save(newAddress);

    const newUser = instanceToInstance(user);

    return newUser
};

