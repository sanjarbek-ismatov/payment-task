interface UserInterface {
    _id: string;
    fullName: string;
    image: string;
    birthday: Date;
    country: string;
    phone: string;
    email: string;
    password: string;
    cards: string[];
    payments: string[];
}
export type {UserInterface}