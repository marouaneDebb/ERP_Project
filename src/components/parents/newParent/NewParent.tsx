
import {IonInput,IonRow, IonLabel, IonSearchbar, IonButton} from "@ionic/react"
import { ChangeEvent, useState } from "react";
import ParentType from "../../../Models/parentType";

function NewParent(){
        const [imageSrc, setImageSrc] = useState<string | null>(null);
        const [firstName,setFirstName] = useState('')
        const [lastName,setLastName] = useState('')
        const [address,setAddress] = useState('')
        const [phone,setPhone] = useState('')
        const [email, setEmail]=useState('')
        const [dateNaissance,setDateNaissance] = useState<Date>(new Date())
        const [CIN,setCIN] = useState('')

        const[parent1, setParent1]=useState<ParentType>()
        let parent:ParentType;
      
        const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        };

        const changeFirstName=(e:any)=>{
            setFirstName(e.target.value);

        }
        const changeAddress=(e:any)=>{
            setAddress(e.target.value);
        }
        const changeLastName=(e:any)=>{
            setLastName(e.target.value);
        }
        const ChangePhone=(e:any)=>{
            setPhone(e.target.value);
        }
        const changeDateNaissance=(e:any)=>{
            setDateNaissance(e.target.value);
        }
        const changeEmail=(e:any)=>{
            setEmail(e.target.value);
        }
        const changeCIN=(e:any)=>{
            setCIN(e.target.value);
        }
        const showParentAtt=()=>{
            setParent1({id: 111,
                firstname: firstName,
                lastname: lastName,
                phone:phone,
                email:email,
                dateOfBirth:dateNaissance,
                address:address,
                imgUrl:"kkk",
                CIN:CIN});
            printparent();
        }
        const printparent=()=>{
          console.log(parent1);
        }

    return(
            <div className="midle1 p-3">
                <div className="formulaire">
                    <div className="newAccount">
                        <h5> New Parent</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            <div className="col-2 mx-2">
                                <g>photo</g>
                                {imageSrc && <img src={imageSrc} alt="Selected"  className="photo1" />}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="col-5 mx-3">
                                <div>
                                    <IonLabel>First Name*</IonLabel>
                                    <IonInput className="my-2"
                                     onIonInput={(changeFirstName)} 
                                     placeholder="your first name" 
                                     fill="outline" type="text">
                                     </IonInput>
                                    
                                </div>
                                <div>
                                    <IonLabel>Last Name* </IonLabel>
                                    <IonInput className="my-2"
                                    onIonInput={(changeLastName)}
                                    placeholder="your last name" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>CIN*</IonLabel>
                                    <IonInput className="my-2" 
                                     onIonInput={(changeCIN)}
                                     placeholder="AA111111" fill="outline" type="text"></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Address*</IonLabel>
                                    <IonInput className="my-2" 
                                     onIonInput={(changeAddress)}
                                     required
                                     placeholder="Tinghir, Imider Ait Said Oudaoud" fill="outline" type="text"/>
                                </div>
                            </div>
                            <div className="col-4 mx-3">
                                <IonLabel>Email*</IonLabel>
                                <IonInput className="my-2"
                                 onIonInput={(changeEmail)}
                                 fill="outline" type="email"></IonInput>
                                <IonLabel>Phone*</IonLabel>
                                <IonInput className="my-2"
                                 onIonInput={(ChangePhone)}
                                 fill="outline" type="tel"></IonInput>
                                <IonLabel>Date of birth*</IonLabel>
                                <IonInput className="my-2"
                                 onIonInput={(changeDateNaissance)}
                                 fill="outline" type="date"></IonInput>
                            </div>
                            <div className="button-container mt-2">
                            <IonButton shape="round" onClick={showParentAtt} className="text_1">
                                SAVE
                            </IonButton>
                        </div>
                        </IonRow>
                    </div>
                </div>


            </div>
    )
}
export default NewParent;

