import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  td,
  IonContent,
  IonCheckbox,
  IonLabel,
  IonPage,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonChip,
} from "@ionic/react";
import {
  arrowForwardOutline,
  arrowBackOutline,
  add,
  cart,
  caretDown,
} from "ionicons/icons";
import "./students.css";
import SideMenu from "../../sidemenu/sidemenu";
import Notification_setting from "../../notification_setting";
import OStudent from "./Student";

const Students: React.FC = () => {
  const numberOfRows = 8; // Nombre total de lignes
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Structure de données pour stocker les informations du tableau
  const tableData = [
    // ... (votre tableau de données)
    {
      name: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Mana William ",
      city: "Jakarta",
      contactOne: "",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      name: "Tony Soap",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "James Soap",
      city: "Jakarta",
      contactOne: "",
      grade: "VII B",
      action: "images/img_dots.svg",
    },
    {
      name: "Karen Hope",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Justin Hope",
      city: "Jakarta",
      contactOne: "",
      grade: "VII C",
      action: "images/img_dots.svg",
    },
    {
      name: "Jordan Nico",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Amanda Nico",
      city: "Jakarta",
      contactOne: "",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      name: "Nadila Adja",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Jack Adja",
      city: "Jakarta",
      contactOne: "",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
    {
      name: "Johnny Ahmad",
      id: "#123456789",
      date: "March 25, 2021",
      parentname: "Danny Ahmad",
      city: "Jakarta",
      contactOne: "",
      grade: "VII A",
      action: "images/img_dots.svg",
    },
  ];

  const toggleRowSelection = (rowIndex: number) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...Array(tableData.length).keys()]);
    }
    setSelectAll(!selectAll);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setSelectedRows([]); // Réinitialise la sélection lors du changement de page
  };
  // Ajoutez un état local pour suivre le nombre de boutons affichés
  const [visibleButtons, setVisibleButtons] = useState(3);
  const [startButtonIndex, setStartButtonIndex] = useState(0);

  // Gestionnaire pour déplacer la fenêtre d'affichage des boutons vers la gauche
  const moveLeft = () => {
    if (startButtonIndex > 0) {
      setStartButtonIndex(startButtonIndex - 1);
    }
  };

  // Gestionnaire pour déplacer la fenêtre d'affichage des boutons vers la droite
  const moveRight = () => {
    if (startButtonIndex + visibleButtons < tableData.length) {
      setStartButtonIndex(startButtonIndex + 1);
    }
  };
  return (
    <div className="row rounded-2">
        <SideMenu />
        <div className="medSection col-10 ">
          <div className="parent_title row">
            <div className="parent_title_text col-9">Students</div>
            <div className="parent_title_left col-3"><Notification_setting /></div>
          </div>
          <div className="parent_search row">
            <div className="seach col-6">
              <IonSearchbar className="search_bar"></IonSearchbar>
            </div>
            <div className="options col-6">
              <IonButton shape="round" className="text_2">
                newest
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg_icon"
                >
                  <path
                    d="M20.676 2.48803L11.236 12.952C10.852 13.4 10.148 13.4 9.76403 12.952L0.324027 2.48803C-0.283973 1.81603 0.164026 0.728027 1.06003 0.728027L19.94 0.728027C20.836 0.728027 21.284 1.81603 20.676 2.48803Z"
                    fill="#4D44B5"
                  />
                </svg>
              </IonButton>
              <IonButton shape="round" className="text_1">
                <IonIcon slot="start" icon={add}></IonIcon>
                add Student
              </IonButton>
            </div>
          </div>
          
          
            <OStudent tableData={tableData}  />
        </div>
    </div>
  );
};

export default Students;
