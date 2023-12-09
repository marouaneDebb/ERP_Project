import React, { useEffect, useRef, useState } from "react";
import { IonApp, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import "./homet.css";

const HomePage1: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);

  const targetRef = useRef<HTMLIonRowElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            setIsAnimated2(true);
            setIsAnimated3(true);
            console.log('view')
            console.log("Element is in view!");
          } else {
            console.log("not view")
            setIsAnimated(false);
            setIsAnimated2(false);
            setIsAnimated3(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (

        <IonRow className={`row-1 ${isAnimated ? "animate" : ""}`}
              ref={targetRef}>
          <IonCol className="colm-1">
            <div className='div-14'>
              <h2 className={`div-15 ${isAnimated ? "animate" : ""}`}>
                welcome
              </h2>
              <h2 className={`div-16 ${isAnimated2 ? "animate" : ""}`}>
                to schoolName
              </h2>
              <h2 className={`div-17 ${isAnimated3 ? "animate" : ""}`}>
                world
              </h2>
            </div>
          </IonCol>
          <IonCol className="colm-2">
            <IonRow>
              <IonCol className="colm-3">
                <IonImg
                  src="https://img.freepik.com/free-photo/pretty-girl-with-curly-hair-standing-smiling_651396-121.jpg?w=360&t=st=1701626886~exp=1701627486~hmac=7225a68b8d86225078179de2e92d3b8df83d7e38386889afbe7e20bc43f8eaf4"
                  alt="class"
                  className="img"
                />
              </IonCol>
              <IonCol className="colm-4">
                <IonImg
                  src="https://img.freepik.com/free-photo/pretty-girl-with-curly-hair-standing-smiling_651396-121.jpg?w=360&t=st=1701626886~exp=1701627486~hmac=7225a68b8d86225078179de2e92d3b8df83d7e38386889afbe7e20bc43f8eaf4"
                  alt="class"
                  className="img-2"
                />
              </IonCol>
            </IonRow>
          </IonCol>        
        </IonRow>

  );
};

export default HomePage1;
