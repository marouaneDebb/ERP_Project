import { IonButton, IonCol, IonRow, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import ServiceType from "../../Models/ServiceType";
import SideMenu from "../sidemenu/sidemenu";
import Notification_setting from "../notification_setting";
import ListWithPagination from "../page/pages";
import ServiceItem from "../service/ServiceItems/serviceItem";



function ServiceToStudent(){
    const toChoose=[
        {
          name: "Product 1",
          start: new Date("2024-02-12"),
          description: "Description of Product 1",
          preodicity: 1,
          price: 100,
          type: "Optional",
          discount: []
        },
        {
          name: "Product 2",
          start: new Date("2024-02-13"),
          description: "Description of Product 2",
          preodicity: 2,
          price: 200,
          type: "Optional",
          discount: []
        },
      ];


    const [allChecked, setallChecked] = useState(false);
    const [selectedService,setSelectedService] = useState<ServiceType[]>([]);
  
    useEffect(() => {
      if(selectedService.length===toChoose.length){
        setallChecked(true)
      }
    }, [selectedService]);
  
      const selectAll=()=>{
        setallChecked(!allChecked);
        if(!allChecked){
         setSelectedService(toChoose);
        }}
     
      
      
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
                          <h5> Services</h5>
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
                        </IonRow>
                        <hr className="mb-4"></hr>
                        <ListWithPagination<ServiceType>
                              itemsPerPage={4}
                              data={toChoose}
                              renderListItem={(service) => (
                                    <ServiceItem
                                      //allChecked={allChecked}
                                      //setallChecked={setallChecked}
                                      item={service}
                                      //updateList={setSelectedService}
                                      //selectedService={selectedService}
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
  export default ServiceToStudent;