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
  IonCol,
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

interface data {
    tableData: any[];
}
import Notification_setting from "../../notification_setting";

const Student: React.FC<data>= ({tableData}) => {
  const numberOfRows = 8; // Nombre total de lignes
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Structure de données pour stocker les informations du tableau
  
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
    <div style={{position:'relative',width:"90%",left:'30px',borderRadius:'23px'}}>
        
    <div className=" table col-md-"  style={{ marginTop: '49px'}}>
      
      {/* <SideMenu /> */}
        
      
        <table className="col-md-12 " style={{  margin: 'auto' }}>
          {/* En-têtes de colonne */}
          <tr className=" header " >
            <th>
              <IonCheckbox
                checked={selectAll}
                onIonChange={() => toggleSelectAll()}
              />
            </th>
            <th>
              <IonLabel>Name</IonLabel>
            </th>
            <th>
              <IonLabel>ID</IonLabel>
            </th>
            <th>
              <IonLabel>Date</IonLabel>
            </th>
            <th>
              <IonLabel>Parent Name</IonLabel>
            </th>
            <th>
              <IonLabel>City</IonLabel>
            </th>
            <th>
              <IonLabel>Contact</IonLabel>
            </th>
            <th>
              <IonLabel>Grade</IonLabel>
            </th>
            <th>
              <IonLabel>Action</IonLabel>
            </th>
          </tr>

          {/* Corps du tableau */}
          {tableData
            .slice((currentPage - 1) * numberOfRows, currentPage * numberOfRows)
            .map((rowData, rowIndex) => (
              <tr key={rowIndex}  style={{}}>
                <td>
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
                </td>
                <td>
                  <IonLabel>
                  <IonCol className='photo'>
                                        <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702236437~exp=1702237037~hmac=44b4655423a2cb3bb4fa6f54d3828c164cc373a3d35fec1ad38416641b45421c" alt="logo" />
                                    </IonCol>
                    {rowData.name}</IonLabel>
                </td>
                {/* ... (ajoutez d'autres colonnes en fonction de votre tableau de données) */}
                <td>
                  <IonLabel>{rowData.id}</IonLabel>
                </td>
                <td>
                  <IonLabel>{rowData.date}</IonLabel>
                </td>
                <td>
                  <IonLabel>{rowData.parentname}</IonLabel>
                </td>
                <td>
                  <IonLabel>{rowData.city}</IonLabel>
                </td>
                <td>
                  <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#EEEDF8" />
                <path
                  d="M27.44 21.0001C27.22 21.0001 26.99 20.9301 26.77 20.8801C26.3245 20.7819 25.8866 20.6516 25.46 20.4901C24.9961 20.3213 24.4861 20.3301 24.0283 20.5147C23.5704 20.6993 23.1971 21.0467 22.98 21.4901L22.76 21.9401C21.786 21.3983 20.891 20.7253 20.1 19.9401C19.3147 19.1491 18.6418 18.2541 18.1 17.2801L18.52 17.0001C18.9633 16.783 19.3108 16.4096 19.4954 15.9518C19.68 15.494 19.6888 14.984 19.52 14.5201C19.3612 14.0925 19.2309 13.6549 19.13 13.2101C19.08 12.9901 19.04 12.7601 19.01 12.5301C18.8885 11.8257 18.5196 11.1879 17.9696 10.7314C17.4196 10.2748 16.7247 10.0297 16.01 10.0401H13.01C12.579 10.0361 12.1522 10.1249 11.7587 10.3006C11.3651 10.4764 11.0141 10.7348 10.7294 11.0584C10.4447 11.382 10.2331 11.7631 10.109 12.1758C9.98482 12.5885 9.95106 13.0232 10.01 13.4501C10.5427 17.6395 12.456 21.532 15.4476 24.5127C18.4393 27.4935 22.3387 29.3926 26.53 29.9101H26.91C27.6474 29.9112 28.3594 29.6406 28.91 29.1501C29.2263 28.8672 29.4791 28.5203 29.6514 28.1324C29.8238 27.7446 29.9119 27.3245 29.91 26.9001V23.9001C29.8977 23.2055 29.6448 22.5367 29.1943 22.0078C28.7439 21.4789 28.1238 21.1227 27.44 21.0001ZM27.94 27.0001C27.9398 27.1421 27.9094 27.2824 27.8508 27.4117C27.7921 27.5411 27.7066 27.6564 27.6 27.7501C27.4882 27.8466 27.3576 27.9187 27.2164 27.9617C27.0752 28.0048 26.9265 28.0178 26.78 28.0001C23.0349 27.5199 19.5562 25.8066 16.8927 23.1304C14.2292 20.4542 12.5324 16.9674 12.07 13.2201C12.0541 13.0736 12.068 12.9254 12.111 12.7845C12.1539 12.6436 12.225 12.5128 12.32 12.4001C12.4137 12.2934 12.529 12.208 12.6584 12.1493C12.7877 12.0907 12.928 12.0603 13.07 12.0601H16.07C16.3025 12.0549 16.5296 12.131 16.7121 12.2752C16.8946 12.4194 17.0212 12.6227 17.07 12.8501C17.11 13.1234 17.16 13.3934 17.22 13.6601C17.3355 14.1873 17.4892 14.7053 17.68 15.2101L16.28 15.8601C16.1603 15.915 16.0526 15.9931 15.9631 16.0897C15.8737 16.1864 15.8042 16.2997 15.7586 16.4233C15.7131 16.5469 15.6925 16.6782 15.6978 16.8098C15.7032 16.9414 15.7345 17.0707 15.79 17.1901C17.2292 20.2729 19.7072 22.7509 22.79 24.1901C23.0334 24.2901 23.3065 24.2901 23.55 24.1901C23.6747 24.1455 23.7893 24.0766 23.8871 23.9873C23.985 23.898 24.0641 23.7902 24.12 23.6701L24.74 22.2701C25.2569 22.455 25.7846 22.6086 26.32 22.7301C26.5866 22.7901 26.8566 22.8401 27.13 22.8801C27.3574 22.9289 27.5607 23.0554 27.7049 23.238C27.8491 23.4205 27.9252 23.6476 27.92 23.8801L27.94 27.0001Z"
                  fill="#4D44B5"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#EEEDF8" />
                <path
                  d="M28.0001 12H12.0001C11.2045 12 10.4414 12.3161 9.8788 12.8787C9.31619 13.4413 9.00012 14.2044 9.00012 15V25C9.00012 25.7956 9.31619 26.5587 9.8788 27.1213C10.4414 27.6839 11.2045 28 12.0001 28H28.0001C28.7958 28 29.5588 27.6839 30.1214 27.1213C30.6841 26.5587 31.0001 25.7956 31.0001 25V15C31.0001 14.2044 30.6841 13.4413 30.1214 12.8787C29.5588 12.3161 28.7958 12 28.0001 12ZM29.0001 24.75L24.1001 20.35L29.0001 16.92V24.75ZM11.0001 16.92L15.9001 20.35L11.0001 24.75V16.92ZM17.5801 21.53L19.4301 22.82C19.5975 22.9361 19.7964 22.9984 20.0001 22.9984C20.2039 22.9984 20.4027 22.9361 20.5701 22.82L22.4201 21.53L27.4201 26H12.6001L17.5801 21.53ZM12.0001 14H28.0001C28.1858 14.0015 28.3675 14.0547 28.5247 14.1536C28.6819 14.2525 28.8084 14.3932 28.8901 14.56L20.0001 20.78L11.1101 14.56C11.1918 14.3932 11.3184 14.2525 11.4756 14.1536C11.6328 14.0547 11.8144 14.0015 12.0001 14Z"
                  fill="#4D44B5"
                />
              </svg>
                
                </td>
                <td>
                  <IonChip color="success" style={{ color: "brown" }}>
                    <IonLabel>{rowData.grade}</IonLabel>
                  </IonChip>
                </td>
                <td>
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
                </td>
              </tr>
            ))}
        </table>
        <IonToolbar className="row2">
              
              <IonRow className="buttonsbas">
                {/*déplacer la fenêtre d'affichage des boutons vers la gauche */}
                <IonCol style={{ width: "20px" }} size="large">
                  <IonButton  fill="clear" onClick={moveLeft}>
                    {"<"}
                  </IonButton>
                </IonCol>
        
                {/* afficher uniquement le nombre de boutons spécifié */}
                {Array.from({ length: visibleButtons }, (_, index) => (
                  <button style={{
                    backgroundColor: "#4d44b5",
                    color: "white",
                    borderRadius: "40px",
                    padding: "10px 20px",
                    margin: "7px",
                    width:'23px',
                    height:'40px'
                    // Ajoutez d'autres styles au besoin
                  }}
                    className="buttonbas"
                    key={index}
                    onClick={() => goToPage(startButtonIndex + index + 1)}
                  >
                    {startButtonIndex + index + 1}
                  </button>
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
    </div>
  );
};

export default Student;
