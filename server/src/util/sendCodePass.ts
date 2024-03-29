import "dotenv/config";
import { createTransport, TransportOptions } from "nodemailer";
import { AppError } from "../errors";
import { IEmailRequest } from "../interfaces/emails.interface";

const sendEmail = async ({ subject, text, to }: IEmailRequest) => {
  const transporter = createTransport({
    host: "smtp.office365.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  } as TransportOptions);

  await transporter
    .sendMail({
      from: process.env.SMTP_EMAIL,
      to,
      html: text,
      subject,
    })
    .then(() => console.log("send"))
    .catch((err: any) => {
      console.log(err);

      throw new AppError(500, "error");
    });
};

export default sendEmail;
