import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonCol,
  IonIcon,
  IonRow,
} from "@ionic/react";
import "./student.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import StudentType from "../../../Models/studentType";
import { trash } from "ionicons/icons";
import { deleteStudentById } from "../../../Services/StrudentService";


interface props {
  items: StudentType[];
  setCurrentStudent(student:StudentType):void;
}
const   img= "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396&semt=sph";


const Student: React.FC <props>= ({ items, setCurrentStudent }) => {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({});

  // useEffect(()=>{
    
  //   console.log(items[0].etatServices[0].dateInscription)
  // })


  const toggleOpen = (id: number) => {
    setOpenStates((prev) => ({
      [id]: !prev[id] // toggle the state for the given id
    }));
  };

  const toggleClose = (id: number) => {
    setOpenStates((prev) => ({
      [id]: false 
    }));
  };

  function handlChange(student: StudentType) {
    setCurrentStudent(student);
  }

  const deleteStudent =(id:any) =>{
    deleteStudentById(id).then((res)=>{
      window.location.reload();
    }).catch((error) => {
      console.error("Error deleting student:", error);
    });
  }

 
  return (

    <div className="row">
      {items.map((item, index) => (
      
        <div className="cart col-lg-2 col-md-4 col-sm-6 child" onMouseLeave={()=>toggleClose(index)}>
          <div className="horizontal">
            <svg
              width="24"
              height="6"
              viewBox="0 0 24 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={()=>toggleOpen(index)}
            >
              <path
                d="M12.0012 0.360107C11.6543 0.360107 11.3109 0.428424 10.9904 0.561157C10.67 0.693889 10.3788 0.888439 10.1335 1.1337C9.88829 1.37896 9.69374 1.67012 9.56101 1.99056C9.42828 2.31101 9.35996 2.65446 9.35996 3.00131C9.35996 3.34815 9.42828 3.69161 9.56101 4.01205C9.69374 4.3325 9.88829 4.62366 10.1335 4.86892C10.3788 5.11417 10.67 5.30872 10.9904 5.44146C11.3109 5.57419 11.6543 5.64251 12.0012 5.64251C12.7017 5.64235 13.3734 5.36393 13.8686 4.86849C14.3638 4.37306 14.6419 3.7012 14.6418 3.00071C14.6416 2.30022 14.3632 1.62848 13.8677 1.13327C13.3723 0.638064 12.7004 0.359948 12 0.360107H12.0012ZM3.60116 0.360107C3.25431 0.360107 2.91086 0.428424 2.59042 0.561157C2.26997 0.693889 1.97881 0.888439 1.73355 1.1337C1.48829 1.37896 1.29374 1.67012 1.16101 1.99056C1.02828 2.31101 0.959961 2.65446 0.959961 3.00131C0.959961 3.34815 1.02828 3.69161 1.16101 4.01205C1.29374 4.3325 1.48829 4.62366 1.73355 4.86892C1.97881 5.11417 2.26997 5.30872 2.59042 5.44146C2.91086 5.57419 3.25431 5.64251 3.60116 5.64251C4.30165 5.64235 4.97339 5.36393 5.4686 4.86849C5.9638 4.37306 6.24192 3.7012 6.24176 3.00071C6.2416 2.30022 5.96318 1.62848 5.46775 1.13327C4.97231 0.638064 4.30045 0.359948 3.59996 0.360107H3.60116ZM20.4012 0.360107C20.0543 0.360107 19.7109 0.428424 19.3904 0.561157C19.07 0.693889 18.7788 0.888439 18.5336 1.1337C18.2883 1.37896 18.0937 1.67012 17.961 1.99056C17.8283 2.31101 17.76 2.65446 17.76 3.00131C17.76 3.34815 17.8283 3.69161 17.961 4.01205C18.0937 4.3325 18.2883 4.62366 18.5336 4.86892C18.7788 5.11417 19.07 5.30872 19.3904 5.44146C19.7109 5.57419 20.0543 5.64251 20.4012 5.64251C21.1017 5.64235 21.7734 5.36393 22.2686 4.86849C22.7638 4.37306 23.0419 3.7012 23.0418 3.00071C23.0416 2.30022 22.7632 1.62848 22.2677 1.13327C21.7723 0.638064 21.1005 0.359948 20.4 0.360107H20.4012Z"
                fill="#A098AE"
              /> 
            </svg>
          </div>
          <div className="imageCart" onClick={() => handlChange(item)}>
            <img className="parent_img" src={img} alt=".." />
          </div>
          <div className="name">
            <p>
              {item.firstName} {item.lastName}
            </p>
          </div>
          {openStates[index] && (
            <div className="dropdownDiv" style={{ zIndex: 100, position: 'absolute' }}>
              
                <ul className="flex flex-col gap-4">
                  <li className="pt-3" onClick={() => deleteStudent(item.id)} ><IonIcon icon={trash}></IonIcon> delete</li>
                </ul>
            </div>
          )}

          <IonRow>
            <IonCol className="icons">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#4D44B5" />
                <path
                  d="M27.44 21.0001C27.22 21.0001 26.99 20.9301 26.77 20.8801C26.3245 20.7819 25.8866 20.6516 25.46 20.4901C24.9961 20.3213 24.4861 20.3301 24.0283 20.5147C23.5704 20.6993 23.1971 21.0467 22.98 21.4901L22.76 21.9401C21.786 21.3983 20.891 20.7253 20.1 19.9401C19.3147 19.1491 18.6418 18.2541 18.1 17.2801L18.52 17.0001C18.9633 16.783 19.3108 16.4096 19.4954 15.9518C19.68 15.494 19.6888 14.984 19.52 14.5201C19.3612 14.0925 19.2309 13.6549 19.13 13.2101C19.08 12.9901 19.04 12.7601 19.01 12.5301C18.8885 11.8257 18.5196 11.1879 17.9696 10.7314C17.4196 10.2748 16.7247 10.0297 16.01 10.0401H13.01C12.579 10.0361 12.1522 10.1249 11.7587 10.3006C11.3651 10.4764 11.0141 10.7348 10.7294 11.0584C10.4447 11.382 10.2331 11.7631 10.109 12.1758C9.98482 12.5885 9.95106 13.0232 10.01 13.4501C10.5427 17.6395 12.456 21.532 15.4476 24.5127C18.4393 27.4935 22.3387 29.3926 26.53 29.9101H26.91C27.6474 29.9112 28.3594 29.6406 28.91 29.1501C29.2263 28.8672 29.4791 28.5203 29.6514 28.1324C29.8238 27.7446 29.9119 27.3245 29.91 26.9001V23.9001C29.8977 23.2055 29.6448 22.5367 29.1943 22.0078C28.7439 21.4789 28.1238 21.1227 27.44 21.0001ZM27.94 27.0001C27.9398 27.1421 27.9094 27.2824 27.8508 27.4117C27.7921 27.5411 27.7066 27.6564 27.6 27.7501C27.4882 27.8466 27.3576 27.9187 27.2164 27.9617C27.0752 28.0048 26.9265 28.0178 26.78 28.0001C23.0349 27.5199 19.5562 25.8066 16.8927 23.1304C14.2292 20.4542 12.5324 16.9674 12.07 13.2201C12.0541 13.0736 12.068 12.9254 12.111 12.7845C12.1539 12.6436 12.225 12.5128 12.32 12.4001C12.4137 12.2934 12.529 12.208 12.6584 12.1493C12.7877 12.0907 12.928 12.0603 13.07 12.0601H16.07C16.3025 12.0549 16.5296 12.131 16.7121 12.2752C16.8946 12.4194 17.0212 12.6227 17.07 12.8501C17.11 13.1234 17.16 13.3934 17.22 13.6601C17.3355 14.1873 17.4892 14.7053 17.68 15.2101L16.28 15.8601C16.1603 15.915 16.0526 15.9931 15.9631 16.0897C15.8737 16.1864 15.8042 16.2997 15.7586 16.4233C15.7131 16.5469 15.6925 16.6782 15.6978 16.8098C15.7032 16.9414 15.7345 17.0707 15.79 17.1901C17.2292 20.2729 19.7072 22.7509 22.79 24.1901C23.0334 24.2901 23.3065 24.2901 23.55 24.1901C23.6747 24.1455 23.7893 24.0766 23.8871 23.9873C23.985 23.898 24.0641 23.7902 24.12 23.6701L24.74 22.2701C25.2569 22.455 25.7846 22.6086 26.32 22.7301C26.5866 22.7901 26.8566 22.8401 27.13 22.8801C27.3574 22.9289 27.5607 23.0554 27.7049 23.238C27.8491 23.4205 27.9252 23.6476 27.92 23.8801L27.94 27.0001Z"
                  fill="white"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#4D44B5" />
                <path
                  d="M28.0001 12H12.0001C11.2045 12 10.4414 12.3161 9.8788 12.8787C9.31619 13.4413 9.00012 14.2044 9.00012 15V25C9.00012 25.7956 9.31619 26.5587 9.8788 27.1213C10.4414 27.6839 11.2045 28 12.0001 28H28.0001C28.7958 28 29.5588 27.6839 30.1214 27.1213C30.6841 26.5587 31.0001 25.7956 31.0001 25V15C31.0001 14.2044 30.6841 13.4413 30.1214 12.8787C29.5588 12.3161 28.7958 12 28.0001 12ZM29.0001 24.75L24.1001 20.35L29.0001 16.92V24.75ZM11.0001 16.92L15.9001 20.35L11.0001 24.75V16.92ZM17.5801 21.53L19.4301 22.82C19.5975 22.9361 19.7964 22.9984 20.0001 22.9984C20.2039 22.9984 20.4027 22.9361 20.5701 22.82L22.4201 21.53L27.4201 26H12.6001L17.5801 21.53ZM12.0001 14H28.0001C28.1858 14.0015 28.3675 14.0547 28.5247 14.1536C28.6819 14.2525 28.8084 14.3932 28.8901 14.56L20.0001 20.78L11.1101 14.56C11.1918 14.3932 11.3184 14.2525 11.4756 14.1536C11.6328 14.0547 11.8144 14.0015 12.0001 14Z"
                  fill="white"
                />
              </svg>
            </IonCol>
          </IonRow>
        </div>
                ))}

           </div>

  );
};

export default Student;