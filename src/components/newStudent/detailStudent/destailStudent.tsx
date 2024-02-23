import { IonCol, IonFab, IonFabButton, IonIcon, IonRow } from "@ionic/react";
import ServiceItem from "../../service/ServiceItems/serviceItem";
import StudentType from "../../../Models/studentType";
import { add } from "ionicons/icons";
import { useEffect } from "react";


interface props{
    student:StudentType;
}

const StudentDetails: React.FC<props>=({student})=>{  
    
    
    const items=[
        {
          name: "Product 1",
          start: new Date("2024-02-12"),
          description: "Description of Product 1",
          preodicity: 1,
          price: 100,
          type: "Optional",
          discount: []
        },
        {
          name: "Product 2",
          start: new Date("2024-02-13"),
          description: "Description of Product 2",
          preodicity: 2,
          price: 200,
          type: "Optional",
          discount: []
        },
        {
          name: "Product 3",
          start: new Date("2024-01-12"),
          description: "Description of Product 3",
          preodicity: 1,
          price: 100,
          type: "Obligatory",
          discount: []
        },
        {
          name: "Product 4",
          start: new Date("2024-01-13"),
          description: "Description of Product 4",
          preodicity: 2,
          price: 200,
          type: "Optional",
          discount: []
        },
      ];

   return(
      <div className="medSection1">
        <div className="parentInfo ">
                <IonRow className="infoHead">
                    <div className="col-6">
                        <div className="image"></div>
                    </div>
                    <svg className="col-5" width="400" height="100" viewBox="0 0 423 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="59.7683" width="247.592" height="265.718" rx="123.796" stroke="#FB7D5B" stroke-width="16"/>
                        <rect x="167.011" y="8.66138" width="247.592" height="265.718" rx="123.796" stroke="#FCC43E" stroke-width="16"/>
                    </svg>
                </IonRow>
                <IonRow className="mx-4">
                    <h5> {student.firstName} {student.lastName}</h5>
                </IonRow>
                <p className="subTitile mx-4"> Student</p>
                <IonRow className="m-4">
                    <IonCol>
                        <svg className="mx-2" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.326172" width="40" height="40" rx="20" fill="#FB7D5B"/>
                            <path d="M20 10.3262C17.8783 10.3262 15.8434 11.169 14.3431 12.6693C12.8429 14.1696 12 16.2044 12 18.3262C12 23.7262 19.05 29.8262 19.35 30.0862C19.5311 30.2411 19.7616 30.3262 20 30.3262C20.2384 30.3262 20.4689 30.2411 20.65 30.0862C21 29.8262 28 23.7262 28 18.3262C28 16.2044 27.1571 14.1696 25.6569 12.6693C24.1566 11.169 22.1217 10.3262 20 10.3262ZM20 27.9762C17.87 25.9762 14 21.6662 14 18.3262C14 16.7349 14.6321 15.2087 15.7574 14.0835C16.8826 12.9583 18.4087 12.3262 20 12.3262C21.5913 12.3262 23.1174 12.9583 24.2426 14.0835C25.3679 15.2087 26 16.7349 26 18.3262C26 21.6662 22.13 25.9862 20 27.9762ZM20 14.3262C19.2089 14.3262 18.4355 14.5608 17.7777 15.0003C17.1199 15.4398 16.6072 16.0645 16.3045 16.7954C16.0017 17.5263 15.9225 18.3306 16.0769 19.1065C16.2312 19.8825 16.6122 20.5952 17.1716 21.1546C17.731 21.714 18.4437 22.095 19.2196 22.2493C19.9956 22.4037 20.7998 22.3244 21.5307 22.0217C22.2616 21.7189 22.8864 21.2062 23.3259 20.5485C23.7654 19.8907 24 19.1173 24 18.3262C24 17.2653 23.5786 16.2479 22.8284 15.4977C22.0783 14.7476 21.0609 14.3262 20 14.3262ZM20 20.3262C19.6044 20.3262 19.2178 20.2089 18.8889 19.9891C18.56 19.7693 18.3036 19.457 18.1522 19.0915C18.0009 18.7261 17.9613 18.324 18.0384 17.936C18.1156 17.548 18.3061 17.1917 18.5858 16.912C18.8655 16.6323 19.2219 16.4418 19.6098 16.3646C19.9978 16.2874 20.3999 16.327 20.7654 16.4784C21.1308 16.6298 21.4432 16.8861 21.6629 17.215C21.8827 17.5439 22 17.9306 22 18.3262C22 18.8566 21.7893 19.3653 21.4142 19.7404C21.0391 20.1155 20.5304 20.3262 20 20.3262Z" fill="white"/>
                        </svg>
                        {student.address}
                    </IonCol>
                    <IonCol>
                        <svg className="mx-2" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.326172" width="40" height="40" rx="20" fill="#FB7D5B"/>
                            <path d="M27.4401 21.3263C27.2201 21.3263 26.9901 21.2563 26.7701 21.2063C26.3246 21.1081 25.8868 20.9778 25.4601 20.8163C24.9962 20.6475 24.4862 20.6563 24.0284 20.8409C23.5706 21.0255 23.1972 21.3729 22.9801 21.8163L22.7601 22.2663C21.7861 21.7245 20.8911 21.0515 20.1001 20.2663C19.3149 19.4753 18.6419 18.5803 18.1001 17.6063L18.5201 17.3263C18.9635 17.1092 19.3109 16.7358 19.4955 16.278C19.6801 15.8201 19.6889 15.3102 19.5201 14.8463C19.3613 14.4187 19.231 13.9811 19.1301 13.5363C19.0801 13.3163 19.0401 13.0863 19.0101 12.8563C18.8887 12.1519 18.5197 11.514 17.9697 11.0575C17.4197 10.601 16.7248 10.3559 16.0101 10.3663H13.0101C12.5791 10.3622 12.1524 10.4511 11.7588 10.6268C11.3653 10.8025 11.0142 11.061 10.7295 11.3846C10.4449 11.7082 10.2332 12.0893 10.1091 12.502C9.98494 12.9147 9.95118 13.3493 10.0101 13.7763C10.5428 17.9657 12.4561 21.8582 15.4478 24.8389C18.4394 27.8197 22.3388 29.7188 26.5301 30.2363H26.9101C27.6475 30.2374 28.3595 29.9668 28.9101 29.4763C29.2265 29.1933 29.4792 28.8465 29.6516 28.4586C29.8239 28.0707 29.9121 27.6507 29.9101 27.2263V24.2263C29.8979 23.5317 29.6449 22.8628 29.1944 22.334C28.744 21.8051 28.1239 21.4489 27.4401 21.3263ZM27.9401 27.3263C27.9399 27.4683 27.9095 27.6086 27.8509 27.7379C27.7923 27.8672 27.7068 27.9826 27.6001 28.0763C27.4884 28.1728 27.3577 28.2448 27.2165 28.2879C27.0753 28.3309 26.9267 28.344 26.7801 28.3263C23.035 27.8461 19.5563 26.1328 16.8928 23.4566C14.2293 20.7804 12.5325 17.2936 12.0701 13.5463C12.0542 13.3998 12.0681 13.2516 12.1111 13.1107C12.1541 12.9697 12.2252 12.839 12.3201 12.7263C12.4138 12.6196 12.5292 12.5341 12.6585 12.4755C12.7878 12.4169 12.9281 12.3865 13.0701 12.3863H16.0701C16.3026 12.3811 16.5297 12.4572 16.7122 12.6014C16.8948 12.7455 17.0213 12.9489 17.0701 13.1763C17.1101 13.4496 17.1601 13.7196 17.2201 13.9863C17.3356 14.5134 17.4894 15.0315 17.6801 15.5363L16.2801 16.1863C16.1604 16.2412 16.0527 16.3192 15.9633 16.4159C15.8738 16.5125 15.8043 16.6259 15.7588 16.7495C15.7132 16.8731 15.6926 17.0044 15.6979 17.136C15.7033 17.2676 15.7346 17.3968 15.7901 17.5163C17.2293 20.599 19.7073 23.0771 22.7901 24.5163C23.0336 24.6163 23.3066 24.6163 23.5501 24.5163C23.6748 24.4717 23.7894 24.4027 23.8873 24.3135C23.9851 24.2242 24.0643 24.1164 24.1201 23.9963L24.7401 22.5963C25.2571 22.7812 25.7847 22.9348 26.3201 23.0563C26.5868 23.1163 26.8568 23.1663 27.1301 23.2063C27.3575 23.2551 27.5608 23.3816 27.705 23.5641C27.8492 23.7467 27.9253 23.9737 27.9201 24.2063L27.9401 27.3263Z" fill="white"/>
                        </svg>
                        {student.phone}
                    </IonCol>
                    <IonCol>
                        <svg className="mx-2" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.326172" width="40" height="40" rx="20" fill="#FB7D5B"/>
                            <path d="M27 12.3262H13C12.2044 12.3262 11.4413 12.6422 10.8787 13.2049C10.3161 13.7675 10 14.5305 10 15.3262V25.3262C10 26.1218 10.3161 26.8849 10.8787 27.4475C11.4413 28.0101 12.2044 28.3262 13 28.3262H27C27.7956 28.3262 28.5587 28.0101 29.1213 27.4475C29.6839 26.8849 30 26.1218 30 25.3262V15.3262C30 14.5305 29.6839 13.7675 29.1213 13.2049C28.5587 12.6422 27.7956 12.3262 27 12.3262ZM26.427 14.3262L20.6 19.1262C20.4335 19.2529 20.2312 19.3238 20.022 19.3288C19.8129 19.3338 19.6074 19.2727 19.435 19.1542L13.573 14.3262H26.427ZM27 26.3262H13C12.7348 26.3262 12.4804 26.2208 12.2929 26.0333C12.1054 25.8457 12 25.5914 12 25.3262V15.6262L18.2 20.7262C18.7159 21.1125 19.3435 21.3206 19.988 21.3192C20.6551 21.3182 21.3037 21.1002 21.836 20.6982L28 15.6262V25.3262C28 25.5914 27.8946 25.8457 27.7071 26.0333C27.5196 26.2208 27.2652 26.3262 27 26.3262Z" fill="white"/>
                        </svg>
                        {student.classs} Year
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <h5 className=" m-4">Services</h5>
                    </IonCol>
                    <IonCol className="button-container">
                        <IonFab >
                            <IonFabButton className="newServiceButton" href="/ERP_Project/student/asignSrevice" >
                                <IonIcon icon={add}></IonIcon>
                            </IonFabButton>
                        </IonFab>
                    </IonCol>
                </IonRow>
                <div className="parent-container mx-4">
                    {student.etatServices.map((etat) =>(
                        
                            <ServiceItem  item={etat.service} />
                        
                    ))}
                </div>
        </div>

    </div>
)
}
export default StudentDetails;