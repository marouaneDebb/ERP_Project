import { IonCol, IonRow } from "@ionic/react";
import { all } from "axios";
import { useEffect, useState } from "react";

interface Payment{
    id:number;
    name:String;
    dateBegin: Date;
    dateEnd: Date;
    childName:String;
    price: number;
    type: String;
}
interface props {
    payment: Payment;
    updateList(payment:Payment[]):void;
    allChecked:boolean;
    selectedPayment:Payment[];
    setallChecked(a:boolean):void;
}

const ShowPayment: React.FC <props>= ({ payment,updateList,allChecked,selectedPayment,setallChecked}) => {
  const [isChecked, setIsChecked] = useState<boolean>(payment.type === "OBLIGATORY");




  const handleCheckboxChange = () => {
    let updatedSelectedPayment: Payment[];
    const alreadyExists = selectedPayment.some(p => p.id === payment.id);
  
    if (!isChecked && !alreadyExists) {
      updatedSelectedPayment = [...selectedPayment, payment];
    } else if (isChecked && alreadyExists) {
      updatedSelectedPayment = selectedPayment.filter(p => p.id !== payment.id);
    } else {
      updatedSelectedPayment = selectedPayment;
    }
    updateList(updatedSelectedPayment);
  
    setIsChecked(!isChecked);
  
    if (allChecked) {
      setallChecked(false);
    }
  };

  useEffect(()=>{
    if(selectedPayment.some(p => p.id === payment.id)){
        setIsChecked(true)
    }
    else{
        setIsChecked(false)
    }
  },[selectedPayment])
  
  
    return(
        <div className="my-2">
            <IonRow>
                <IonCol><input type="checkbox"
                    checked={isChecked||allChecked}
                    disabled={payment.type === "OBLIGATORY"}
                    onChange={handleCheckboxChange}
                /></IonCol>
                <IonCol>{payment.name} {allChecked}</IonCol>
                <IonCol className="subTitle">{payment.dateBegin.toString()}</IonCol>
                <IonCol className="subTitle">{payment.dateEnd.toString()}</IonCol>
                <IonCol>{payment.childName}</IonCol>
                <IonCol>{payment.price}</IonCol>
                <IonCol>{payment.type}</IonCol>
            </IonRow>

        </div>
    )
}
export default ShowPayment;
