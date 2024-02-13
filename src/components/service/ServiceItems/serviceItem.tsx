import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
} from "@ionic/react";
import "./serviceItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
import ServiceType from "../../../Models/ServiceType";

interface props {
  item: ServiceType;
}

const ServiceItem: React.FC <props>= ({ item }) => {
  const img="https://img.freepik.com/free-photo/front-view-smiley-people-holding-rackets_23-2149733032.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396";
  const TotalOrders=166;
  const intrest=26
  return (
       
        <div className="service_item row">
          
          <div className="service_name col-2">
            <div className="row">
              <IonButton shape="round" className="option">
              Optional
              </IonButton>
            </div>
            <div className="row">
              <p className="service_title">{item.name}</p>
            </div>
          </div>

          <div className="service_imageCart col-2">
            <div>{item.preodicity} month</div>
          </div>

          <div className="service_TotalOrders col-3">
            <div className="row">
              <div className="icon col-6">
                <svg
                  width="40"
                  height="36"
                  viewBox="0 0 62 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 32.2043C8 30.5758 6.20914 29.2557 4 29.2557C1.79086 29.2557 0 30.5758 0 32.2043V50.5171C0 52.1455 1.79086 53.4656 4 53.4656C6.20914 53.4656 8 52.1455 8 50.5171V32.2043Z"
                    fill="#4D44B5"
                  />
                  <path
                    d="M26 21.6974C26 20.0898 24.2091 18.7866 22 18.7866C19.7909 18.7866 18 20.0898 18 21.6974V50.5548C18 52.1624 19.7909 53.4656 22 53.4656C24.2091 53.4656 26 52.1624 26 50.5548V21.6974Z"
                    fill="#4D44B5"
                  />
                  <path
                    d="M44 3.43136C44 1.79342 42.2091 0.465607 40 0.465607C37.7909 0.465607 36 1.79342 36 3.43137V50.4999C36 52.1378 37.7909 53.4656 40 53.4656C42.2091 53.4656 44 52.1378 44 50.4998V3.43136Z"
                    fill="#4D44B5"
                  />
                  <path
                    d="M62 26.971C62 25.3418 60.2091 24.0212 58 24.0212C55.7909 24.0212 54 25.3418 54 26.971V50.5158C54 52.1449 55.7909 53.4656 58 53.4656C60.2091 53.4656 62 52.1449 62 50.5158V26.971Z"
                    fill="#4D44B5"
                  />
                </svg>
              </div>
              <div className="numbers col-6">
                <div>
                  <p className="big_number">{TotalOrders}</p>
                </div>
                <div><p className="lighter_text">Total Orders</p></div>
              </div>
            </div>
          </div>
          <div className="intrest col-3">
            <div className="row">
              <div className="icon col-6">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.9411 3.52448C39.9411 1.86763 38.598 0.524482 36.9411 0.524482H9.94113C8.28427 0.524482 6.94113 1.86763 6.94113 3.52448C6.94113 5.18134 8.28427 6.52448 9.94113 6.52448H33.9411V30.5245C33.9411 32.1813 35.2843 33.5245 36.9411 33.5245C38.598 33.5245 39.9411 32.1813 39.9411 30.5245V3.52448ZM5.12132 39.5869L39.0624 5.6458L34.8198 1.40316L0.87868 35.3443L5.12132 39.5869Z"
                    fill="#4D44B5"
                  />
                </svg>
              </div>
              <div className="numbers col-6">
                <div>
                  <p className="big_number">{intrest}%</p>
                </div>
                <div><p className="lighter_text">interest</p></div>
              </div>
            </div>
          </div>
          <div className="service_more col-1">
            <p className="more">...</p>
          </div>
        </div>

  );
};

export default ServiceItem;
