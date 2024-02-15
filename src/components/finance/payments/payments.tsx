import { IonButton, IonCol, IonRow, IonSearchbar } from "@ionic/react";
import Notification_setting from "../../notification_setting";
import SideMenu from "../../sidemenu/sidemenu";
import ListWithPagination from "../../page/pages";
import ShowPayment from "./payment/payment";
import "./payments.css"
import { useEffect, useState } from "react";


interface Payment{
  id:number;
  name:String;
  dateBegin: String;
  dateEnd:String;
  childName:String;
  price: number;
  type: String;
}


function Payments(){
  const toPay=[{id:1, name:"gym", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"ana",price:100, type:"Obligatory"},
  {id:2, name:"transport", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"ana",price:100, type:"Optional"},
  {id:3, name:"gym", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"howa",price:100, type:"Optional"},
  {id:4, name:"transport", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"hia",price:100, type:"Obligatory"}];
  
  const [allChecked, setallChecked] = useState(false);
  const [prix, setPrix]=useState(0);
  const [selectedPayment,setSelectedPayment] = useState<Payment[]>([]);
  
  const updatePrice=()=>{
  let totalprice=0;
  selectedPayment.forEach(element => {
    totalprice+=element.price;
  });
  setPrix(totalprice);
  }
    
  useEffect(()=>{
    setSelectedPayment(toPay.filter(payment => payment.type === 'Obligatory'));
  },[]);

  useEffect(() => {
    updatePrice();
    if(selectedPayment.length===toPay.length){
      setallChecked(true)
    }
  }, [selectedPayment]);

    const selectAll=()=>{
      setallChecked(!allChecked);
      if(!allChecked){
       setSelectedPayment(toPay);
      }
      else{
        setSelectedPayment(toPay.filter(payment => payment.type === 'Obligatory'));
      }
      updatePrice();
      
    }
   
    
    
    return(
      <div className="bgroundpayment row">
        <SideMenu active_Row={"row_14"}/>
        <div className="medSection col-10">  
          <div className="col-12 midle1 p-3">
                <div className="service_title row">
                    <div className="service_title_text col-3">Payments</div>
                    <div className="Service_seach col-6">
                        <IonSearchbar className="Service_search_bar"></IonSearchbar>
                    </div>
                    <div className="service_title_left col-3">
                        <Notification_setting />
                    </div>
                </div>

                <div className="formulaire">
                    <div className="newAccount">
                      <IonRow>
                        <h5 className="col-9"> Payments</h5>
                        <h5 className="col-2">{prix} DH</h5>
                        </IonRow>
                    </div>
                    
                    <div className="my-2 mx-4">
                      <IonRow >
                          <IonCol>
                            <input type="checkbox"
                                onChange={selectAll}
                                checked={allChecked}
                             /> All
                          </IonCol>
                          <IonCol>Service name</IonCol>
                          <IonCol >Begin date</IonCol>
                          <IonCol >End date</IonCol>
                          <IonCol>child name</IonCol>
                          <IonCol>Price</IonCol>
                          <IonCol>Type</IonCol>
                      </IonRow>
                      <hr className="mb-4"></hr>
                      <ListWithPagination<Payment>
                            itemsPerPage={8}
                            data={toPay}
                            renderListItem={(payment) => (
                                  <ShowPayment 
                                    key={payment.id} 
                                    allChecked={allChecked}
                                    setallChecked={setallChecked}
                                    payment={payment}
                                    updateList={setSelectedPayment}
                                    selectedPayment={selectedPayment}
                                  />
                            )}
                            />
                        
                        <div className="button-container mt-2">
                            <IonButton href="/ERP_Project/pay/online" shape="round" className="text_1">
                                Pay
                            </IonButton>
                        </div>
                    </div>
                </div>

              </div>
        </div>
      </div>
    )
}
export default Payments;