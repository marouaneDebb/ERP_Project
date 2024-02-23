import ServiceType from "./ServiceType";

export default interface ServiceStateType{
    id: number;
    dateInscription: Date;
    payer :boolean;
    service: ServiceType;
}