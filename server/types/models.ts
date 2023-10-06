import {Types} from "mongoose";

interface UserSchema {
    _id: Types.ObjectId;
    fullName: string;
    image: string;
    birthday: Date;
    country: string;
    phone: string;
    email: string;
    password: string;
    cards: Types.ObjectId[];
    payments: Types.ObjectId[];
}
interface TransferSchema<T = Types.ObjectId>{
    senderCard: string;
    senderId: T;
    receiverCard: string;
    receiverId: T;
    amount: number;
    date: string;
    description?: string;
}
type TransferResponse = TransferSchema<UserSchema>
interface CreditCardSchema{
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
}
export type {
    UserSchema,
    TransferSchema,
    CreditCardSchema,
    TransferResponse
}