import axios from "axios";
import { URL_BACK } from "./StrudentService";

export const getAllStudentNoPayed = () => axios(URL_BACK+"/student/student-not-payed");