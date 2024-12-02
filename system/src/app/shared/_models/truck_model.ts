import {Types} from 'mongoose'
export class Truck {
    _id!: Types.ObjectId;
    truckingNumber!: string;
    isLoading!: boolean;
    driver!: string;
    length!: string;
    width!: string;
    height!: string;
    cargoWeight!: string;
    loadingStartTime!: string;
    productId!:string;
}