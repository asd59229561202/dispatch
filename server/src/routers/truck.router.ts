import express from 'express';
import asyncHandler from 'express-async-handler';
import { truckModel } from '../models/truck.model';
import { sample_truck } from '../data';

const router = express.Router();

// Seed route to populate the database with sample truck data
router.get('/seed', asyncHandler(async (req, res) => {
    const truckCount = await truckModel.countDocuments();
    if (truckCount > 0) {
        res.send('Seed is already done');
        return;
    }

    await truckModel.create(sample_truck);
    res.send('Seed is done');
}));

// Route to find a truck by its truckingNumber
router.get('/find', asyncHandler(async (req, res) => {

    const { truckingNumber } = req.query;
    if (!truckingNumber) {
        res.status(400).send("Trucking number is required");
        return;
    }
    const result = await truckModel.findOne({ truckingNumber });

    if (!result) {
        res.status(404).send("Can't find this TruckMessage");
        return;
    }
    console.log(result)
    res.send(result);
}));

export default router;
