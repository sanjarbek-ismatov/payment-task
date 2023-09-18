import {Request, Response, Errback, NextFunction} from "express";

export default function(err: Error, req: Request, res: Response, next: NextFunction){
    if(err) return res.status(500).send({code: 500, message: "Something went wrong"})
    next()
}