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
                  placeholder="enter the name"
                  className="my-2"
                  fill="outline"
                  type="text"
                  value={name}
                  onIonChange={handlenameChange}
                ></IonInput>
              </div>
              <div>
                <IonLabel>Start*</IonLabel>
                <IonInput
                  fill="outline"
                  className="my-2"
                  type="date"
                  value={start}
                  onIonChange={handleStartChange}

                ></IonInput>
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
                className="my-2"
                onIonChange={handlepereodicityChange}

                value={pereodicity}
                required
              ></IonInput>
              <IonLabel>Price(DH)*</IonLabel>
              <IonInput
                placeholder="1000"
                className="my-2"
                fill="outline"
                type="text"
                value={price}
                onIonChange={handlePriceChange}

              ></IonInput>
              <IonLabel>Type*</IonLabel>
              <div className="tipe">
                <IonRadioGroup className="my-2" value={type} onIonChange={handleTypeChange}>
                  <IonRadio className="col-4 mx-5" value="obligatory" >
                    Obligatory
                  </IonRadio>
                  <IonRadio className="col-4" value="optional">
                    Optional
                  </IonRadio>
                </IonRadioGroup>
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
