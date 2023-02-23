import { Express } from "express";
import { announcementRouter } from "./announcement.routes";
import { sessionRouter } from "./session.routes";
import { userRouter } from "./user.routes";

const routes = (app: Express) => {
    app.use('/login', sessionRouter());
    app.use('/users', userRouter());
    app.use('/announcements', announcementRouter())
}

export default routes;