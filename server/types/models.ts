import mongoose from "mongoose";

interface UserSchema {
    fullName: string;
    image: string;
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
interface TransferSchema{
    senderCard: string;
    receiverCard: string;
    amount: number;
    date: string;
    description?: string;
}
export type {
    UserSchema,
    TransferSchema
}