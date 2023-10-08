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
    cardNumber: number;
    cardHolderName: string;
}
export type {UserInterface, CreditCardInterface}