import {UseMutationResult} from "react-query";

interface UserInterface<C = CreditCardInterface, P = string> {
    _id: string;
    fullName: string;
    image: string;
    birthday: string;
    country: string;
    phone: string;
    email: string;
    password: string;
    cards: C[];
    payments: P[];
}

interface CreditCardInterface {
    _id: string;
    cardNumber: number;
    cardHolderName: string;
    cardHolderId: string;
}

interface ServerResponse<R = null> {
    code: number;
    result?: R;
    message: string;
}

interface TransferInterface<U = UserInterface> {
    _id: string;
    senderCard?: string;
    senderId?: U;
    receiverId?: U;
    receiverCard?: string;
    description?: string;
    amount?: number;
    date: string;
}

type Mutation = UseMutationResult<
    ServerResponse<null>,
    unknown,
    BodyInit,
    unknown
>;

export type {
    UserInterface,
    CreditCardInterface,
    ServerResponse,
    Mutation,
    TransferInterface,
};
