import axios from "axios";

export const  URL_BACK = "http://localhost:8090"

export const getStudents = () => axios(URL_BACK+'/student/all');
export const createStudent =(student:any)=> axios(URL_BACK+"/student/add",student);
export const getStudentsByParentId = (id:any) => axios(URL_BACK+"/student/parentid/"+id);
export const deleteStudentById = (id:number) => axios.delete(URL_BACK+"/student/"+id);
