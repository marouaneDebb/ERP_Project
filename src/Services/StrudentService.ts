import axios from "axios";

const URL_BACK = "http://localhost:8090"

export const getStudents = () => axios(URL_BACK+'/students/all');
export const createStudent =(student:any)=> axios(URL_BACK+"/students/add",student);

