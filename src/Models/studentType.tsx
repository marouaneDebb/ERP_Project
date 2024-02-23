import ServiceStateType from "./ServiceStateType";
import ParentType from "./parentType";

export default interface StudentType{
        id:number
        firstName:String;
        lastName:String;
        address:String;
        classs:String;
        phone:String;
        dateNaissance:Date;
        parent:String;
        img:String;
        etatServices:ServiceStateType[];
}