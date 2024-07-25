import { Schema, model } from 'mongoose'

export interface deliverInfo {
    id: string;
    sender: string;
    receiver: string;
    origin: string;
    destination: string;
    quantity: number;
    weight: string;
    length: string;
    width: string;
    height: string;
    material: string;
    transport: string;
    status: string;
    trackingstring: string;
    createdAt: string;
}
export const deliverInfoSchema = new Schema<deliverInfo>(
    {
        id: { type: String, require: true },
        sender: { type: String, require: true },
        receiver: { type: String, require: true },
        origin: { type: String, require: true },
        destination: { type: String, require: true },
        quantity : {type: Number, required:true},
        weight: { type: String, require: true },
        length: { type: String, require: true },
        width: { type: String, require: true },
        height: { type: String, require: true },
        material: { type: String, require: true },
        transport: { type: String, require: true },
        status: { type: String, require: true },
        trackingstring: { type: String, require: true },
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