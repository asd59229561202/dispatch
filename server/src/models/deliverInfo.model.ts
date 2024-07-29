import { Schema, Types, model } from 'mongoose'

export interface deliverInfo {
    _id: Types.ObjectId;
    sender: string;
    email: string;
    receiver: string;
    origin: string;
    destination: string;
    quantity: number;
    weight: string;
    length: string;
    width: string;
    height: string;
    material: string;
    status: string;
    truckingNumber: string;
    departureDateStart: string;
    departureDateEnd: string;
    createdAt: string;
}
export const deliverInfoSchema = new Schema<deliverInfo>(
    {
        _id: { type: Schema.Types.ObjectId, auto: true },
        sender: { type: String, require: true },
        email: { type: String, require: true },
        receiver: { type: String, require: true },
        origin: { type: String, require: true },
        destination: { type: String, require: true },
        quantity: { type: Number, required: true },
        weight: { type: String, require: true },
        length: { type: String, require: true },
        width: { type: String, require: true },
        height: { type: String, require: true },
        material: { type: String, require: true },
        status: { type: String, require: true },
        truckingNumber: { type: String },
        departureDateStart: { type: String },
        departureDateEnd: { type: String },
        createdAt: { type: String, require: true },
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
},

);
export const deliverInfoModel = model<deliverInfo>('deliverInfo', deliverInfoSchema);