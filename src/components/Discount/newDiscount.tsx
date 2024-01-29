import {IonInput,IonRow, IonLabel, IonSearchbar, IonTextarea, IonText, IonAlert, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonButton, IonIcon} from "@ionic/react"
import { add } from "ionicons/icons";

function NewDiscount(){
    return(    
    
    <div className="formulaire mx-4">
                    <div className="newAccount">
                        <h5> New Discount</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            <div className="col-5 mx-3">
                                <div>
                                    <IonLabel>Discount Name*</IonLabel>
                                    <IonInput placeholder="enter the name" className="my-2" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Condition*</IonLabel>
                                    <IonInput  fill="outline" className="my-2" type="text"></IonInput>
                                </div>
                                <IonLabel>Description<IonText color="danger">*</IonText></IonLabel>
                                <IonTextarea fill="outline" className="my-2"></IonTextarea>
                               
                            </div>
                            <div className="col-5 mx-3">
                                <IonLabel>Valid date*</IonLabel>
                                <IonInput fill="outline" type="date" className="my-2" value="1" required></IonInput>
                                <IonLabel>Percentage(%)*</IonLabel>
                                <IonInput placeholder="0" className="my-2" fill="outline" type="number"></IonInput>
                                
                            </div>
                        </IonRow>
                        <div className="button-container">
                            <IonButton shape="round" className="text_1">
                                Save
                            </IonButton>
                        </div>
                    </div>
                </div>
    )
    }
export default NewDiscount;