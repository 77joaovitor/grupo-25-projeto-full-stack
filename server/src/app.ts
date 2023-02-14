import cors from 'cors';
import express from "express";
import "express-async-error";
import "reflect-metadata";
import { handleErrorMiddleware } from "./middlewares";
import { routes } from "./routes";

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    methods: 'GET, OPTIONS, PATCH, POST, DELETE',
    origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());


routes(app);

app.use(handleErrorMiddleware);

export default app