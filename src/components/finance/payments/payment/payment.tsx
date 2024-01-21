import { IonCol, IonRow } from "@ionic/react";

interface Payment{
    id:number;
    name:String;
    dateBegin: String;
    dateEnd: String;
    childName:String;
    price: number;
    type: String;
}
interface props {
    payment: Payment;
  }

const ShowPayment: React.FC <props>= ({ payment }) => {
    return(
        <div>
            <IonRow>
                <IonCol><input type="checkbox" /></IonCol>
                <IonCol>{payment.name}</IonCol>
                <IonCol>{payment.dateBegin}</IonCol>
                <IonCol>{payment.dateEnd}</IonCol>
                <IonCol>{payment.childName}</IonCol>
                <IonCol>{payment.price}</IonCol>
                <IonCol>{payment.type}</IonCol>
            </IonRow>

        </div>
    )
}
export default ShowPayment;