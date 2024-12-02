import {Types} from 'mongoose'
export class User {
    _id!: string| Types.ObjectId;
    email!: string;
    username!: string;
    password!: string;
    name!: string;
    token!: string;
    address!: string;
    isAdmin !: boolean;
}