import SideMenu from "../sidemenu/sidemenu";
import Notification_setting from "../notification_setting";
import {IonCol, IonRow} from '@ionic/react';
import './finance.css'

function Finance(){
    return(
        <div className="finance_bg">
            <IonRow>
            <SideMenu/>
                <IonRow className="finance_head">
                    <IonCol> Finance</IonCol>
                    <IonCol> <input type="text"/></IonCol>
                    <Notification_setting/>
                </IonRow>
                <IonRow className="statistique">
                    <IonCol>

                    </IonCol>
                    <IonCol>

                    </IonCol>
                    <IonCol>

                    </IonCol>

                </IonRow>

            </IonRow>
        </div>
    )
}
export default Finance;