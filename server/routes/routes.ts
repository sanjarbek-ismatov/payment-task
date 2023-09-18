import {Express} from "express";
import errorMiddleware from "../middlewares/error.middleware";
import cors from 'cors'
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
export default function(app: Express){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors({
        optionsSuccessStatus: 200,
        exposedHeaders: ['x-token']
    }))
    app.use(helmet({crossOriginResourcePolicy: false}))
    app.use(morgan('tiny'))
    app.use(errorMiddleware)
}