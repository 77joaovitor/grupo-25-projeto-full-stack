import { Request, Response } from "express";
import sendEmailService from "../../services/email/sendEmail.service";

const sendEmailController = async (req: Request, res: Response) => {
  const { subject, to, text } = req.body;
  await sendEmailService({ subject, to, text });
  res.json({
    message: "email send sucess",
  });
};

export default sendEmailController;
