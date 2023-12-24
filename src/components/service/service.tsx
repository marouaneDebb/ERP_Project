import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  add,
  addCircle,
  arrowDown,
  arrowDownCircle,
  arrowDownCircleOutline,
  arrowDownOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  star,
} from "ionicons/icons";
import SideMenu from "../sidemenu/sidemenu";
import "./service.css";
import Notification_setting from "../notification_setting";
import ServiceItem from "./ServiceItems/serviceItem";

const Service: React.FC = () => {
  let items = [
    {
      img: "https://img.freepik.com/free-photo/front-view-smiley-people-holding-rackets_23-2149733032.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396",
      name: "Library",
      TotalOrders: "1.456",
      intrest: "26",
    },
    {
      img: "https://img.freepik.com/free-photo/front-view-smiley-people-holding-rackets_23-2149733032.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396",
      name: "Library",
      TotalOrders: "1.456",
      intrest: "26",
    },
    {
      img: "https://img.freepik.com/free-photo/front-view-smiley-people-holding-rackets_23-2149733032.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396",
      name: "Library",
      TotalOrders: "1.456",
      intrest: "26",
    },
    {
      img: "https://img.freepik.com/free-photo/front-view-smiley-people-holding-rackets_23-2149733032.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396",
      name: "Library",
      TotalOrders: "1.456",
      intrest: "26",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("defult");
  const [selectedOption1, setSelectedOption1] = useState("");

  const [selectedOption2, setSelectedOption2] = useState("");

  const handleClick = () => {
    setSelectedOption("defult");
    setSelectedOption1("");
    setSelectedOption2("");
    console.log("Text clicked!");
  };
  const handleClick1 = () => {
    setSelectedOption("");
    setSelectedOption1("defult");
    setSelectedOption2("");

    console.log("Text clicked!");
  };
  const handleClick2 = () => {
    setSelectedOption("");
    setSelectedOption1("");
    setSelectedOption2("defult");

    console.log("Text clicked!");
  };

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
            <IonButton shape="round" className="text_1">
              <IonIcon slot="start" icon={add}></IonIcon>
              add parent
            </IonButton>
          </div>

          <div className="service_content row">
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
            <ServiceItem items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
