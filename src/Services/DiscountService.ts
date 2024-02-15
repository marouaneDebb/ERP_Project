import axios from "axios";
import { URL_BACK } from "./StrudentService";

export const getAllDiscount = () => axios.get(URL_BACK+"/remise/all")
export const addDiscount = (discount:any) => axios(URL_BACK+"/remise/add",discount) 