import { createTransport, TransportOptions } from "nodemailer";
import { IEmailRequest } from "../interfaces/emails.interface";
import "dotenv/config";
import { AppError } from "../errors";

const sendEmail = async ({ subject, text, to }: IEmailRequest) => {
  const transporter = createTransport({
    host: "SMTP.office365.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  } as TransportOptions);
  let randomNumber = Math.random();
  //enviar randomNumber para banco de dados
  //   "codigo" === randomNumber
  //   delete random number
  // navigate("/login")
  await transporter
    .sendMail({
      from: process.env.SMTP_EMAIL,
      to,
      text: text + randomNumber,
      subject,
    })
    .then(() => console.log("send"))
    .catch((err) => console.log(err));
};

export default sendEmail;
