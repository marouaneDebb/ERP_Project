
import {IonInput,IonRow,IonCol} from "@ionic/react"

function NewStudent(){
    return(
        <div>
            <div>

                <div className="bg-primary">
                    <div className=""> New Student</div>
                </div>
                <div>
                    <IonRow>
                        <IonCol>
                            <IonInput placeholder="photo"></IonInput>
                        </IonCol>
                        <IonCol>
                            <IonInput className="m-2" label="First Name" labelPlacement="floating" placeholder="enter the name" fill="outline" type="text"></IonInput>
                            <IonInput className="m-2" label="Last Name" labelPlacement="floating" placeholder="AA111111" fill="outline" type="text"></IonInput>
                            <IonInput className="m-2" label="Date of birth" labelPlacement="floating" fill="outline" type="date"></IonInput>
                            <IonInput className="m-2" label="Password" labelPlacement="floating" placeholder="Enter password" fill="outline" type="password"></IonInput>
                            <IonInput className="m-2" label="Password" labelPlacement="floating" placeholder="verify password" fill="outline" type="password"></IonInput>
                        </IonCol>
                    </IonRow>
                </div>
            </div>
        </div>
    )
}