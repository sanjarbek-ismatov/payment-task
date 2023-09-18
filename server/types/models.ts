import mongoose from "mongoose";

interface UserSchema {
    fullName: string;
    birthday: Date;
    country: string;
    region: string;
    location: string;
    phone: string;
    email: string;
    password: string;
    carts: mongoose.Schema.Types.ObjectId[];
    payments: mongoose.Schema.Types.ObjectId[];
}
export type {
    UserSchema
}