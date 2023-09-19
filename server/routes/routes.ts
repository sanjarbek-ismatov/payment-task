import {Express} from "express";
import errorMiddleware from "../middlewares/error.middleware";
import cors from 'cors'
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import filesRoutes from "./files.routes";
import userRoutes from "./user.routes";
import cardRoutes from "./card.routes";
export default function(app: Express){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors({
        optionsSuccessStatus: 200,
        exposedHeaders: ['x-token']
    }))
    app.use(helmet({crossOriginResourcePolicy: false}))
    app.use(morgan('tiny'))
    app.use("/api/files", filesRoutes)
    app.use('/api/user', userRoutes)
    app.use("/api/card", cardRoutes)
    app.use(errorMiddleware)
}