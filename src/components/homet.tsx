import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonCol,
  IonFooter,
  IonGrid,
  IonImg,
  IonRow,
} from "@ionic/react";
import "./homet.css";
import HomePage1 from "./home-page-1";
import HomePage2 from "./home-page-2";
import HomePage3 from "./home-page-3";
import Footer from "./footercom/Footer";

const Homet: React.FC = () => {
  return (
    <IonApp>
      <IonGrid className="div-1">
        <HomePage1></HomePage1>
        <HomePage2></HomePage2>
        <HomePage3></HomePage3>
        <IonFooter>
          <Footer />
        </IonFooter>
      </IonGrid>
    </IonApp>
  );
};

export default Homet;
