import axios from "axios";
import { URL_BACK } from "./StrudentService";

export const getParent =(id:string) => axios(URL_BACK+"/parent/"+id)
export const createParent = (parent:any) => axios(URL_BACK+"/parent/add",parent)
export const getAllParent = () => axios(URL_BACK+"/parent/all")
export const deleteParentById = (id:any) => axios.delete(URL_BACK+"/parent/"+id);
