import mongoose from 'mongoose'
const creditCardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        trim: true,
        minlength: 16,
        maxlength: 16,
    },
    cardHolderName: {
        type: String,
        required: true,
        trim: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 4,
    },
});

export const CreditCard = mongoose.model('CreditCard', creditCardSchema);