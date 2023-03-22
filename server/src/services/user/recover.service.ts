import AppDataSource from "../../data-source";
import { User } from "../../entities";
import * as bcrypt from "bcrypt";
import * as cache from "memory-cache";
import { AppError } from "../../errors";
import { UserRecoveryPasswordRequest } from "../../interfaces/user.interface";

export const recoverPasswordService = async (body: UserRecoveryPasswordRequest): Promise<object> =>{

    const valorCache = cache.get("EMAIL_USER");
    
    const valorString = valorCache !== undefined ? valorCache : '';

  const { pin, password } = body;

  const userRepository = AppDataSource.getRepository(User);

  if (!valorString) {
    throw new AppError(200, "");
  }

    const user = await userRepository.findOneBy({
        email: valorString!
    });

  await userRepository.update(user!.id, {
    birthdate: user?.birthdate,
    cpf: user?.cpf,
    name: user?.name,
    phone: user?.phone,
    password: body.password && await bcrypt.hash(body.password, 10),
    description: user?.description,
    email: user?.email,
    pin: '',
  })

  cache.del("EMAIL_USER");

  return { message: "Password changed successfully!" };
};
