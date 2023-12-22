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

interface props {
  items: Array<{
    name: string;
    TotalOrders: string;
    intrest: string;
    img: string;


  }>;
}

const ServiceItem: React.FC <props>= ({ items }) => {

  return (
    <div className="row">
      {items.map((item, index) => (
        <div className="service_item col-lg-2 col-md-4 col-sm-6">
          <div className="service_imageCart">
            <img src={item.img} alt=".." />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceItem;
