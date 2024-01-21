import { IonButton, IonSearchbar } from "@ionic/react";
import Notification_setting from "../../notification_setting";
import SideMenu from "../../sidemenu/sidemenu";
import ListWithPagination from "../../page/pages";
import ShowPayment from "./payment/payment";
import "./payments.css"


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
    let items=[{id:1, name:"gym", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"ana",price:100, type:"Optional"},
    {id:2, name:"transport", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"ana",price:100, type:"Optional"},
    {id:3, name:"gym", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"howa",price:100, type:"Optional"},
    {id:4, name:"transport", dateBegin:"12/03/2024",dateEnd:"12/04/2024",childName:"hia",price:100, type:"Optional"}];
    let prix=0;
    return(
      <div className="bgroundpayment row">
        <SideMenu active_Row={"row_13"}/>
        
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
                    <div className="newAccount row">
                        <h5 className="col-10"> Payments</h5>
                        <h5 className="col-2">{prix} DH</h5>

                    </div>
                    <div className="mainf row">
            
                        <ListWithPagination<Payment>
                              itemsPerPage={8}
                              data={items}
                              renderListItem={(payment) => (
                                    <ShowPayment key={payment.id} payment={payment} />
                                  
                              )}
                              />
                             
          </div>
                        
                    </div>


          </div>
        </div>
      </div>
    )
}
export default Payments;