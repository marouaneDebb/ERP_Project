import DiscoutType from "./DiscountType";

export default interface ServiceType{
    id:number;
    name:string;
    start:Date;
    description:String;
    pereodicity:number;
    price:number;
    type:String;
    discount:DiscoutType[];          
          
          
}