import "express-async-errors"
import express from 'express'
import fs from 'fs'
import {config} from 'dotenv'
config()
import {PORT} from "./helpers/variables";
import mongodb from "./helpers/mongodb";
import routes from "./routes/routes";

const app = express()
routes(app)
app.listen(PORT, async () => {
    console.log("Server is working")
    mongodb().then(() => console.log("DB has been connected!"))
})

process.on("unhandledRejection", (reason, promise) => {
    console.log(reason)
})
process.on("uncaughtException", (error, origin) => {
    fs.writeFile('./error.log', `Caught exception: ${error}\n` + `Exception origin: ${origin}`, () => {
        console.log("Error got caught")
        console.log(error, origin)
    })
})