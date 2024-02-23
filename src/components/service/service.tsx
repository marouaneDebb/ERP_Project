import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  add,
  caretBack,
} from "ionicons/icons";
import SideMenu from "../sidemenu/sidemenu";
import "./service.css";
import Notification_setting from "../notification_setting";
import ServiceItem from "./ServiceItems/serviceItem";
import NewService from "./NewService";
import ServiceType from "../../Models/ServiceType";
import { getAllServices } from "../../Services/ServiceService";

const Service: React.FC = () => {

  

  
  const [selectedOption, setSelectedOption] = useState("defult");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [state, setState]=useState(true);
  const [services,setServices]=useState<ServiceType[]>([])
  const [items,setItems]=useState<ServiceType[]>(services)
  const [searchValue, setSearchValue]=useState()

  useEffect(()=>{
    getAllServices().then((res) =>{
      setServices(res.data)
    })
  },[])
  
  useEffect(()=>{
    setItems(services)
  },[services])

  const handleChangeValue=(e:any)=>{
    const value= e.target.value;
    setSearchValue(value);
    if (value){
      setItems(services.filter(s=>s.name.toLowerCase().includes(value.toLowerCase())));
    }else{
      setItems(services);
    }
  }
  
  const handleClick = () => {
    setSelectedOption("defult");
    setSelectedOption1("");
    setSelectedOption2("");
    setItems(services);
  };
  const handleClick1 = () => {
    setSelectedOption("");
    setSelectedOption1("defult");
    setSelectedOption2("");
    setItems(services.filter(s=>s.type==="OPTIONAL"));
  };
  const handleClick2 = () => {
    setSelectedOption("");
    setSelectedOption1("");
    setSelectedOption2("defult");
    setItems(services.filter(s=>s.type==="OBLIGATORY"))

  };
  const newService=()=>{
    setState(!state);
  }

  return (
    <div className="service_page">
      <div className="row">
        <SideMenu active_Row={"row_15"}/>
        <div className="ServiceMidsection col-10">
          <div className="service_title row">
            <div className="service_title_text col-3">Services</div>
            <div className="Service_seach col-6">
              <IonSearchbar className="Service_search_bar" value={searchValue} onIonInput={(handleChangeValue)}></IonSearchbar>
            </div>
            <div className="service_title_left col-3">
              <Notification_setting />
            </div>
          </div>
          <div className="addService">
            {state?
            <IonButton shape="round" className="text_1 mx-5" onClick={newService}>
              <IonIcon slot="start" icon={add}></IonIcon>
              add service
            </IonButton>:
            <IonButton shape="round" className="text_1" onClick={newService}>
              <IonIcon slot="start" icon={caretBack}></IonIcon>
              back
            </IonButton>}
          </div>
          {state?
          (<div className="service_content row rounded">
            <div className="service_container row rounded">
              <div className="container_title col-9">service Menu</div>
              <div className="container_menu col-3">
                <div className="menu row">
                  <div
                    className="service_options col-4"
                    id={selectedOption}
                    onClick={handleClick}
                  >
                    All
                  </div>
                  <div
                    className="service_options col-4"
                    id={selectedOption1}
                    onClick={handleClick1}
                  >
                    Optional
                  </div>
                  <div
                    className="service_options col-4"
                    id={selectedOption2}
                    onClick={handleClick2}
                  >
                    Obligatory
                  </div>
                </div>
              </div>
            </div>
            {/* {services} */}
            {items.map((item) => (
              <ServiceItem item={item} />))}
          </div>):<NewService/>}
        </div>
      </div>
    </div>
  );
};

export default Service;
