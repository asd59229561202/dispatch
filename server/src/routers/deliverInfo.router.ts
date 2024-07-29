import express from 'express';
import asyncHandler from 'express-async-handler';
import { deliverInfoModel } from '../models/deliverInfo.model';
import { sample_deliverMessage } from '../data';
import { productModel } from '../models/product.model';  // Removed unused 'product' import

const router = express.Router();

// Seed endpoint
router.get('/seed', asyncHandler(async (req, res) => {
    const deliverInfoCount = await deliverInfoModel.countDocuments();
    if (deliverInfoCount > 0) {
        res.send('Seed is already done');
        return;
    }

    await deliverInfoModel.create(sample_deliverMessage);
    res.send('Seed is done');
}));

// Post endpoint for deliver info
router.post('/', asyncHandler(async (req, res) => {
    const user = { email: req.body.email, isAdmin: req.body.isAdmin };
    let deliverInfo;
    
    if (!user.isAdmin) {
        deliverInfo = await productModel.findOne({ email: user.email });
        
        if (!deliverInfo) {
            res.status(404).send('Product not found');
            return;
        }

        res.send(deliverInfo);
    } else {
        deliverInfo = await deliverInfoModel.find();
        res.send(deliverInfo);
    }
}));

// Get specific deliver info by ID
router.get('/getId/:id', asyncHandler(async (req, res) => {
    const deliverInfo = await deliverInfoModel.findById(req.params.id);
    
    if (!deliverInfo) {
        res.status(404).send('DeliverInfo not found');
        return;
    }
    
    res.send(deliverInfo);
}));

export default router;
