import React from 'react';
import SideMenu from "../sidemenu/sidemenu";
import Notification_setting from "../notification_setting";
import {IonCol, IonRow, IonSearchbar} from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './finance.css'
import ListWithPagination from "../page/pages";
import ListComponent from "../dashboard/ListComponent";
import ShowExpense from "../schoolExpense/expense";

interface Student {
    firstName: string;
    lastName: string;
    id:number;
    class: string;
    sold:number;
  }
interface Expense {
    id:number;
    date:string;
    timing: string;
    sold:number;
    status:string;
  }

function Finance(){
    let percentParent=-0.2;
    let percentStudent=2;
    let percentExpense=13;
    const studentData: Student[] = [{firstName:'youssef',lastName:'oudourouch',id:22301035,class:'2A',sold:58},
    {firstName:'younss',lastName:'JAMALDDIN',id:2230102,class:'2A',sold:654},
    {firstName:'ali',lastName:'LHRCHI',id:223010244,class:'2A',sold:959},
    {firstName:'brahim',lastName:'diroch',id:22301062,class:'3A',sold:654},
    {firstName:'youns',lastName:'JAMIN',id:223330102,class:'2A',sold:654},
    {firstName:'khadija',lastName:'ddaoudy',id:2234412,class:'2A',sold:654},
    {firstName:'brahim',lastName:'diroch',id:2231062,class:'3A',sold:654}
    ];

    const expenseData: Expense[]=[{id:7372282,date:"02/12/2023",timing:"12:00",sold:3993.34,status:"Pending"},
    {id:7393282,date:"02/12/2023",timing:"12:00",sold:3993.34,status:"Canceled"},
    {id:4372282,date:"02/12/2023",timing:"12:00",sold:3993.34,status:"Pending"},
    {id:7002282,date:"02/12/2023",timing:"12:00",sold:3993.34,status:"Complete"},
    {id:73744282,date:"02/12/2023",timing:"12:00",sold:3993.34,status:"Complete"}];

    const getColor = (value:number) => {
        return value > 0 ? 'green' : 'red';
      };

    return(
        <div className="finance_bg">
            <div className="row">
                <SideMenu active_Row={"row_14"}/>
                <IonCol className="container col-10">
                    <IonRow className="finance_head ">
                        <IonCol><h3>Finance</h3></IonCol>
                        <IonCol><IonSearchbar className="search_bar"></IonSearchbar></IonCol>
                        <IonCol className='col-3'><Notification_setting/></IonCol>
                    </IonRow>
                    <IonRow className='rounded'>
                        <IonRow className='Elements col-3'>
                            <svg className='col-5 mt-3' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#4D44B5"/>
                                <g clip-path="url(#clip0_479_1268)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5618 38.0209H17.1877C15.7493 38.0209 14.5835 36.8551 14.5835 35.4167V28.185C14.5835 26.9263 15.4837 25.8482 16.7215 25.6233C18.5566 25.2891 21.7206 24.7136 23.5106 24.389C24.4958 24.2093 25.5045 24.2093 26.4897 24.389C28.2797 24.7136 31.4437 25.2891 33.2788 25.6233C34.5167 25.8482 35.4168 26.9263 35.4168 28.185C35.4168 30.0782 35.4168 33.3907 35.4168 35.4167C35.4168 36.8551 34.251 38.0209 32.8127 38.0209H23.5618ZM31.7953 27.1181L31.7988 27.1225C31.9507 27.3499 31.9863 27.6355 31.8951 27.8933L31.2823 29.6294C31.2024 29.856 31.0314 30.04 30.8109 30.1364L29.6581 30.639L30.1165 31.5565C30.245 31.8126 30.238 32.1155 30.0991 32.3664L27.922 36.2848H32.8127C33.2918 36.2848 33.6807 35.8959 33.6807 35.4167C33.6807 33.3907 33.6807 30.0782 33.6807 28.185C33.6807 27.7657 33.3804 27.4063 32.968 27.3308L31.7953 27.1181ZM29.4212 26.6858L26.179 26.0964C25.3995 25.9549 24.6009 25.9549 23.8213 26.0964L20.5792 26.6858L19.8864 27.7249L20.2293 28.6954L21.8752 29.4124C22.093 29.5079 22.2623 29.6884 22.3439 29.9124C22.4255 30.1364 22.4108 30.3838 22.304 30.5964L21.6408 31.9228L24.0644 36.2848H25.9359L28.3595 31.9228L27.6963 30.5964C27.5896 30.3838 27.5748 30.1364 27.6564 29.9124C27.738 29.6884 27.9073 29.5079 28.1252 29.4124L29.771 28.6954L30.1139 27.7249L29.4212 26.6858ZM18.205 27.1181L17.0323 27.3308C16.62 27.4063 16.3196 27.7657 16.3196 28.185V35.4167C16.3196 35.8959 16.7085 36.2848 17.1877 36.2848H22.0783L19.9012 32.3664C19.7623 32.1155 19.7554 31.8126 19.8838 31.5565L20.3422 30.639L19.1894 30.1364C18.9689 30.04 18.7979 29.856 18.718 29.6294L18.1052 27.8933C18.0141 27.6355 18.0496 27.3499 18.2016 27.1225L18.205 27.1181ZM31.0766 31.9445V33.6806C31.0766 34.1598 31.4654 34.5487 31.9446 34.5487C32.4238 34.5487 32.8127 34.1598 32.8127 33.6806V31.9445C32.8127 31.4654 32.4238 31.0765 31.9446 31.0765C31.4654 31.0765 31.0766 31.4654 31.0766 31.9445ZM25.0002 11.9792C21.8864 11.9792 19.3578 14.5079 19.3578 17.6216C19.3578 20.7353 21.8864 23.264 25.0002 23.264C28.1139 23.264 30.6425 20.7353 30.6425 17.6216C30.6425 14.5079 28.1139 11.9792 25.0002 11.9792ZM25.0002 13.7154C27.1564 13.7154 28.9064 15.4654 28.9064 17.6216C28.9064 19.7779 27.1564 21.5279 25.0002 21.5279C22.8439 21.5279 21.0939 19.7779 21.0939 17.6216C21.0939 15.4654 22.8439 13.7154 25.0002 13.7154Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_479_1268">
                                <rect width="27.7778" height="27.7778" fill="white" transform="translate(11.1113 11.1111)"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <IonCol>
                                <p className="subTitle">Total students</p>
                                <h4>890</h4>
                                <p className="subTitle"><span style={{ color: getColor(percentStudent) }}>{percentStudent}%</span> than last month</p>
                            </IonCol>
                        </IonRow>
                        <IonRow className="Elements col-3">
                            <svg className='col-5 mt-3' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#FB7D5B"/>
                                <g clip-path="url(#clip0_479_1277)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2178 35.4167C15.2178 36.8551 16.4343 38.0209 17.9352 38.0209H34.2395C35.7404 38.0209 36.9569 36.8551 36.9569 35.4167C36.9569 33.3907 36.9569 30.0782 36.9569 28.185C36.9569 26.9263 36.0176 25.8482 34.7259 25.6233C32.8111 25.2891 29.5094 24.7136 27.6417 24.389C26.6136 24.2093 25.5611 24.2093 24.533 24.389C22.6652 24.7136 19.3636 25.2891 17.4487 25.6233C16.1571 25.8482 15.2178 26.9263 15.2178 28.185V35.4167ZM28.1779 26.2466L29.5375 31.2006C29.716 31.8508 29.4768 32.5409 28.9279 32.961C28.4642 33.3152 27.7332 33.8742 27.2259 34.2631C26.5602 34.7718 25.6145 34.7718 24.9487 34.2631C24.4415 33.8742 23.7105 33.3152 23.2468 32.961C22.6978 32.5409 22.4587 31.8508 22.6372 31.2006L23.9968 26.2466L17.773 27.3308C17.3428 27.4063 17.0294 27.7657 17.0294 28.185V35.4167C17.0294 35.8959 17.4352 36.2848 17.9352 36.2848C21.725 36.2848 30.4497 36.2848 34.2395 36.2848C34.7395 36.2848 35.1453 35.8959 35.1453 35.4167C35.1453 33.3907 35.1453 30.0782 35.1453 28.185C35.1453 27.7657 34.8319 27.4063 34.4017 27.3308L28.1779 26.2466ZM26.235 25.9923C26.1363 25.9897 26.0384 25.9897 25.9397 25.9923L24.3962 31.619L26.0792 32.9055C26.0837 32.9098 26.091 32.9098 26.0955 32.9055L27.7785 31.619L26.235 25.9923ZM26.0873 11.9792C22.8382 11.9792 20.1997 14.5079 20.1997 17.6216C20.1997 20.7353 22.8382 23.264 26.0873 23.264C29.3364 23.264 31.975 20.7353 31.975 17.6216C31.975 14.5079 29.3364 11.9792 26.0873 11.9792ZM26.0873 13.7154C28.3373 13.7154 30.1634 15.4654 30.1634 17.6216C30.1634 19.7779 28.3373 21.5279 26.0873 21.5279C23.8373 21.5279 22.0113 19.7779 22.0113 17.6216C22.0113 15.4654 23.8373 13.7154 26.0873 13.7154Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_479_1277">
                                <rect width="28.9855" height="27.7778" fill="white" transform="translate(11.5947 11.1111)"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <IonCol>
                                <p className="subTitle">Total Parents</p>
                                <h4>345</h4>
                                <p className="subTitle"><span style={{ color: getColor(percentParent) }}>{percentParent}%</span> than last month</p>

                            </IonCol>
                        </IonRow>
                        <IonRow className="Elements col-5">
                            <svg className="col-3 mt-3" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#FCC43E"/>
                                <g clip-path="url(#clip0_457_1941)">
                                <path d="M36.2751 26.2802C34.7189 25.7163 32.9925 25.8416 31.5328 26.6232L29.1533 27.6936C28.9611 26.5977 28.1194 25.7741 27.0805 25.7425C27.0744 25.7423 23.5127 25.7021 23.5127 25.7021C20.6619 24.9201 18.8096 25.9249 17.7529 26.9152C17.5368 27.1177 17.3468 27.3262 17.1795 27.5319C16.8944 27.2248 16.3911 27.1428 16.024 27.3446L12.7909 29.1218C12.3716 29.3523 12.1891 29.8581 12.365 30.3026L15.5247 38.29C15.7323 38.8148 16.3703 39.0468 16.8682 38.7731L20.1013 36.9959C20.4043 36.8293 20.5828 36.5189 20.5926 36.1918H25.4179C26.205 36.1918 26.9821 35.9851 27.6651 35.5939C27.6651 35.5939 36.7404 30.3881 36.7916 30.3416C38.0625 29.1854 38.1017 26.942 36.2751 26.2802C37.0038 26.5442 34.7189 25.7163 36.2751 26.2802ZM16.8971 36.5889L14.442 30.3825L15.9949 29.5289L18.45 35.7353L16.8971 36.5889ZM35.5772 28.8731L26.7183 33.9463C26.323 34.1727 25.8732 34.2924 25.4178 34.2924H19.9247L18.0803 29.6298C18.2383 29.3079 18.5495 28.7737 19.0549 28.3001C20.09 27.3302 21.4543 27.0819 23.1102 27.5624C23.193 27.5864 23.2788 27.599 23.3649 27.6L27.0261 27.6412C27.1196 27.6493 27.2922 27.8571 27.2922 28.1722C27.2922 28.4965 27.114 28.7033 27.0208 28.7033H23.4235V30.6027H27.0208C27.4664 30.6027 27.8811 30.452 28.2263 30.1938L32.3455 28.3409C32.3674 28.3311 32.3887 28.3205 32.4097 28.309C33.3979 27.7718 34.5702 27.683 35.626 28.0656C36.0438 28.2171 35.742 28.7058 35.5772 28.8731ZM29.8608 24.7972C26.0879 24.7972 23.0183 21.7274 23.0183 17.9541C23.0183 14.1809 26.0878 11.1111 29.8608 11.1111C33.6339 11.1111 36.7034 14.1809 36.7034 17.9541C36.7034 21.7274 33.6338 24.7972 29.8608 24.7972ZM29.8608 13.0105C27.1369 13.0105 24.9208 15.2282 24.9208 17.9541C24.9208 20.68 27.137 22.8976 29.8608 22.8976C32.5848 22.8976 34.8009 20.6799 34.8009 17.9541C34.8009 15.2282 32.5848 13.0105 29.8608 13.0105Z" fill="white"/>
                                <path d="M30.3027 17.18C29.5463 16.8693 29.4877 16.7358 29.4877 16.5811C29.4877 16.4823 29.5368 16.2525 29.9912 16.2525C30.4068 16.2525 30.9248 16.4858 31.29 16.7263L31.7982 15.3944C31.4354 15.1634 30.9945 14.965 30.5823 14.9016V14.0354H29.2275V14.9858C28.4226 15.2395 27.9267 15.8829 27.9267 16.6838C27.9267 17.7446 28.7753 18.2182 29.6042 18.541C30.2665 18.8075 30.322 19.0114 30.322 19.1817C30.322 19.4436 30.0806 19.6129 29.7071 19.6129C29.2199 19.6129 28.6535 19.3319 28.257 19.0244L27.7681 20.3777C28.1724 20.6912 28.6405 20.8981 29.1671 20.9753V21.8728H30.5304V20.8959C31.3604 20.6316 31.8916 19.9439 31.8916 19.1218C31.8916 17.9709 31.0425 17.4795 30.3027 17.18Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_457_1941">
                                <rect width="27.7778" height="27.7778" fill="white" transform="translate(11.1111 11.1111)"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <IonCol>
                                <p className="subTitle">School balance</p>
                                <h4>$1245.650</h4>
                                <p className="subTitle"><span style={{ color: getColor(percentExpense) }}>{percentExpense}%</span> than last month</p>
                            </IonCol>
                            <svg width="174" height="68" viewBox="0 0 174 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.2852 25.7289C17.6011 26.875 12.5348 45.2014 2 45.2014V68H17.9882H171.983L172 21.3644C161.342 24.7809 154.585 -0.190208 143.715 2.15584C131.764 4.73524 129.74 33.7865 115.43 33.7865C104.157 33.7865 98.2906 22.7554 87.1443 24.7217C74.0672 27.0286 71.7426 56.8038 58.5705 58.1989C46.963 59.4282 41.9057 24.6789 30.2852 25.7289Z" fill="url(#paint0_linear_457_1933)" fill-opacity="0.25"/>
                                <path d="M2 44.906C12.5348 44.906 17.6011 26.7049 30.2852 25.5666C41.9057 24.5238 46.963 59.0354 58.5705 57.8145C71.7426 56.429 74.0672 26.8575 87.1443 24.5663C98.2906 22.6135 104.157 33.5691 115.43 33.5691C129.74 33.5691 131.764 4.71654 143.715 2.15477C154.585 -0.175229 161.342 24.6251 172 21.2319" stroke="#4C50BC" stroke-width="4" stroke-linecap="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_457_1933" x1="87" y1="2" x2="87" y2="68" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4C50BC"/>
                                <stop offset="1" stop-color="#7D7AFB" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </IonRow>
                    </IonRow>
                    <IonRow className="container">
                        <div className='third_row rounded col-7'>
                            <h5>Unpaid Student Intuition</h5>
                            <ListWithPagination<Student>
                                itemsPerPage={4}
                                data={studentData}
                                renderListItem={(student1) => (
                                    <ListComponent key={student1.id} data={student1} />
                                )}
                                />
                        </div>
                        <IonCol className='third_row third_rw2 rounded'>
                            <h5>School Expense</h5>
                            <ListWithPagination<Expense>
                            itemsPerPage={4}
                            data={expenseData}
                            renderListItem={(expense) => (
                                <ShowExpense key={expense.id} item={expense} />
                            )}
                            />
                        </IonCol>
                    </IonRow>
                </IonCol>
            </div>
        </div>
    )
}
export default Finance;