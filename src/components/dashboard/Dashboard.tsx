import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { IonCol, IonRow, IonIcon, IonButton,IonInput} from '@ionic/react';
import {search, addCircle} from 'ionicons/icons';
import Notification_setting from '../notification_setting';
import SideMenu from '../sidemenu/sidemenu';
import ListWithPagination from '../page/pages';

interface Student {
    firstName: string;
    lastName: string;
    id:number;
    class: string;
    sold:number;
  }
  
function DashBoard(){
    const event=43;
    let parent=732;
    let student=967;
    let url="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702236437~exp=1702237037~hmac=44b4655423a2cb3bb4fa6f54d3828c164cc373a3d35fec1ad38416641b45421c"
    const studentData: Student[] = [{firstName:'youssef',lastName:'oudourouch',id:22301035,class:'2A',sold:58},
    {firstName:'younss',lastName:'JAMALDDIN',id:2230102,class:'2A',sold:654},
    {firstName:'ali',lastName:'LHRCHI',id:223010244,class:'2A',sold:959},
    {firstName:'brahim',lastName:'diroch',id:22301062,class:'3A',sold:654},
    {firstName:'youns',lastName:'JAMIN',id:223330102,class:'2A',sold:654},
    {firstName:'khadija',lastName:'ddaoudy',id:2234412,class:'2A',sold:654},
    {firstName:'brahim',lastName:'diroch',id:2231062,class:'3A',sold:654}
    ];

    return(
        <div className='dashboard row'>
            <SideMenu/>
            <div className='Midl col-lg-7'>
                <div className='container'>
                    <IonRow>
                        <h3 className='col-lg-9'>Dashboard</h3>
                        <div className='rounded col-lg-3'>
                            <input type='text' placeholder='&#xf002; Search here' className='search'/>
                        </div>
                    </IonRow>


                    <IonRow className='second_row rounded'>
                        <IonRow className='col-4'>
                            <svg className='col-5' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <p>Students</p>
                                <h4>{student}</h4>
                            </IonCol>
                        </IonRow>
                        <IonRow className="col-4">
                            <svg className='col-5' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <p>Parents</p>
                                <h4>{parent}</h4>
                            </IonCol>
                        </IonRow>
                        <IonRow className="col-4">
                            <svg className='col-5' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="50" rx="25" fill="#FCC43E"/>
                                <path d="M31.9447 17.1875H30.2086V16.3195C30.2086 16.0892 30.1172 15.8685 29.9544 15.7057C29.7916 15.5429 29.5708 15.4514 29.3405 15.4514C29.1103 15.4514 28.8895 15.5429 28.7267 15.7057C28.5639 15.8685 28.4725 16.0892 28.4725 16.3195V17.1875H25.8683V16.3195C25.8683 16.0892 25.7769 15.8685 25.6141 15.7057C25.4513 15.5429 25.2305 15.4514 25.0003 15.4514C24.77 15.4514 24.5493 15.5429 24.3865 15.7057C24.2237 15.8685 24.1322 16.0892 24.1322 16.3195V17.1875H21.528V16.3195C21.528 16.0892 21.4366 15.8685 21.2738 15.7057C21.111 15.5429 20.8902 15.4514 20.66 15.4514C20.4298 15.4514 20.209 15.5429 20.0462 15.7057C19.8834 15.8685 19.7919 16.0892 19.7919 16.3195V17.1875H18.0558C17.3652 17.1875 16.7028 17.4619 16.2144 17.9503C15.726 18.4386 15.4517 19.101 15.4517 19.7917V31.9445C15.4517 32.6351 15.726 33.2975 16.2144 33.7859C16.7028 34.2743 17.3652 34.5486 18.0558 34.5486H31.9447C32.6354 34.5486 33.2978 34.2743 33.7861 33.7859C34.2745 33.2975 34.5489 32.6351 34.5489 31.9445V19.7917C34.5489 19.101 34.2745 18.4386 33.7861 17.9503C33.2978 17.4619 32.6354 17.1875 31.9447 17.1875ZM17.1878 19.7917C17.1878 19.5615 17.2792 19.3407 17.442 19.1779C17.6048 19.0151 17.8256 18.9236 18.0558 18.9236H19.7919V19.7917C19.7919 20.0219 19.8834 20.2427 20.0462 20.4055C20.209 20.5683 20.4298 20.6597 20.66 20.6597C20.8902 20.6597 21.111 20.5683 21.2738 20.4055C21.4366 20.2427 21.528 20.0219 21.528 19.7917V18.9236H24.1322V19.7917C24.1322 20.0219 24.2237 20.2427 24.3865 20.4055C24.5493 20.5683 24.77 20.6597 25.0003 20.6597C25.2305 20.6597 25.4513 20.5683 25.6141 20.4055C25.7769 20.2427 25.8683 20.0219 25.8683 19.7917V18.9236H28.4725V19.7917C28.4725 20.0219 28.5639 20.2427 28.7267 20.4055C28.8895 20.5683 29.1103 20.6597 29.3405 20.6597C29.5708 20.6597 29.7916 20.5683 29.9544 20.4055C30.1172 20.2427 30.2086 20.0219 30.2086 19.7917V18.9236H31.9447C32.1749 18.9236 32.3957 19.0151 32.5585 19.1779C32.7213 19.3407 32.8128 19.5615 32.8128 19.7917V22.3959H17.1878V19.7917ZM32.8128 31.9445C32.8128 32.1747 32.7213 32.3955 32.5585 32.5583C32.3957 32.7211 32.1749 32.8125 31.9447 32.8125H18.0558C17.8256 32.8125 17.6048 32.7211 17.442 32.5583C17.2792 32.3955 17.1878 32.1747 17.1878 31.9445V24.132H32.8128V31.9445Z" fill="white"/>
                            </svg>

                            <IonCol>
                                <p>Events</p>
                                <h4>{event}</h4>
                            </IonCol>
                        </IonRow>
                    </IonRow>
                    
                    <div className='third_row rounded'>
                        <h5>Unpaid Student Intuition</h5>
                        <ListWithPagination itemsPerPage={3} data={studentData} />
                    </div>
                </div>
            </div>
            <div className='Right col-lg-3 container'>
                <Notification_setting/>
                <div>
                    <IonRow className='recent_title'>
                        <IonCol className='col-lg-9'>
                            <h6> Recent Students</h6>
                            <p className='subTitle'>you have {student} students</p>
                        </IonCol>
                        <IonCol className='col-lg-3'>
                            <IonIcon className='Add' icon={addCircle}></IonIcon>
                        </IonCol>
                    </IonRow>
                    <div className='recent'>{studentData.slice(0, 3).map((item, index) => (
                                    <IonRow key={index}>
                                        <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702236437~exp=1702237037~hmac=44b4655423a2cb3bb4fa6f54d3828c164cc373a3d35fec1ad38416641b45421c" alt="logo" />
                                        
                                        <IonCol>
                                            <p>{item.firstName} {item.lastName}</p>
                                            <p className='subTitle'>{item.class}</p>
                                        </IonCol>
                                    </IonRow>))}
                    </div>
                    <button className='btn'> View More</button>

                    <IonRow className='recent_title'>
                        <IonCol className='col-lg-9'>
                            <h6> Recent Parents</h6>
                            <p className='subTitle'>you have {parent} parents</p>
                        </IonCol>
                        <IonCol className='col-lg-3'>
                            <IonIcon className='Add' icon={addCircle}></IonIcon>
                        </IonCol>
                    </IonRow>
                    <div className='recent'>{studentData.slice(0,3).map((item, index) => (
                                    <IonRow className='pt-4' key={index}>
                                        <img src={url} alt="logo" />
                                        <IonCol className='pt-2'>
                                            <p>{item.firstName} {item.lastName}</p>
                                        </IonCol>
                                    </IonRow>))}
                    </div>
                    <button className='btn'> View More</button>
                </div>
            
            </div>

        </div>

    )
}
export default DashBoard;