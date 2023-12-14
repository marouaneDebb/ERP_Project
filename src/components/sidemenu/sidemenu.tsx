import React, { useEffect, useRef, useState } from "react";
import { IonApp, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { logoIonic, navigate } from "ionicons/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./sidemenu.css";
import { useHistory } from "react-router-dom";


const SideMenu: React.FC = () => {
    const [activeRow, setActiveRow] = useState<string | null>(null);
    const history = useHistory();

  const handleRowClick = (rowId: string) => {
    setActiveRow(rowId);
    if (rowId === "row_11") {
        history.push("/dashboard");
      }
      else if(rowId === "row_12"){
        history.push("/sidemenu")
      }
      else if(rowId === "row_13"){
        history.push("/parents")
      }
      else if(rowId === "row-14"){
        history.push("/sidemenu")
      }
      else if(rowId === "row_15"){
        history.push("/sidemenu")
      }
  };

  const isRowActive = (rowId: string) => {
    return activeRow === rowId;
  };

  const getIconColor = (rowId: string) => {
    return isRowActive(rowId) ? "#4d44b5" : "#c1bbeb";
  };

  const getTitleColor = (rowId: string) => {
    return isRowActive(rowId) ? "#4d44b5" : "#c1bbeb";
  };
  return (
      <IonCol className="col_1 col-lg-2">
        <IonRow className="image">
            <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702236437~exp=1702237037~hmac=44b4655423a2cb3bb4fa6f54d3828c164cc373a3d35fec1ad38416641b45421c" alt="logo" />
        </IonRow>
        <IonRow className={`row_11 ${isRowActive("row_11") ? "active-row" : ""}`} onClick={() => handleRowClick("row_11")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
            color={getIconColor("row_11")}
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
          </svg>
          <div className="title" style={{ color: getTitleColor("row_11") }}>Dashboard</div>
        </IonRow>
        <IonRow className={`row_12 ${isRowActive("row_12") ? "active-row" : ""}`} onClick={() => handleRowClick("row_12")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
            color={getIconColor("row_12")}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <div className="title" style={{ color: getTitleColor("row_12") }}>Students</div>
        </IonRow>
        <IonRow className={`row_13 ${isRowActive("row_13") ? "active-row" : ""}`} onClick={() => handleRowClick("row_13")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
            color={getIconColor("row_13")}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <div className="title" style={{ color: getTitleColor("row_13") }}>Parents</div>
        </IonRow>
        <IonRow className={`row_14 ${isRowActive("row_14") ? "active-row" : ""}`} onClick={() => handleRowClick("row_14")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bank"
            viewBox="0 0 16 16"
            color={getIconColor("row_14")}
          >
            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
          </svg>
          <div className="title" style={{ color: getTitleColor("row_14") }}>Finance</div>
        </IonRow>
        <IonRow className={`row_15 ${isRowActive("row_15") ? "active-row" : ""}`} onClick={() => handleRowClick("row_15")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-check"
            viewBox="0 0 16 16"
            color={getIconColor("row_15")}
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
          </svg>
          <div className="title" style={{ color: getTitleColor("row_15") }}>User</div>
        </IonRow>
      </IonCol>
  );
};

export default SideMenu;
