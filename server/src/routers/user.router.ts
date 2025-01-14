import asyncHandler from "express-async-handler"
import { User, userModel } from "../models/user.model"
import { sample_user } from "../data";
import jwt from 'jsonwebtoken';
import { Router } from 'express'
import bcrypt from 'bcryptjs';
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { Interface } from "readline";

const router = Router();
router.get('/seed', asyncHandler(async (req, res) => {
    const userCount = await userModel.countDocuments();
    if (userCount > 0) {
        res.send('Seed is already done');
        return;
    }
    await userModel.create(sample_user);
    res.send('Seed is done')
}))

router.post('/login', asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        console.log(password, user?.password);

<<<<<<< HEAD
           if(user && (await bcrypt.compare(password,user?.password))) {

            res.send(generateTokenReponse(user));
           }
        if (user) {
=======
        if (user && (await bcrypt.compare(password, user.password))) {

            res.send(generateTokenReponse(user));
        }
        if (user) {
            console.log(password),
            console.log('logging success');
>>>>>>> 4a61d0b (Track system folder as a normal directory)
            res.send(generateTokenReponse(user));
        }
        else {
            res.status(HTTP_BAD_REQUEST).send("Email or password is invalid!");
        }

    }
))
router.post('/register', asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const { name,email,password,address, } = req.body;
    
    const user = await userModel.findOne({email : email});
    if (user){
        res.status(HTTP_BAD_REQUEST)
        .send('User is existed, please login')
        return;
    }
    const encryptedPassword= await bcrypt.hash(password, 10);
    const newUser : User = {
=======
    const { name, email, password, address, } = req.body;

    const user = await userModel.findOne({ email: email });
    if (user) {
        res.status(HTTP_BAD_REQUEST)
            .send('User is existed, please login')
        return;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
>>>>>>> 4a61d0b (Track system folder as a normal directory)
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false,
    }
    console.log(newUser);
    const dbUser = await userModel.create(newUser);
    res.send(generateTokenReponse(dbUser));
}))
<<<<<<< HEAD
const generateTokenReponse = (user: User) => {//!可讓變數從undefined解除
=======
router.get('/getAllUser', asyncHandler(async (req, res) => {
    const AllUser = await userModel.find()
    res.send(AllUser)
}))

router.post('/updateUser', asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        
        // 从请求体中解析用户数据
        const user = {
            name: req.body.name,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
            password: req.body.password,
            address: req.body.address
        };

        // 使用 email 作为查询条件，更新用户信息
        const updatedUser = await userModel.findOneAndUpdate({ email: user.email }, user, { new: true });

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
}));

const generateTokenReponse = (user: User) => {//!可讓變數從undefined解除
    
>>>>>>> 4a61d0b (Track system folder as a normal directory)
    const token = jwt.sign({
        id: user._id, email: user.email, isAdmin: user.isAdmin
    }, process.env.JWT_SECRET!, {
        expiresIn: "1h"//設定過期
    });
<<<<<<< HEAD
=======
    
>>>>>>> 4a61d0b (Track system folder as a normal directory)
    return {
        id: user._id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token,
    }
}
export default router