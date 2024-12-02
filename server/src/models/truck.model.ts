
import {model, Schema, Types } from "mongoose";

export interface truck {
    _id: Types.ObjectId;
    truckingNumber: string;
    isLoading: boolean;
    driver: string;
    length: string;
    width: string;
    height: string;
    cargoWeight: string;
    loadingStartTime: string;
<<<<<<< HEAD
    cargoId:string;
=======
    productId:'',
>>>>>>> 4a61d0b (Track system folder as a normal directory)
}
export const truckSchema = new Schema<truck>(
    {
        _id: { type: Schema.Types.ObjectId, auto: true },
        truckingNumber: { type: String, required: true ,unique:true},
        isLoading: { type: Boolean, require: true },
        driver: { type: String, required: true },
        length: { type: String, required: true },
        width: { type: String, required: true },
        height: { type: String, required: true },
        cargoWeight: { type: String, required: true },
        loadingStartTime: { type: String},
<<<<<<< HEAD
        cargoId: { type: String},
=======
        productId: { type: String},
>>>>>>> 4a61d0b (Track system folder as a normal directory)
    },{
        toJSON:{
            virtuals:true,
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)
export const truckModel = model<truck>('truck',truckSchema)