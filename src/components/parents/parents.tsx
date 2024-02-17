import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {add, caretBack} from "ionicons/icons";
import SideMenu from "../sidemenu/sidemenu";
import Parent from "./parent/parent";
import "./parents.css";
import Notification_setting from "../notification_setting";
import NewParent from "./newParent/NewParent";
import ParentDetails from "./parentDetails/details";
import { getAllParent } from "../../Services/ParentService";
import ParentType from "../../Models/parentType";



const Parents: React.FC = () => {
  const [currentParent, setCurrentParent]=useState<ParentType| undefined>();
  const [parents,setParents] = useState<ParentType[]>([])
  const [items,setItems] = useState<ParentType[]>([])
  const [searchValue, setSearchValue]=useState()
  

  const handleSearchChange = (event:any) => {
    const value=event.target.value;
    setSearchValue(value)
    if (value){
      setItems(parents.filter(p=>p.lastName.toUpperCase().includes(value.toUpperCase()) || p.firstName.toUpperCase().includes(value.toUpperCase())))
    }
    else{setItems(parents)}
  };

  useEffect(()=>{
    setItems(parents)
  },[parents])

  useEffect(()=>{
    getAllParent()
    .then((res)=>{
      setParents(res.data)
    })
  },
    [])
  const[state, setState]=useState(true);
  const newParent=()=>{
    setState(!state);
  }


  return (
    <div className="parents_page">
      <div className="row">
        <SideMenu active_Row={"row_13"}/>
        
        <div className="medSection col-10">
          <div className="parent_title row">
            <div className="parent_title_text col-9">Parents</div>
          
            <div className="parent_title_left col-3"><Notification_setting /></div>
          </div>
          <div className="parent_search row">
            <div className="seach col-6">
              <IonSearchbar className="search_bar" value={searchValue} onIonInput={(handleSearchChange)}></IonSearchbar>
            </div>
            <div className="options col-6">
              <IonButton shape="round" className="text_2" href="/ERP_Project/parents">
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
              {state?
              <IonButton  shape="round" className="text_1" onClick={newParent}>
                <IonIcon slot="start" icon={add}></IonIcon>
                add Parent
              </IonButton>:
              <IonButton shape="round" className="text_1" onClick={newParent}>
              <IonIcon slot="start" icon={caretBack}></IonIcon>
              back
            </IonButton>}
            </div>
          </div>
          {state?
          <>
          {currentParent?
          <ParentDetails parent={currentParent}/>:
          <div className="parent-container">
            <Parent items={items} setCurrentParent={setCurrentParent} />
          </div>}</>:<NewParent/>}
        </div>
      </div>
    </div>
  );
};

export default Parents;
