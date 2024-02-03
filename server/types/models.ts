import { Types } from "mongoose";

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
  notifications: Types.ObjectId[];
}

interface TransferSchema<T = Types.ObjectId> {
  senderCard: string;
  senderId: T;
  receiverCard: string;
  receiverId: T;
  amount: number;
  date: string;
  description?: string;
}

type TransferResponse = TransferSchema<UserSchema>;

interface CreditCardSchema {
  cardNumber: string;
  cardHolderName: string;
  cardHolderId: Types.ObjectId;
  expirationDate: string;
  cvv: string;
}

interface NotificationSchema {
  date: Date;
  type: "transfer" | "news" | "warning";
  body: string;
  to: Types.ObjectId;
  whoRead: Types.ObjectId[];
  forEveryone: boolean;
}

export type {
  UserSchema,
  TransferSchema,
  CreditCardSchema,
  TransferResponse,
  NotificationSchema,
};
