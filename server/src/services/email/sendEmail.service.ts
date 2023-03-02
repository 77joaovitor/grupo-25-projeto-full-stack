import { IEmailRequest } from "../../interfaces/emails.interface";
import sendEmail from "../../util/sendCodePass";

const sendEmailService = async ({
  subject,
  text,
  to,
}: IEmailRequest): Promise<void> => {
  await sendEmail({ subject, text, to });
};

export default sendEmailService;
