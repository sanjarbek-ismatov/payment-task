import mongoose from 'mongoose'
import type {UserSchema} from "../types/models";

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    birthday: {type: Date, required: true},
    country: {type: String, required: true},
    region: {type: String, required: true},
    location: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    carts: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "carts"
    },
    payments: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "payments"
    }
})
const User = mongoose.model<UserSchema>("user", userSchema)