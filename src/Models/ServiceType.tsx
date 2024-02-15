import DiscoutType from "./DiscountType";

export default interface ServiceType{
    name:string;
    start:Date;
    description:String;
    pereodicity:number;
    price:number;
    type:String;
    discount:DiscoutType[];          
          
          
}