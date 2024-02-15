import axios from "axios";
import { URL_BACK } from "./StrudentService";
    
export const createService = (service:any)=> axios(URL_BACK+"/service/add",service) 

export const getAllServices = () => axios(URL_BACK+"/service/all")