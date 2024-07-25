import { Schema, model, Types } from "mongoose";


export interface User {
    _id?: Types.ObjectId,
    email: string,
    password: string,
    name: string,
    address: string,
    isAdmin: boolean,
}
export const userSchema = new Schema<User>({
    _id : {type:Schema.Types.ObjectId , auto: true},
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    address: { type: String, require: true },
    isAdmin: { type: Boolean, require: true },
},
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true,
    },
    

);
export const userModel = model<User>('users',userSchema)