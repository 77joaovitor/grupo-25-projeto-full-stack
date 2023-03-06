import { instanceToInstance } from "class-transformer";
import AppDataSource from "../../data-source";
import { Address, User } from "../../entities";
import { AddressRequest } from "../../interfaces/user.interface";

export const updateAddressService = async (body: AddressRequest, id: string): Promise<User> => {
    const addressRepository = AppDataSource.getRepository(Address);
    const userRepository = AppDataSource.getRepository(User);
    
    const user = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            addresses: true
        }
    });

    await addressRepository.update( {id: user!.addresses.id}, {
        ...body
    });
    
    const userUpdated = await userRepository.findOne({
        where: {
            id
        },
        relations: {
            addresses: true,

        }
    });

    return instanceToInstance(userUpdated!)
}