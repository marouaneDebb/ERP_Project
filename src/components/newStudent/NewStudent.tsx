
import {IonInput,IonRow, IonLabel, IonSearchbar} from "@ionic/react"
import Notification_setting from "../notification_setting";
import SideMenu from "../sidemenu/sidemenu";
import './newStudent.css'
import NewService from "../service/NewService";
import NewDiscount from "../Discount/newDiscount";

function NewStudent(){
    return(
        <div className="ljadid row">
            <SideMenu active_Row={"row_11"} />
            <div className="col-10 midle1 p-3">
                <div className="service_title row">
                    <div className="service_title_text col-3">Student</div>
                    <div className="Service_seach col-6">
                        <IonSearchbar className="Service_search_bar"></IonSearchbar>
                    </div>
                    <div className="service_title_left col-3">
                        <Notification_setting />
                    </div>
                </div>
                <NewDiscount/>
                <NewService/>
                <div className="formulaire">
                    <div className="newAccount">
                        <h5> New Student</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            <div className="col-2 mx-2">
                                <g>photo</g>
                                <IonInput className="photo1" ></IonInput>
                            </div>
                            <div className="col-5 mx-3">
                                <div>
                                    <IonLabel>First Name*</IonLabel>
                                    <IonInput className="my-2" placeholder="enter the name" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Last Name*</IonLabel>
                                    <IonInput className="my-2" placeholder="AA111111" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Address*</IonLabel>
                                    <IonInput className="my-2" placeholder="Tinghir, Imider Ait Said Oudaoud" fill="outline" type="text"/>
                                </div>
                            </div>
                            <div className="col-4 mx-3">
                                <IonLabel>Date of birth*</IonLabel>
                                <IonInput className="my-2" fill="outline" type="date"></IonInput>
                                <IonLabel>Class*</IonLabel>
                                <IonInput className="my-2" fill="outline" type="text"></IonInput>
                                <IonLabel>phone*</IonLabel>
                                <IonInput className="my-2" fill="outline" type="tel"></IonInput>
                            </div>
                        </IonRow>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default NewStudent;