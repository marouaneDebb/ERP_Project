import { IonButton, IonCol, IonRow, IonSearchbar } from "@ionic/react";
import { useEffect, useState } from "react";
import ServiceType from "../../Models/ServiceType";
import SideMenu from "../sidemenu/sidemenu";
import Notification_setting from "../notification_setting";
import ListWithPagination from "../page/pages";
import ServiceItem from "../service/ServiceItems/serviceItem";
import { server } from "ionicons/icons";


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
        {
          name: "Product 3",
          start: new Date("2024-02-12"),
          description: "Description of Product 3",
          preodicity: 1,
          price: 100,
          type: "Optional",
          discount: []
        },
        {
          name: "Product 4",
          start: new Date("2024-02-13"),
          description: "Description of Product 4",
          preodicity: 2,
          price: 200,
          type: "Optional",
          discount: []
        }
      ];


    const [allChecked, setallChecked] = useState(false);
    const [selectedService,setSelectedService] = useState<ServiceType[]>([]);
    const [isCheckedDictionary, setIsCheckedDictionary]= useState<{ [key: string]:boolean }>({})
  
    useEffect(() => {
      if(selectedService.length===toChoose.length){
        setallChecked(true)
      }
      console.log(selectedService)
    }, [selectedService]);
  
      const selectAll=()=>{
        setallChecked(!allChecked);
        if(!allChecked){
         setSelectedService(toChoose);
         toChoose.map((ser)=>{
          setIsCheckedDictionary(prevState => ({
          ...prevState,
          [ser.name]: true
      }));})
    }
        else{
          setSelectedService([])
          toChoose.map((ser)=>{
            setIsCheckedDictionary(prevState => ({
            ...prevState,
            [ser.name]: false
        }));})
        }
        }
     
        const handleCheckboxChange = (service:ServiceType) => {
          let updatedSelectedService: ServiceType[];
          const isChecked = isCheckedDictionary[service.name] || false;
          const alreadyExists = selectedService.some(p => p.name === service.name);
        
          if (!isChecked && !alreadyExists) {
            updatedSelectedService = [...selectedService, service];
          } else if (isChecked && alreadyExists) {
            updatedSelectedService = selectedService.filter(p => p.name !== service.name);
          } else {
            updatedSelectedService = selectedService;
          }
          setSelectedService(updatedSelectedService);
          setIsCheckedDictionary(prevState => ({
            ...prevState,
            [service.name]: !isChecked
        }));
        
          if (allChecked) {
            setallChecked(false);
          }
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
                          <h5> Services</h5>
                          </IonRow>
                      </div>
                      
                      <div className="my-2 mx-4">
                        <IonRow >
                            <div className="col-1">
                              <input type="checkbox"
                                  onChange={selectAll}
                                  checked={allChecked}
                               /> All
                            </div>
                            <div className="row col-11">
                              <div className="col-3 px-4">Service</div>
                              <div className="col-3 px-5">Price</div>
                              <div className="col-3 px-4">Orders</div>
                              <div className="col-2 px-4">Interest</div>
                            </div>
                        </IonRow>
                        <ListWithPagination<ServiceType>
                              itemsPerPage={4}
                              data={toChoose}
                              renderListItem={(service) => (
                                <IonRow className="row">
                                    <div className="col-1 pt-5"><input type="checkbox" onChange={()=>handleCheckboxChange(service)} checked={isCheckedDictionary[service.name]||allChecked}/></div>
                                    <div className="col-11">
                                    <ServiceItem
                                      //allChecked={allChecked}
                                      //setallChecked={setallChecked}
                                      item={service}
                                      //updateList={setSelectedService}
                                      //selectedService={selectedService}
                                    /></div>
                                  </IonRow>
                              )}
                              />
                          
                          <div className="button-container mt-2">
                              <IonButton href="/ERP_Project/pay/online" shape="round" className="text_1">
                                  ok
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