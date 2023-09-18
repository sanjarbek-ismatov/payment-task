import {NextFunction, Response, Request} from "express";
import {tokenParser} from "../helpers/tokenGenerator";
import {User} from "../models/user.model";

export default async function(req: Request, res: Response, next: NextFunction){
    const token = req.headers['x-token']
    if(!token || typeof token !== "string") return res.status(401).send({code: 401, message: "Must have a token"})
    const {email} = tokenParser(token)
    const user = await User.findOne({email})
    // req.user = user
    next()
}