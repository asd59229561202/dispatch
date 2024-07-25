import express from 'express'
import asyncHandler from 'express-async-handler';
import { deliverInfoModel } from '../models/deliverInfo.model';
import { sample_deliverMessage } from '../data';
const router = express.Router();
router.get('/seed',asyncHandler(async(req,res)=>{
    const deliverInfoCount = await deliverInfoModel.countDocuments();
    if (deliverInfoCount > 0){
        res.send('Seed is already done');
        return;
    }

    await deliverInfoModel.create(sample_deliverMessage);
    res.send('Seed is done')
}))
router.get('/',asyncHandler(async(req,res)=>{
    const deliverInfo = await deliverInfoModel.find();
    console.log(deliverInfo);
    res.send(deliverInfo);
}))
router.get('/getId',asyncHandler(async(req,res)=>{
    const deliverInfo = await deliverInfoModel.findById(req.params.id);
    res.send(deliverInfo);
}))
export default router