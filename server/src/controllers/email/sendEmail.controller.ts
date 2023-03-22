import { Request, Response } from "express";
import sendEmailService from "../../services/email/sendEmail.service";

const sendEmailController = async (req: Request, res: Response) => {
  const email = req.body.email
  
  await sendEmailService(email);
  return res.status(200).json({
    message: "email send success",
  });
};

export default sendEmailController;
