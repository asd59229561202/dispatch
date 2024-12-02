import { environment } from "../../../../environments/environment";

export const BASE_URL = environment.production ? '' : 'http://localhost:3000/api';

export const DELIVERINFO_URL = BASE_URL + '/deliverInfo/';
export const DELIVERINFOCLIENT_URL = BASE_URL + '/deliverInfo/clientfind';
export const DELETEDELIVER_URL = BASE_URL + '/deliverInfo/deleteDeliver';
// user
export const LOGIN_URL = BASE_URL + '/user/login/';
export const REGISTER_URL = BASE_URL + '/user/register/';
export const GETALLUSER_URL = BASE_URL +'/user/getAllUser'
export const UPDATEUSER_URL = BASE_URL +'/user/updateUser'
// deliver
export const CREATPRODUCT_URL = BASE_URL + '/deliver/create/';
export const CHANGEPRODUCT_URL = BASE_URL + '/deliver/find/';
// truck
export const TRUCKINFO_URL = BASE_URL + '/truck/find/';
export const TRUCKALLINFO_URL = BASE_URL + '/truck/getAll/';
export const TRUCKINFOUPDATE_URL  = BASE_URL + '/truck/update/';