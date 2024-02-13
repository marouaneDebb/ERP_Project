import DiscoutType from "./DiscountType";

export default interface ServiceType{
    name:String;
    start:Date;
    description:String;
    preodicity:number;
    price:number;
    type:String;
    discount:DiscoutType[];

}