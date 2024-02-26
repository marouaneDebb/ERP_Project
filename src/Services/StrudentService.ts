import axios from "axios";

export const  URL_BACK = "http://localhost:8090"
export const  URL_STUDENT = URL_BACK+"/student"

export const getStudents = () => axios(URL_BACK+'/student/all');
export const createStudent =(student:any)=> axios(URL_STUDENT+"/add",student);
export const getStudentsByParentId = (id:any) => axios(URL_STUDENT+"/parentid/"+id);
export const deleteStudentById = (id:any) => axios.delete(URL_STUDENT+"/"+id)
export const getStudentById=(id:any)=>axios(URL_STUDENT+"/"+id)

