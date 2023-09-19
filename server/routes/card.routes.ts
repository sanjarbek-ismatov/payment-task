import express from 'express'
import authMiddleware from "../middlewares/auth.middleware";
import cartValidator from '../helpers/validators/card'
import {CreditCard} from "../models/card.model";
import {ExpressRequest} from "../types/express";
const router = express.Router()
router.post('/add', authMiddleware, async (req: ExpressRequest, res) => {
    const {error} = cartValidator.creditCartValidator(req.body)
    if(error) return res.status(400).send({code: 400, message: error.details[0].message})
    const newCart = new CreditCard(req.body)
    const {user} = req
    if(user) {
        const {_id} = newCart
        newCart.cardHolderName = user?.fullName
        !user.cards.includes(_id) && user.cards.push(_id)
        await user.save()
    }
    await newCart.save()
    res.status(201).send({code: 201, message: "Card got created!"})
})
export default router