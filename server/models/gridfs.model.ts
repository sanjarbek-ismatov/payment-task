import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import crypto from 'crypto'
import path from "path";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/payment"
const storage = new GridFsStorage({
    url: MONGO_URL,
    file: (request, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) console.log(err)
                const filename  = buf.toString('hex') + path.extname(file.originalname)
                resolve({
                    bucketName: "uploads",
                    filename
                })
            })
        })
    }
})

export const upload = multer({storage})
