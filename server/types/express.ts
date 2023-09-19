import {Request} from 'express'
import {UserSchema} from "./models";
import { Document, Types } from "mongoose";

interface ExpressRequest extends Request{
    user?: Document<unknown, {}, UserSchema> &
        Omit<UserSchema & { _id: Types.ObjectId }, never>;
}
export type {ExpressRequest}