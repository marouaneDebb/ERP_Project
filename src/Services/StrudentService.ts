import axios from "axios";

export const  URL_BACK = "http://localhost:8090"

export const getStudents = () => axios(URL_BACK+'/student/all');
export const createStudent =(student:any)=> axios(URL_BACK+"/student/add",student);

