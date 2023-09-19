import {NextFunction, Response} from "express";
import {tokenParser} from "../helpers/tokenGenerator";
import {User} from "../models/user.model";
import {ExpressRequest} from "../types/express";

export default async function(req: ExpressRequest, res: Response, next: NextFunction){
    const token = req.headers['x-token']
    if(!token || typeof token !== "string") return res.status(401).send({code: 401, message: "Must have a token"})
    const {email} = tokenParser(token)
    const user = await User.findOne({email})
    if(!user) return res.status(401).send({code: 401, message: "Auth verification is failed"})
    req.user = user
    next()
}