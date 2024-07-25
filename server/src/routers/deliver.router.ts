import asynchandler from "express-async-handler"
import express from 'express'
import { productModel } from "../models/product.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
const router = express.Router();


router.post('/create', asynchandler(async (req, res) => {
    const requestProduct = req.body;
    console.log(requestProduct);
    
    
    const newProduct = new productModel({...requestProduct})
    await newProduct.save();
    res.send(newProduct)
}))
export default router
