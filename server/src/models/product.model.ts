import { model, Schema ,Types} from "mongoose";

export interface product {
    _id: Types.ObjectId;
    uid: String;
    email: string;
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
    createdAt: string;
}
export const deliverSchema = new Schema<product>(
    {
        _id: {type:Schema.Types.ObjectId , auto: true},
        uid:{ type: String, require: true },
        email: {type: String , required: true},
        sender: { type: String, require: true },
        receiver: { type: String, require: true },
        origin: { type: String, require: true },
        destination: { type: String, require: true },
        quantity: { type: Number, require: true },
        weight: { type: String, require: true },
        length: { type: String, require: true },
        width: { type: String, require: true },
        height: { type: String, require: true },
        material: { type: String, require: true },
        createdAt: { type: String, require: true },
    },{
        toJSON : {
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
)
export const productModel = model<product>('product',deliverSchema)