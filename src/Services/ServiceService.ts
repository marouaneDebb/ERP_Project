import axios from "axios";
import { URL_BACK } from "./StrudentService";
    
const creatService = (service:any)=> axios.post(URL_BACK+"/service/add",service) 