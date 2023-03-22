import AppDataSource from "../../data-source";
import { User } from "../../entities";
import sendEmail from "../../util/sendCodePass";
import * as cache from "memory-cache";  
import * as bcrypt from 'bcrypt';

const sendEmailService = async (to: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  let pin = Math.floor(Math.random() * (80000 - 99999 + 1)) + 80000;

  if(pin < 0){ pin = pin*-1 }

  const hashPin = await bcrypt.hash(pin.toString(), 10)

  const user = await userRepository.findOneBy({
    email: to
  })

  cache.put("EMAIL_USER", user?.email, 600000)

  user!.pin = hashPin

  userRepository.save(user!);

  const text = `Digite o código para atualizar sua senha! ${pin}`;

  const htmlText = `<h1>Recuperação de senha</h1><h3>${text}</h3>`

  
  const subject = "Recuperação de senha"

  await sendEmail({ subject, text: htmlText, to });

  setTimeout(() => {
    user!.pin = ''

    userRepository.save(user!); // Remove o código PIN depois de 5 minutos
    
  }, 10 * 60 * 1000);
};

export default sendEmailService;
