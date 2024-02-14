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
import { useEffect, useState } from "react";
import "./NewService.css";
import NewDiscount from "../Discount/newDiscount";
import { createService } from "../../Services/ServiceService";
import { getAllDiscount } from "../../Services/DiscountService";
// import { getAllDiscount } from "../../Services/discounts";



function NewService() {

interface discountType {
  nameDiscount:String;
  description:String;
  conditionn:String;
  dateValidation:String;
  percentage:String;
}
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [discount, setDiscount] = useState(false);
  const [remise, setRemise] = useState<discountType>();
  const [discountsExist, setDiscountsExist] = useState<discountType[]>([]);
  const handleSelectChange = (e:any) => {
    const selectedIndex = e.target.value;
    setSelectedOption(selectedIndex);

    // // Get the selected discount object based on the index
    // const selectedDiscount = discountsExist[selectedIndex];
    // // const discountJson = JSON.stringify(selectedDiscount)
    // // Add the selected discount to the discountCh list

    setRemise(discountsExist[selectedIndex]);
  };


  const newDiscount = () => {
    setDiscount(!discount);
  };

  //Mapping
  const [name,setName] = useState('');
  const [start,setStart] = useState('');
  const [description,setDescription] = useState('');
  const [pereodicity,setPereodicity] = useState('');
  const [price,setPrice] = useState('');
  const [type,setType] = useState('');

  const handlenameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleStartChange = (e: any) => {
    setStart(e.target.value);
  };
  const handleDescChange = (e: any) => {
    setDescription(e.target.value);
  };
  const handlepereodicityChange = (e: any) => {
    setPereodicity(e.target.value);
  };
  const handlePriceChange = (e: any) => {
    setPrice(e.detail.value);
    
  };
  const handleTypeChange = (e: any) => {
    setType(e.detail.value);
  };
 

  const saveService= ()=>{
    const service = {
        name,
        start,
        pereodicity,
        price,
        type,
        description,
        remise
    }
    console.log(service,"service data")
    // service.remise = discJson
    console.log(remise, "remise en  bd after")

    const serviceJson = JSON.stringify(service);

    const requestOptions = {
      method: "POST",
      url: "http://localhost:8090/service/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: serviceJson,
    };

    // console.log(requestOptions, "service data");
   
    if(validation()){
      createService(requestOptions).then((res) =>{
        console.log(res.data,"data in back")
        alert("Création terminée avec succès ")
        setType("")
        setPrice("")
        setPereodicity("")
        setDescription("")
        setStart("")
        setName("")
        setSelectedOption(undefined)
        
        
  
      }).catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la création de service:",
          error
        );
      });

    }else{
      console.error(error,"error de validation")
    }

    // console.log(remise,"choisi disc")
  }

  //discount
  useEffect(()=>{
    getAllDiscount()
    .then((res)=>{
      setDiscountsExist(res.data)
      console.log(res.data,"all discount")
      
    })
  },
    [])


    //Validation


    interface ErrorType {
      name: string;
      start: string;
      pereodicity: string;
      price: string;
      type: string;
      description: string;
      remise: any;
    }
    const [error, setError] = useState<ErrorType>({
      name: "",
      start: "",
      pereodicity: "",
      price: "",
      type: "",
      description: "",
      remise: "",
    });
    const errorCopy = { ...error };
    function validation() {
      let valide = true;
      if (name.trim()) {
        errorCopy.name = "";
        console.log(name, "name pas vide");
        console.log(error.name, "error,si name pas vide");
      } else {
        console.log("Error firstname est vide");
        errorCopy.name = "First name is required";
        valide = false;
      }
      if (start.trim()) {
        errorCopy.start = "";
      } else {
        errorCopy.start = "Start date is required";
        valide = false;
      }
      if (pereodicity) {
        errorCopy.pereodicity = "";
      } else {
        errorCopy.pereodicity = "Pereodicity is required";
        valide = false;
      }
      if (price.trim()) {
        errorCopy.price = "";
      } else {
        errorCopy.price = " price is required";
        valide = false;
      }
      if (type.trim()) {
        errorCopy.type = "";
      } else {
        errorCopy.type = " type is required";
        valide = false;
      }
      // if (description.trim()) {
      //   errorCopy.description = "";
      // } else {
      //   errorCopy.description = " description is required";
      //   valide = false;
      // }
      // if (remise) {
      //   errorCopy.remise = "";
      // } else {
      //   errorCopy.remise = " remise is required";
      //   valide = false;
      // }
      setError(errorCopy);
      return valide;
    }
  return (
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
                <IonInput
className={`form-control ${
  error.name ? "is-invalid" : ""
} `}                  placeholder="enter the name"
                  fill="outline"
                  type="text"
                  value={name}
                  onIonChange={handlenameChange}
                ></IonInput>
                {error.name && (
                  <div className="invalid-feedback">{error.name} </div>
                )}
              </div>
              <div>
                <IonLabel>Start*</IonLabel>
                <IonInput
                  fill="outline"
                  className={`form-control ${
                    error.start ? "is-invalid" : ""
                  } `}
                  type="date"
                  value={start}
                  onIonChange={handleStartChange}

                ></IonInput>
                {error.start && (
                  <div className="invalid-feedback">{error.start} </div>
                )}
              </div>
              <IonLabel>
                Description<IonText color="danger">*</IonText>
              </IonLabel>
              <IonTextarea fill="outline" className="my-2" value={description} onIonChange={handleDescChange}></IonTextarea>
              <IonLabel>Discount</IonLabel>
              <IonSelect
                fill="outline"
                placeholder="choose a discount"
                value={selectedOption}
                onIonChange={handleSelectChange}
              >
                {discountsExist.map((disc,index) =>(
                  <IonSelectOption key={index} value={index}>{disc.nameDiscount}</IonSelectOption>

                )
                )}
                
                {/* <IonSelectOption value="option2">Option 2</IonSelectOption>
                <IonSelectOption value="option3">Option 3</IonSelectOption> */}
              </IonSelect>
            </div>
            <div className="col-5 mx-3">
              <IonLabel>Service periodicity(month)*</IonLabel>
              <IonInput
                fill="outline"
                type="number"
                className={`form-control ${
                  error.pereodicity ? "is-invalid" : ""
                } `}
                onIonChange={handlepereodicityChange}

                value={pereodicity}
                required
              >
              
              </IonInput>
                {error.pereodicity && (
                  <div className="invalid-feedback">{error.pereodicity} </div>
                )}

              <IonLabel>Price(DH)*</IonLabel>
              <IonInput
                placeholder="1000"
                className={`form-control ${
                  error.price ? "is-invalid" : ""
                } `}
                fill="outline"
                type="text"
                value={price}
                onIonChange={handlePriceChange}

              ></IonInput>
              {error.price && (
                  <div className="invalid-feedback">{error.price} </div>
                )}
              <IonLabel>Type*</IonLabel>
              <div
              className={`tipe form-control ${
                error.type ? "is-invalid" : ""
              } `}>
                <IonRadioGroup className="my-2" value={type} onIonChange={handleTypeChange}>
                  <IonRadio className="col-4 mx-5" value="obligatory" >
                    Obligatory
                  </IonRadio>
                  <IonRadio className="col-4" value="optional">
                    Optional
                  </IonRadio>
                </IonRadioGroup>
                {error.type && (
                  <div className="invalid-feedback">{error.type} </div>
                )}
              </div>
              <IonButton
                shape="round"
                className="text_2 mt-5"
                onClick={newDiscount}
              >
                <IonIcon slot="start" icon={add}></IonIcon>
                Add discount
              </IonButton>
            </div>
          </IonRow>
          <div className="button-container">
            <IonButton shape="round" className="text_1"  onClick={saveService}>
              Save
            </IonButton>
          </div>
        </div>
      </div>
      {discount ? <NewDiscount /> : <></>}
    </div>
  );
}
export default NewService;
