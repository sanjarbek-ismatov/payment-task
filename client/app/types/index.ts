import { UseMutationResult } from "react-query";

interface UserInterface <C = CreditCardInterface, P = string>{
    _id: string;
    fullName: string;
    image: string;
    birthday: Date;
    country: string;
    phone: string;
    email: string;
    password: string;
    cards: C[];
    payments: P[];
}
interface CreditCardInterface{
    _id: string;
    cardNumber: number;
    cardHolderName: string;
}
interface ServerResponse<R = null>{
    code: number;
    result?: R,
    message: string;
}
type Mutation = UseMutationResult<ServerResponse<null>, unknown, BodyInit, unknown>
export type {UserInterface, CreditCardInterface, ServerResponse, Mutation}