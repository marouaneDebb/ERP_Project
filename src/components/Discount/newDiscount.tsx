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
  const [percentage, setPercentage] = useState(0);

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

    if(validation()){
      addDiscount(requestOptions).then((res)=>{
        console.log(res.data);
        alert("Création terminée avec succès")
        setDateValidation("")
        setDescription("")
        setNameDiscount("")
        setPercentage(0)
        setconditionn("")
      }).catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la création de remise:",
          error
        );
      });
    }else{
      console.error(error,"error de creation de discount")
    }
  }

  
    //Validation

    
    percentage
    interface ErrorType {
      nameDiscount: string;
      description: string;
      conditionn: string;
      dateValidation: string;
      percentage:string
      
    }
    const [error, setError] = useState<ErrorType>({
      nameDiscount: "",
      description: "",
      conditionn: "",
      dateValidation: "",
      percentage:""
    });
    const errorCopy = { ...error };
    function validation() {
      let valide = true;
      if (nameDiscount.trim()) {
        errorCopy.nameDiscount = "";
      } else {
        console.log("Error firstname est vide");
        errorCopy.nameDiscount = "First name is required";
        valide = false;
      }
      if (description.trim()) {
          errorCopy.description = "";
        } else {
          errorCopy.description = " description is required";
          valide = false;
        }
      if (conditionn.trim()) {
        errorCopy.conditionn = "";
      } else {
        errorCopy.conditionn = "Condition is required";
        valide = false;
      }
      if (dateValidation) {
        errorCopy.dateValidation = "";
      } else {
        errorCopy.dateValidation = "Date de Validation is required";
        valide = false;
      }
      if (percentage) {
        errorCopy.percentage = "";
      } else {
        errorCopy.percentage = "Prcentage is required";
        valide = false;
      }

      
      setError(errorCopy);
      return valide;
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
                className={`form-control ${error.nameDiscount ? "is-invalid" : ""} `}
                fill="outline"
                type="text"
                value={nameDiscount}
                onIonChange={handaleNameChange}
              ></IonInput>
              {error.nameDiscount && (
                  <div className="invalid-feedback">{error.nameDiscount} </div>
                )}
            </div>
            <div>
              <IonLabel>conditionn*</IonLabel>
              <IonInput
                fill="outline"
                className={`form-control ${error.conditionn ? "is-invalid" : ""} `}
                type="text"
                value={conditionn}
                onIonChange={handaleconditionnChange}
              ></IonInput>
              {error.conditionn && (
                  <div className="invalid-feedback">{error.conditionn} </div>
                )}
            </div>
            <IonLabel>
              Description<IonText color="danger">*</IonText>
            </IonLabel>
            <IonTextarea
              fill="outline"
              className={`form-control ${error.description ? "is-invalid" : ""} `}
              value={description}
              onIonChange={handaleDescriptionChange}
            ></IonTextarea>
            {error.description && (
                  <div className="invalid-feedback">{error.description} </div>
                )}
          </div>
          <div className="col-5 mx-3">
            <IonLabel>Valid date*</IonLabel>
            <IonInput
              fill="outline"
              type="date"
              className={`form-control ${error.dateValidation ? "is-invalid" : ""} `}
              
              value={dateValidation}
              onIonChange={handaleDateValidationChange}
              required
            ></IonInput>
            {error.dateValidation && (
                  <div className="invalid-feedback">{error.dateValidation} </div>
                )}
            <IonLabel>Percentage(%)*</IonLabel>
            <IonInput
              placeholder="0"
              className={`form-control ${error.percentage ? "is-invalid" : ""} `}
              fill="outline"
              type="number"
              value={percentage}
              onIonChange={handalepercentageChange}
            ></IonInput>
            {error.percentage && (
                  <div className="invalid-feedback">{error.percentage} </div>
                )}
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
