import mongoose from "mongoose";
import {MONGO_URL} from "./variables";

export default async function(){
    return mongoose.connect(MONGO_URL)
}