import express from 'express'
import {upload} from "../models/gridfs.model";
import userValidator from "../helpers/validators/user";
import {User} from "../models/user.model";
import {passwordChecker, passwordGenerator} from "../helpers/passwordManager";
import {tokenGenerator} from "../helpers/tokenGenerator";
const router = express.Router()
router.post("/signup", upload.single('image'), async (req, res) => {
    const {error} = userValidator.registerValidator(req.body)
    if(error) return res.status(400).send({code: 400, message: error.details[0].message})
    const checkEmail = await User.findOne({email: req.body.email})
    if(checkEmail) return res.status(403).send({code: 403, message: "The email is already available"})
    const newUser = new User(req.body)
    if(req.file){
        newUser.image = req.file.filename
    }
    newUser.password = await passwordGenerator(req.body.password)
    await newUser.save()
    res.status(201).send({code: 201, message: "User has been created"})
})
router.post('/signing', async (req, res) => {
    const {error} = userValidator.loginValidator(req.body)
    const {email, password} = req.body
    if(error) return res.status(400).send({code: 400, message: error.details[0].message})
    const user = await User.findOne({email})
    if(!user) return res.status(404).send({code: 404, message: "User is not found"})
    const arePasswordsTheSame = await passwordChecker(password, user.password)
    if(!arePasswordsTheSame) return res.status(400).send({code: 400, message: "The password is wrong"})
    const token = tokenGenerator(email, "email")
    res.setHeader('x-token', token).status(200).send({code: 200, message: "Login complete"})
})
router.get('/:email', async (req, res) => {
    const {email} = req.params
    const user = await User.findOne({email}).select("-password -payments")
    if(!user) return res.status(404).send({code: 404, message: "User is not found"})
    return res.status(200).send({code: 200, result: user})
})
export default router