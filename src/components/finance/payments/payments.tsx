import { IonButton, IonCol, IonRow, IonSearchbar } from "@ionic/react";
import Notification_setting from "../../notification_setting";
import SideMenu from "../../sidemenu/sidemenu";
import ListWithPagination from "../../page/pages";
import ShowPayment from "./payment/payment";
import "./payments.css"
import { useEffect, useState } from "react";
import StudentType from "../../../Models/studentType";
import { getStudentsByParentId } from "../../../Services/StrudentService";
import { useHistory, useParams } from 'react-router-dom';

interface Payment{
  id:number;
  name:String;
  dateBegin: Date;
  dateEnd:Date;
  childName:String;
  price: number;
  type: String;
}


function Payments(){
  const [toPay,setToPay]=useState<Payment[]>([]);
  const [allChecked, setallChecked] = useState(false);
  const [prix, setPrix]=useState(0);
  const [selectedPayment,setSelectedPayment] = useState<Payment[]>([]);
  const [students,setStudents]=useState<StudentType[]>([]);
  const [parentId, setParentId]=useState<String>(useParams().parentId);


  const updatePrice=()=>{
  let totalprice=0;
  selectedPayment.forEach(element => {
    totalprice+=element.price;
  });
  setPrix(totalprice);
  }

    
  useEffect(()=>{
    getStudentsByParentId(parentId).then((rest)=>{
      setStudents(rest.data);
    })
  },[]);


  useEffect(() => {
    updatePrice();
    if(selectedPayment.length===toPay.length){
      setallChecked(true);
    }
  }, [selectedPayment]);


  useEffect(() => {
    const id = 0;
    students.forEach(student =>
        student.etatServices.forEach(etatService => {
            if (etatService.payer === false) {
                let startDate = etatService.dateInscription;
                const newObj = {
                    childName: student.firstName,
                    dateBegin: startDate,
                    dateEnd: startDate,
                    name: etatService.service.name,
                    price: etatService.service.price,
                    type: etatService.service.type,
                    id: id + 1
                };
                const exists = toPay.some(payment =>
                    payment.childName === newObj.childName &&
                    payment.dateBegin === newObj.dateBegin &&
                    payment.dateEnd === newObj.dateEnd &&
                    payment.name === newObj.name &&
                    payment.price === newObj.price &&
                    payment.type === newObj.type &&
                    payment.id === newObj.id
                );

                if (!exists) {
                    toPay.push(newObj);
                }
            }
        })
    );

    setSelectedPayment(toPay.filter(payment => payment.type === 'OBLIGATORY'));
}, [students]);



    const selectAll=()=>{
      setallChecked(!allChecked);
      if(!allChecked){
       setSelectedPayment(toPay);
      }
      
      else{
        setSelectedPayment(toPay.filter(payment => payment.type === 'OBLIGATORY'));
      }
      updatePrice();
      
    }
   
    const history = useHistory();
    const handleClick = () => {
      
        history.push(`/ERP_Project/pay/online/${prix}`);
      
    };
    
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
                                disabled={toPay.every(p => p.type === "OBLIGATORY")}
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
                            <IonButton onClick={handleClick} shape="round" className="text_1">
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