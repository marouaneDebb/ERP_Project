import React, { useEffect, useRef, useState } from "react";
import { IonApp, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import "./homet.css";

const HomePage3: React.FC = () => {
  return (

    <IonRow>
        
        <IonRow className="row-3">
          <IonCol>
            <div className="div-25">
              <p>our services</p>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-4"
            />
            <div className="servises">
              <p>service 1</p>
            </div>
          </IonCol>
          <IonCol>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-4"
            />
            <div className="servises">
              <p>service 1</p>
            </div>
          </IonCol>
          <IonCol>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-4"
            />
            <div className="servises">
              <p>service 1</p>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-4"
            />
            <div className="servises">
              <p>service 1</p>
            </div>
          </IonCol>
          <IonCol>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-4"
            />
            <div className="servises">
              <p>service 1</p>
            </div>
          </IonCol>
          <IonCol>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-4"
            />
            <div className="servises">
              <p>service 1</p>
            </div>
          </IonCol>
        </IonRow>
    </IonRow>

  );
};

export default HomePage3;
