import {
  IonInput,
  IonRow,
  IonLabel,
  IonSearchbar,
  IonTextarea,
  IonText,
  IonAlert,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";
import { addDiscount } from "../../Services/DiscountService";
import { readTask } from "ionicons/dist/types/stencil-public-runtime";

function NewDiscount() {
  //Mapping
  const [nameDiscount, setNameDiscount] = useState("");
  const [conditionn, setconditionn] = useState("");
  const [description, setDescription] = useState("");
  const [dateValidation, setDateValidation] = useState("");
  const [percentage, setPercentage] = useState("");

  const handaleNameChange = (e: any) => {
    setNameDiscount(e.target.value);
  };
  const handaleconditionnChange = (e: any) => {
    setconditionn(e.target.value);
  };
  const handaleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };
  const handaleDateValidationChange = (e: any) => {
    setDateValidation(e.target.value);
  };
  const handalepercentageChange = (e: any) => {
    setPercentage(e.target.value);
  };


  const saveData=() =>{

    const discount = {
      nameDiscount,
      description,
      conditionn,
      dateValidation,
      percentage
    }
    console.log("I am here")
    console.log(discount,"disc")

    const DiscJson = JSON.stringify(discount);
    const requestOptions = {
      method: "POST",
      url: "http://localhost:8090/remise/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: DiscJson,
    };
    console.log(DiscJson,"json")
    console.log(requestOptions,"request")
    addDiscount(requestOptions).then((res)=>{
      console.log(res.data);
    }).catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la création de remise:",
        error
      );
    });
  }

  return (
    <div className="formulaire mx-4">
      <div className="newAccount">
        <h5> New Discount</h5>
      </div>
      <div className="mainf">
        <IonRow>
          <div className="col-5 mx-3">
            <div>
              <IonLabel>Discount Name*</IonLabel>
              <IonInput
                placeholder="enter the name"
                className="my-2"
                fill="outline"
                type="text"
                value={nameDiscount}
                onIonChange={handaleNameChange}
              ></IonInput>
            </div>
            <div>
              <IonLabel>conditionn*</IonLabel>
              <IonInput
                fill="outline"
                className="my-2"
                type="text"
                value={conditionn}
                onIonChange={handaleconditionnChange}
              ></IonInput>
            </div>
            <IonLabel>
              Description<IonText color="danger">*</IonText>
            </IonLabel>
            <IonTextarea
              fill="outline"
              className="my-2"
              value={description}
              onIonChange={handaleDescriptionChange}
            ></IonTextarea>
          </div>
          <div className="col-5 mx-3">
            <IonLabel>Valid date*</IonLabel>
            <IonInput
              fill="outline"
              type="date"
              className="my-2"
              
              value={dateValidation}
              onIonChange={handaleDateValidationChange}
              required
            ></IonInput>
            <IonLabel>Percentage(%)*</IonLabel>
            <IonInput
              placeholder="0"
              className="my-2"
              fill="outline"
              type="number"
              value={percentage}
              onIonChange={handalepercentageChange}
            ></IonInput>
          </div>
        </IonRow>
        <div className="button-container">
          <IonButton 
          shape="round" 
          className="text_1"
          onClick={saveData}
          >
            Save
          </IonButton>
        </div>
      </div>
    </div>
  );
}
export default NewDiscount;
