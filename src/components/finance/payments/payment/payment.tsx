import { IonCol, IonRow } from "@ionic/react";
import { useState } from "react";

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
    updatePrice(price:number):void;
    total:number;
    //updateList(payment:Payment[]):void;
    //selectedPayment:Payment[];
}

const ShowPayment: React.FC <props>= ({ payment,updatePrice,total}) => {
  const [isChecked, setIsChecked] = useState<boolean>(payment.type === "Obligatory");
  let buffer1:Payment[]=[]

  const handleCheckboxChange = () => {
    let prix=total;
    setIsChecked(!isChecked);
    //buffer1=selectedPayment;
    if(!isChecked){
        buffer1.push(payment);
        prix+=payment.price;
    }
    else{
        buffer1 = buffer1.filter(paiment => paiment.id !== payment.id);
        prix-=payment.price;
    }
    //updateList(buffer1);
    updatePrice(prix);
    console.log(prix);
  };

  
    return(
        <div className="my-2">
            <IonRow>
                <IonCol><input type="checkbox"
                    checked={isChecked}
                    disabled={payment.type === "Obligatory"}
                    onChange={handleCheckboxChange}
                /></IonCol>
                <IonCol>{payment.name}</IonCol>
                <IonCol className="subTitle">{payment.dateBegin}</IonCol>
                <IonCol className="subTitle">{payment.dateEnd}</IonCol>
                <IonCol>{payment.childName}</IonCol>
                <IonCol>{payment.price}</IonCol>
                <IonCol>{payment.type}</IonCol>
            </IonRow>

        </div>
    )
}
export default ShowPayment;
