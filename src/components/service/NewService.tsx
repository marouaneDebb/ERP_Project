import {IonInput,IonRow, IonLabel, IonSearchbar, IonTextarea, IonText, IonAlert, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonButton, IonIcon} from "@ionic/react"
import { add } from "ionicons/icons";
import { useState } from "react";
import './NewService.css'
import NewDiscount from "../Discount/newDiscount";


function NewService(){
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const[discount, setDiscount]=useState(false);

    const newDiscount=()=>{
        setDiscount(!discount);
      }
    return(    
    <div className="formsDis">
    <div className="formulaire m-4">
                    <div className="newAccount">
                        <h5> New Service</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            <div className="col-5 mx-3">
                                <div>
                                    <IonLabel>Service Name*</IonLabel>
                                    <IonInput placeholder="enter the name" className="my-2" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Start*</IonLabel>
                                    <IonInput  fill="outline" className="my-2" type="date"></IonInput>
                                </div>
                                <IonLabel>Description<IonText color="danger">*</IonText></IonLabel>
                                <IonTextarea fill="outline" className="my-2"></IonTextarea>
                                <IonLabel>Discount</IonLabel>
                                <IonSelect fill="outline" placeholder="choose a discount" value={selectedOption} onIonChange={(e) => setSelectedOption(e.detail.value)} multiple={true}>
                                    <IonSelectOption value="option1">Option 1</IonSelectOption>
                                    <IonSelectOption value="option2">Option 2</IonSelectOption>
                                    <IonSelectOption value="option3">Option 3</IonSelectOption>
                                </IonSelect>
                            </div>
                            <div className="col-5 mx-3">
                                <IonLabel>Service periodicity(month)*</IonLabel>
                                <IonInput fill="outline" type="number" className="my-2" value="1" required></IonInput>
                                <IonLabel>Price(DH)*</IonLabel>
                                <IonInput placeholder="1000" className="my-2" fill="outline" type="text"></IonInput>
                                <IonLabel >Type*</IonLabel>
                                <div className="tipe">
                                    <IonRadioGroup className="my-2">
                                        <IonRadio value='Obligatory' className="col-4 mx-5">Obligatory</IonRadio>
                                        <IonRadio value='Optional' className="col-4">Optional</IonRadio>
                                    </IonRadioGroup>
                                </div>
                                <IonButton shape="round" className="text_2 mt-5" onClick={newDiscount}>
                                    <IonIcon slot="start" icon={add}></IonIcon>
                                     Add discount
                                </IonButton>
                            </div>
                        </IonRow>
                        <div className="button-container">
                            <IonButton shape="round" className="text_1">
                                Save
                            </IonButton>
                        </div>
                    </div>
                </div>
                {discount?<NewDiscount/>:<></>}
         </div>
        
    )
    }
export default NewService;