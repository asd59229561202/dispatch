import express from 'express'
import asyncHandler from 'express-async-handler';
import { productModel } from "../models/product.model";
import { deliverInfoModel } from '../models/deliverInfo.model';
<<<<<<< HEAD
=======
import mongoose from 'mongoose';
>>>>>>> 4a61d0b (Track system folder as a normal directory)

const router = express.Router();


router.post('/create', asyncHandler(async (req, res) => {
    const requestProduct = req.body;
<<<<<<< HEAD
    
   console.log(requestProduct._id);
   let newProduct = await deliverInfoModel.findOneAndUpdate({_id:requestProduct._id},
    requestProduct,
    {new:true, upsert: true}
   )
    res.send(newProduct)
}))

router.post('/find', asyncHandler(async (req, res) => {
    const requestProduct = req.body;
    console.log(requestProduct)
    const product = await productModel.findById({ _id: requestProduct._id })
    res.send(product);
    console.log(product)
    return;



}))
=======

    
    try{
        let newProduct = await deliverInfoModel.findOneAndUpdate({ _id: requestProduct._id },
            requestProduct,
            { new: true, upsert: true }
        )
        res.send(newProduct)
        return
    }catch{
        if(!mongoose.Types.ObjectId.isValid(requestProduct._id)){
            delete requestProduct._id
        }
        
        let newProduct = await deliverInfoModel.create(
            requestProduct
        )
        res.send(newProduct)
        return
    }
   
}))


>>>>>>> 4a61d0b (Track system folder as a normal directory)
export default router
