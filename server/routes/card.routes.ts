import express, { Response } from 'express'
import authMiddleware from "../middlewares/auth.middleware";
import cartValidator from '../helpers/validators/card'
import {CreditCard} from "../models/card.model";
import {ExpressRequest} from "../types/express";
import { upload } from '../models/gridfs.model';
const router = express.Router()
router.post('/add', [upload.none(), authMiddleware], async (req: ExpressRequest, res: Response) => {
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
router.delete("/delete", authMiddleware, async (req: ExpressRequest, res) => {
    const {body: {_id}, user} = req
    const deletedCard = await CreditCard.findByIdAndDelete(_id)
    if(!deletedCard) return res.status(404).send({code: 404, message: "This credit card is not available"})
    if(user) user.cards = user.cards.filter(card => card.toString() !== deletedCard._id.toString())
    await user?.save()
    res.status(204).send({code: 204, message: "The card has been deleted"})
})
router.get('/:cardnumber', async (req, res) => {
    const card = await CreditCard.findOne({cardNumber: req.params.cardnumber}).select('cardNumber cardHolderName')
    if(!card) return res.status(404).send({code: 404, message: "Card is not available in our system"})
    return res.status(200).send({code: 200, result: card})
})
export default router