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
    cards: mongoose.Types.ObjectId[];
    payments: mongoose.Types.ObjectId[];
}
interface TransferSchema{
    senderCard: string;
    senderId: mongoose.Types.ObjectId;
    receiverCard: string;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    date: string;
    description?: string;
}
interface CreditCardSchema{
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
}
export type {
    UserSchema,
    TransferSchema,
    CreditCardSchema
}