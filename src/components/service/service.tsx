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

  
  // const services=[
  //   {
  //     name: "Product 1",
  //     start: new Date("2024-02-12"),
  //     description: "Description of Product 1",
  //     pereodicity: 1,
  //     price: 100,
  //     type: "Optional",
  //     discount: []
  //   },
  //   {
  //     name: "Product 2",
  //     start: new Date("2024-02-13"),
  //     description: "Description of Product 2",
  //     pereodicity: 2,
  //     price: 200,
  //     type: "Optional",
  //     discount: []
  //   },
  //   {
  //     name: "Product 3",
  //     start: new Date("2024-01-12"),
  //     description: "Description of Product 3",
  //     pereodicity: 1,
  //     price: 100,
  //     type: "Obligatory",
  //     discount: []
  //   },
  //   {
  //     name: "Product 4",
  //     start: new Date("2024-01-13"),
  //     description: "Description of Product 4",
  //     pereodicity: 2,
  //     price: 200,
  //     type: "Optional",
  //     discount: []
  //   },
  // ];

  
  const [selectedOption, setSelectedOption] = useState("defult");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [state, setState]=useState(true);
  const [services,setServices]=useState<ServiceType[]>([])
  
  useEffect(()=>{
    getAllServices().then((res) =>{
      console.log(res.data)
      setServices(res.data)
    })
  },[])
  const [items,setItems]=useState<ServiceType[]>(services)
  
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
    setItems(services.filter(s=>s.type==="optional"));
  };
  const handleClick2 = () => {
    setSelectedOption("");
    setSelectedOption1("");
    setSelectedOption2("defult");
    setItems(services.filter(s=>s.type==="obligatory"))

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
              <IonSearchbar className="Service_search_bar"></IonSearchbar>
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
          (<div className="service_content row">
            <div className="service_container row">
              <div className="container_title col-9">service Menu</div>
              <div className="container_menu col-3">
                <div className="menu row">
                  <div
                    className="service_options col-4"
                    id={selectedOption}
                    onClick={handleClick}
                  >
                    All services
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
