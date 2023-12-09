import React, { useEffect, useRef, useState } from "react";
import { IonApp, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import "./homet.css";

const HomePage2: React.FC = () => {

  const [isAnimated4, setIsAnimated4] = useState(false);
  const [isAnimated5, setIsAnimated5] = useState(false);
  const [isAnimated6, setIsAnimated6] = useState(false);
  const [isAnimated7, setIsAnimated7] = useState(false);
  const [isAnimated8, setIsAnimated8] = useState(false);

  const targetRef2 = useRef<HTMLIonRowElement | null>(null);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated4(true);
            setIsAnimated5(true);
            setIsAnimated6(true);
            setIsAnimated7(true);
            setIsAnimated8(true);
            console.log('view')
            console.log("Element is in view!");
          } else {
            console.log("not view")
            setIsAnimated4(false);
            setIsAnimated5(false);
            setIsAnimated6(false);
            setIsAnimated7(false);
            setIsAnimated8(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetRef2.current) {
      observer.observe(targetRef2.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (targetRef2.current) {
        observer.unobserve(targetRef2.current);
      }
    };
  }, []);

  return (
        <IonRow className={`row-2 ${isAnimated4 ? "animate2" : ""}`}
              ref={targetRef2}>
          <IonCol className="col-5">
            <div>
              <div className={`div-20 ${isAnimated4 ? "animate2" : ""}`}>who are we ?</div>
              <div className="div-22">
                <div className={`div-23 ${isAnimated5 ? "animate2" : ""}`}>SchoolName</div>
                <div className={`div-24 ${isAnimated6 ? "animate2" : ""}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ex metus, mattis non nunc ac, commodo sagittis purus. Mauris
                  bibendum pretium urna sed pellentesque. <br />
                  <br />
                  Ut id turpis sit amet quam vestibulum ultrices a sit amet
                  lacus. Maecenas accumsan feugiat cursus. Vivamus ut
                  ullamcorper dui. Duis tincidunt mattis risus felis.
                </div>
              </div>
            </div>
            <div className="div-button">
                <button className={`buttons ${isAnimated8 ? "animate4" : ""}`}>about us</button>
            </div>
          </IonCol>
          <IonCol className={`col-6 ${isAnimated7 ? "animate3" : ""}`}>
            <IonImg
              src="https://img.freepik.com/free-photo/guy-learning_1098-14198.jpg?w=996&t=st=1701700270~exp=1701700870~hmac=a97ca3003a1c0458ba3a710f812839f3c7a2e05ca6a121920d703aaa2f164ff2"
              alt="class"
              className="img-3"
            />
          </IonCol>
        </IonRow>
  );
};

export default HomePage2;
