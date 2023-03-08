import AppDataSource from "../../data-source";
import { User } from "../../entities";
import * as bcrypt from "bcrypt";
import * as cache from "memory-cache";
import { UserRecoveryPasswordRequest } from "../../interfaces/user.interface";
import { AppError } from "../../errors";

export const recoverPasswordService = async (
  body: UserRecoveryPasswordRequest
): Promise<object> => {
  const valorCache = cache.get("EMAIL_USER");

  const valorString = valorCache !== undefined ? valorCache : "";

  const { pin, password } = body;

  const userRepository = AppDataSource.getRepository(User);

  if (!valorString) {
    throw new AppError(200, "");
  }

  const user = await userRepository.findOneBy({
    pin,
    email: valorString!,
  });

  const hashPassword = await bcrypt.hash(password, 10);

  user!.password = hashPassword;

  user!.pin = null;

  userRepository.save(user!);

  cache.del("EMAIL_USER");

  return { message: "Password changed successfully!" };
};
