import axios from "axios";
import { URL_BACK } from "./StrudentService";

export const getParent =(id:string) => axios(URL_BACK+"/parent/"+id)