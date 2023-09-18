import mongoose from "mongoose";
import {TransferSchema} from "../types/models";

const transferSchema = new mongoose.Schema({
    senderCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CreditCard',
        required: true,
    },
    receiverCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CreditCard',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
});

export const Transfer = mongoose.model<TransferSchema>('Transfer', transferSchema);

