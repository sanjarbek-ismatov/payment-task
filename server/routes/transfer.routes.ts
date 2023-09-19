import express from 'express'
import authMiddleware from "../middlewares/auth.middleware";
import {ExpressRequest} from "../types/express";
import transferValidator from "../helpers/validators/transfer";
import {Transfer} from "../models/transfer.model";
const router = express.Router()
router.post("/new", authMiddleware, async (req: ExpressRequest, res) => {
    const {error} = transferValidator.transfer(req.body)
    if(error) return res.status(400).send({code: 400, message: error.details[0].message})
    const newTransfer = new Transfer(req.body)
    if(req.user)
        newTransfer.senderId = req.user._id
    await newTransfer.save()
    res.status(201).send({code: 201, message: "Amount has been transferred"})
})
export default router