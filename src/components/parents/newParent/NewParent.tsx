import { IonInput, IonRow, IonLabel, IonSearchbar } from "@ionic/react";
import { ChangeEvent, useState } from "react";
import { createParent } from "../../../Services/ParentService";
import { URL_BACK } from "../../../Services/StrudentService";

function NewParent() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

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

  //Mappring
  let [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [cin, setCIN] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateInscription, setdateInscription] = useState("");

  const handleChangeFisrt = (e: any) => {
    setFirstName(e.target.value);
    // console.log(e, "target.value");
  };
  const handleChangeLast = (e: any) => {
    setLastName(e.target.value);
  };
  const handleChangeAddress = (e: any) => {
    setAddress(e.target.value);
  };
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e: any) => {
    setPhone(e.target.value);
  };
  const handleChangedateInscription = (e: any) => {
    setdateInscription(e.target.value);
  };

  const handleChangecin = (e: any) => {
    setCIN(e.target.value);
  };

  const saveParent = () => {
    const parent = { cin,firstName,lastName,email,phone,dateInscription,address };
    console.log(parent,"contenu parent");
    const jsonData = JSON.stringify(parent);
console.log(jsonData)
    const requestOptions = {
        method: 'POST',
        url: URL_BACK+'/parent/add',
        headers: {
          'Content-Type': 'application/json'
        },
        data: jsonData
      };
    
      createParent(requestOptions)
    .then(res=>{
        console.log(res.data,"data in bd")
        
    })
    .catch(error => {
        console.error("Une erreur s'est produite lors de la création de parent:", error);
    });
  };

  return (
    <div className="midle1 p-3">
      <div className="formulaire">
        <div className="newAccount">
          <h5> New Parent</h5>
        </div>
        <div className="mainf">
          <IonRow>
            <div className="col-2 mx-2">
              <g>photo</g>
              {imageSrc && (
                <img src={imageSrc} alt="Selected" className="photo1" />
              )}
              <input
                type="file"
                accept="image/*"
                className="photo1"
                onChange={handleImageChange}
              />
            </div>
            <div className="col-5 mx-3">
              <div>
            
                <IonLabel>First Name*</IonLabel>
                <IonInput
                  className="my-2"
                  fill="outline"
                  type="text"
                  value={firstName}
                  onIonChange={handleChangeFisrt}
                  placeholder="your first name"
                ></IonInput>
              </div>
              <div>
                <IonLabel>Last Name*</IonLabel>
                <IonInput
                  className="my-2"
                  placeholder="your last name"
                  fill="outline"
                  type="text"
                  value={lastName}
                  onIonChange={handleChangeLast}
                ></IonInput>
              </div>
              <div>
                <IonLabel>cin*</IonLabel>
                <IonInput
                  className="my-2"
                  placeholder="AA111111"
                  fill="outline"
                  type="text"
                  value={cin}
                  onIonChange={handleChangecin}
                ></IonInput>
              </div>
              <div>
                <IonLabel>Address*</IonLabel>
                <IonInput
                  className="my-2"
                  placeholder="Tinghir, Imider Ait Said Oudaoud"
                  fill="outline"
                  type="text"
                  value={address}
                  onIonChange={handleChangeAddress}
                />
              </div>
            </div>
            <div className="col-4 mx-3">
              <IonLabel>Email*</IonLabel>
              <IonInput className="my-2" 
              fill="outline" 
              type="email"
              value={email}
              onIonChange={handleChangeEmail}
              ></IonInput>
              <IonLabel>Phone*</IonLabel>
              <IonInput className="my-2" fill="outline" 
              type="tel"
              value={phone}
              onIonChange={handleChangePhone}
              ></IonInput>
              <IonLabel>Date of birth*</IonLabel>
              <IonInput className="my-2" fill="outline" 
              type="date"
              value={dateInscription}
              onIonChange={handleChangedateInscription}
              ></IonInput>
            </div>
            <button className="btn btn-success mx-auto" onClick={saveParent}>Save</button>
          </IonRow>
        </div>
      </div>
    </div>
  );
}
export default NewParent;
