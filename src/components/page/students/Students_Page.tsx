

import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
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
import Nom_avatar from "../../nomavatar/Nom_avatar";
import SideMenu from "../../sidemenu/sidemenu";
const Students_Page: React.FC = () => {
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
    <IonPage className="tout">
      
      <div className="head">
        <h1 >Students</h1>
        <Nom_avatar  />
      </div>
        <div className="head2">
          <IonButton
            style={{ maxWidth: "15%", position: "absolute", right: "0%",top:'20%' }}
          >
            <IonIcon slot="start" icon={add}></IonIcon>
            New Student
          </IonButton>
          <IonButton
            fill="outline"
            className="ion-text-wrap"
            style={{ maxWidth: "17%", position: "absolute", right: "17%",top:'20%' }}
          >
            <IonIcon slot="start" icon={caretDown}></IonIcon>
            Newest
          </IonButton>
          <IonSearchbar className="searchbar"></IonSearchbar>
        </div>
      <div className="main">
        
          {/* En-têtes de colonne */}
          <IonRow className="table-header">
            <IonCol>
              <IonCheckbox
                checked={selectAll}
                onIonChange={() => toggleSelectAll()}
              />
            </IonCol>
            <IonCol>
              <IonLabel>Name</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>ID</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Date</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Parent Name</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>City</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Contact</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Grade</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>Action</IonLabel>
            </IonCol>
          </IonRow>

          {/* Corps du tableau */}
          {tableData
            .slice((currentPage - 1) * numberOfRows, currentPage * numberOfRows)
            .map((rowData, rowIndex) => (
              <IonRow key={rowIndex} className="table-cell">
                <IonCol>
                  <IonCheckbox
                    checked={selectedRows.includes(
                      (currentPage - 1) * numberOfRows + rowIndex
                    )}
                    onIonChange={() =>
                      toggleRowSelection(
                        (currentPage - 1) * numberOfRows + rowIndex
                      )
                    }
                  />
                </IonCol>
                <IonCol>
                  <IonLabel>{rowData.name}</IonLabel>
                </IonCol>
                {/* ... (ajoutez d'autres colonnes en fonction de votre tableau de données) */}
                <IonCol>
                  <IonLabel>{rowData.id}</IonLabel>
                </IonCol>
                <IonCol>
                  <IonLabel>{rowData.date}</IonLabel>
                </IonCol>
                <IonCol>
                  <IonLabel>{rowData.parentname}</IonLabel>
                </IonCol>
                <IonCol>
                  <IonLabel>{rowData.city}</IonLabel>
                </IonCol>
                <IonCol style={{ width: "23px" }} size="large">
                  <svg
                    style={{ width: "25px", margin: "0px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.44 13C19.22 13 18.99 12.93 18.77 12.88C18.3245 12.7818 17.8866 12.6515 17.46 12.49C16.9961 12.3212 16.4861 12.33 16.0283 12.5146C15.5704 12.6992 15.1971 13.0466 14.98 13.49L14.76 13.94C13.786 13.3982 12.891 12.7252 12.1 11.94C11.3147 11.149 10.6418 10.254 10.1 9.28L10.52 9.00001C10.9633 8.78292 11.3108 8.40954 11.4954 7.9517C11.68 7.49386 11.6888 6.98392 11.52 6.52001C11.3612 6.09243 11.2309 5.6548 11.13 5.21001C11.08 4.99001 11.04 4.76001 11.01 4.53001C10.8885 3.82563 10.5196 3.18775 9.9696 2.73124C9.4196 2.27474 8.72467 2.02961 8.00998 2.04001H5.00998C4.57901 2.03596 4.15223 2.12482 3.75869 2.30054C3.36515 2.47625 3.01409 2.7347 2.72941 3.05829C2.44473 3.38187 2.23311 3.763 2.10897 4.17572C1.98482 4.58844 1.95106 5.02306 2.00998 5.45001C2.54272 9.63939 4.45601 13.5319 7.44763 16.5126C10.4393 19.4934 14.3387 21.3925 18.53 21.91H18.91C19.6474 21.9111 20.3594 21.6405 20.91 21.15C21.2263 20.867 21.4791 20.5202 21.6514 20.1323C21.8238 19.7445 21.9119 19.3244 21.91 18.9V15.9C21.8977 15.2054 21.6448 14.5366 21.1943 14.0077C20.7439 13.4788 20.1238 13.1226 19.44 13ZM19.94 19C19.9398 19.142 19.9094 19.2823 19.8508 19.4116C19.7921 19.5409 19.7066 19.6563 19.6 19.75C19.4882 19.8465 19.3576 19.9185 19.2164 19.9616C19.0752 20.0047 18.9265 20.0177 18.78 20C15.0349 19.5198 11.5562 17.8065 8.89269 15.1303C6.22917 12.4541 4.53239 8.96734 4.06998 5.22001C4.05406 5.07352 4.06801 4.92534 4.11098 4.7844C4.15395 4.64346 4.22505 4.51269 4.31998 4.40001C4.41369 4.29334 4.52904 4.20785 4.65836 4.14922C4.78767 4.0906 4.92799 4.06019 5.06998 4.06001H8.06998C8.30253 4.05483 8.5296 4.13088 8.71212 4.27508C8.89464 4.41927 9.02119 4.62258 9.06998 4.85001C9.10998 5.12334 9.15998 5.39334 9.21998 5.66001C9.3355 6.18715 9.48924 6.70518 9.67998 7.21001L8.27998 7.86001C8.16028 7.91493 8.0526 7.99295 7.96314 8.0896C7.87367 8.18625 7.80418 8.29962 7.75865 8.4232C7.71312 8.54678 7.69245 8.67814 7.69783 8.80973C7.7032 8.94132 7.73452 9.07055 7.78998 9.19C9.22918 12.2728 11.7072 14.7508 14.79 16.19C15.0334 16.29 15.3065 16.29 15.55 16.19C15.6747 16.1454 15.7893 16.0765 15.8871 15.9872C15.985 15.8979 16.0641 15.7901 16.12 15.67L16.74 14.27C17.2569 14.4549 17.7846 14.6085 18.32 14.73C18.5866 14.79 18.8566 14.84 19.13 14.88C19.3574 14.9288 19.5607 15.0553 19.7049 15.2379C19.8491 15.4204 19.9252 15.6475 19.92 15.88L19.94 19Z"
                      fill="#4D44B5"
                    />
                  </svg>
                </IonCol>
                <IonCol style={{ height: "25%" }}>
                  <svg
                    style={{ width: "" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0001 4H4.00006C3.20441 4 2.44135 4.31607 1.87874 4.87868C1.31613 5.44129 1.00006 6.20435 1.00006 7V17C1.00006 17.7956 1.31613 18.5587 1.87874 19.1213C2.44135 19.6839 3.20441 20 4.00006 20H20.0001C20.7957 20 21.5588 19.6839 22.1214 19.1213C22.684 18.5587 23.0001 17.7956 23.0001 17V7C23.0001 6.20435 22.684 5.44129 22.1214 4.87868C21.5588 4.31607 20.7957 4 20.0001 4ZM21.0001 16.75L16.1001 12.35L21.0001 8.92V16.75ZM3.00006 8.92L7.90006 12.35L3.00006 16.75V8.92ZM9.58006 13.53L11.4301 14.82C11.5975 14.9361 11.7963 14.9984 12.0001 14.9984C12.2038 14.9984 12.4027 14.9361 12.5701 14.82L14.4201 13.53L19.4201 18H4.60006L9.58006 13.53ZM4.00006 6H20.0001C20.1858 6.00149 20.3674 6.05467 20.5246 6.15358C20.6818 6.25249 20.8083 6.39322 20.8901 6.56L12.0001 12.78L3.11006 6.56C3.19177 6.39322 3.31832 6.25249 3.47551 6.15358C3.63271 6.05467 3.81434 6.00149 4.00006 6Z"
                      fill="#4D44B5"
                    />
                  </svg>
                </IonCol>
                <IonCol>
                <IonChip style={{color: 'white'}}><IonLabel>{rowData.grade}</IonLabel></IonChip>
                  
                </IonCol>
                <IonCol>
                  <IonLabel>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0012 9.36C11.6544 9.36 11.3109 9.42832 10.9905 9.56105C10.67 9.69378 10.3789 9.88833 10.1336 10.1336C9.88835 10.3788 9.6938 10.67 9.56107 10.9905C9.42834 11.3109 9.36002 11.6544 9.36002 12.0012C9.36002 12.348 9.42834 12.6915 9.56107 13.0119C9.6938 13.3324 9.88835 13.6236 10.1336 13.8688C10.3789 14.1141 10.67 14.3086 10.9905 14.4414C11.3109 14.5741 11.6544 14.6424 12.0012 14.6424C12.7017 14.6422 13.3734 14.3638 13.8687 13.8684C14.3639 13.373 14.642 12.7011 14.6418 12.0006C14.6417 11.3001 14.3632 10.6284 13.8678 10.1332C13.3724 9.63796 12.7005 9.35984 12 9.36H12.0012ZM3.60122 9.36C3.25437 9.36 2.91092 9.42832 2.59048 9.56105C2.27003 9.69378 1.97887 9.88833 1.73361 10.1336C1.48835 10.3788 1.2938 10.67 1.16107 10.9905C1.02834 11.3109 0.960022 11.6544 0.960022 12.0012C0.960022 12.348 1.02834 12.6915 1.16107 13.0119C1.2938 13.3324 1.48835 13.6236 1.73361 13.8688C1.97887 14.1141 2.27003 14.3086 2.59048 14.4414C2.91092 14.5741 3.25437 14.6424 3.60122 14.6424C4.30171 14.6422 4.97345 14.3638 5.46866 13.8684C5.96387 13.373 6.24198 12.7011 6.24182 12.0006C6.24166 11.3001 5.96324 10.6284 5.46781 10.1332C4.97237 9.63796 4.30051 9.35984 3.60002 9.36H3.60122ZM20.4012 9.36C20.0544 9.36 19.7109 9.42832 19.3905 9.56105C19.07 9.69378 18.7789 9.88833 18.5336 10.1336C18.2884 10.3788 18.0938 10.67 17.9611 10.9905C17.8283 11.3109 17.76 11.6544 17.76 12.0012C17.76 12.348 17.8283 12.6915 17.9611 13.0119C18.0938 13.3324 18.2884 13.6236 18.5336 13.8688C18.7789 14.1141 19.07 14.3086 19.3905 14.4414C19.7109 14.5741 20.0544 14.6424 20.4012 14.6424C21.1017 14.6422 21.7734 14.3638 22.2687 13.8684C22.7639 13.373 23.042 12.7011 23.0418 12.0006C23.0417 11.3001 22.7632 10.6284 22.2678 10.1332C21.7724 9.63796 21.1005 9.35984 20.4 9.36H20.4012Z"
                        fill="#A098AE"
                      />
                    </svg>
                  </IonLabel>
                </IonCol>
              </IonRow>
            ))}
          <IonToolbar className="row2">
            
            <IonRow className="buttonsbas">
              {/*déplacer la fenêtre d'affichage des boutons vers la gauche */}
              <IonCol style={{ width: "20px" }} size="large">
                <IonButton fill="clear" onClick={moveLeft}>
                  {"<"}
                </IonButton>
              </IonCol>

              {/* afficher uniquement le nombre de boutons spécifié */}
              {Array.from({ length: visibleButtons }, (_, index) => (
                <IonButton
                  className="buttonbas"
                  key={index}
                  onClick={() => goToPage(startButtonIndex + index + 1)}
                >
                  {startButtonIndex + index + 1}
                </IonButton>
              ))}

              {/* déplacer la fenêtre d'affichage des boutons vers la droite */}
              <IonCol style={{ width: "20px" }} size="large">
                <IonButton
                  fill="clear"
                  onClick={moveRight}
                  disabled={
                    startButtonIndex + visibleButtons ===
                    Math.ceil(tableData.length / numberOfRows)
                  }
                >
                  {">"}
                </IonButton>
              </IonCol>
            </IonRow>
          </IonToolbar>
       
      </div>
    </IonPage>
  );
};

export default Students_Page;
