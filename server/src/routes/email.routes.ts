import { Router } from "express";
import sendEmailController from "../controllers/email/sendEmail.controller";
import { verifyEmail } from "../middleware/user/verify.email.middleware";

const routes = Router();

const emailRoutes = () => {
  routes.post("", verifyEmail, sendEmailController);

  return routes;
};

export default emailRoutes;
