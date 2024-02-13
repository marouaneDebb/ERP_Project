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
import SideMenu from "../../sidemenu/sidemenu";
import Notification_setting from "../../notification_setting";
import Student from "../student/Student";
import NewStudent from "../NewStudent";
import { getStudents } from "../../../Services/StrudentService";
import StudentType from "../../../Models/studentType";
import StudentDetails from "../detailStudent/destailStudent";


const Students: React.FC = () => {
  const [currentStudent, setCurrentSarent]=useState<StudentType| undefined>();

  const [students,setStudent] = useState<StudentType[]>([])
  useEffect(()=>{
    getStudents()
    .then((res)=>{
      setStudent(res.data)
    })
  },[]);
  
  
  const[state, setState]=useState(true);
  const newStudent=()=>{
    setState(!state);
  }
  return (
    <div className="parents_page">
      <div className="row">
        <SideMenu active_Row={"row_12"}/>
        
        <div className="medSection col-10">
          <div className="parent_title row">
            <div className="parent_title_text col-9">Students</div>
            <div className="parent_title_left col-3"><Notification_setting /></div>
          </div>
          <div className="parent_search row">
            <div className="seach col-6">
              <IonSearchbar className="search_bar"></IonSearchbar>
            </div>
            <div className="options col-6">
              <IonButton shape="round" className="text_2" href="/ERP_Project/students">
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
              <IonButton  shape="round" className="text_1" onClick={newStudent}>
                <IonIcon slot="start" icon={add}></IonIcon>
                add Student
              </IonButton>:
              <IonButton shape="round" className="text_1" onClick={newStudent}>
              <IonIcon slot="start" icon={caretBack}></IonIcon>
              back
            </IonButton>}
            </div>
          </div>
          {state?
          <>
          {currentStudent?
            <StudentDetails student={currentStudent}/>:
          <div className="parent-container">
            <Student items={students} setCurrentStudent={setCurrentSarent} />
          </div>}</>: 
          <NewStudent/>}
        </div>
      </div>
    </div>
  );
};

export default Students;
