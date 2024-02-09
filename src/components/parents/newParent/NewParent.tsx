
import { IonInput, IonRow, IonLabel, IonSearchbar } from "@ionic/react";
import { ChangeEvent, useState } from "react";
import { createParent } from "../../../Services/ParentService";
import { URL_BACK } from "../../../Services/StrudentService";

function NewParent() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  // const [file,setFile] = useState('')
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    
    if (file) {

      // const formData = new FormData();
      // formData.append('file', file);
      // console.log(formData,"formData")
      // console.log(file,"formData")

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        console.log(reader.result,"reader.reult")
      };
      reader.readAsDataURL(file);
    }else{
      console.log("Error de file")
    }
  };

  //Mappring
  let [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cin, setCIN] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateInscription, setdateInscription] = useState("");

  const handleChangeFisrt = (e: any) => {
    const newValue = e.target?.value || '';
    setFirstName(newValue);
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
    console.log("Validation")
    if (validation()) {
      const parent = {
        cin,
        firstName,
        lastName,
        email,
        phone,
        dateInscription,
        address,
        imageSrc
      };

      console.log(parent, "contenu parent");

      const jsonData = JSON.stringify(parent);
      console.log(jsonData,"json format");

      const requestOptions = {
        method: "POST",
        url: URL_BACK + "/parent/add",
        headers: {
          "Content-Type": "application/json",
        },
        data: jsonData,
      };
      createParent(requestOptions)
        .then((res) => {
          console.log(res.data, "data in bd");
        })
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la création de parent:",
            error
          );
        });
    } else {
      console.log("Error de Validation");
    }
  };

  //Validation

  interface ErrorType {
    firstName1: string;
    lastName: string;
    email: string;
    phone: string;
    dateInscription: string;
    address: string;
    cin:string
  }
  const [error, setError] = useState<ErrorType>({
    firstName1: "",
    lastName: "",
    email: "",
    phone: "",
    dateInscription: "",
    address: "",
    cin:""
  });
  function validation() {

    const errorCopy ={... error}
    let valide = true;
    if (firstName.trim()) {
      errorCopy.firstName1 = "";
      console.log(firstName,"name pas vide")
      console.log(error.firstName1,"error,si name pas vide")
    } else {
      console.log("Error firstname est vide");
      errorCopy.firstName1 = "First name is required";
      console.log(errorCopy.firstName1,"errorCopySimple")
      console.log(firstName,"first name est vide")
      valide = false;
    }
    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last name  is required";
      valide = false;
    }
    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valide = false;
    }
    if (phone.trim()) {
      errorCopy.phone = "";
    } else {
      errorCopy.phone = " Phone is required";
      valide = false;
    }
    if (address.trim()) {
      errorCopy.address = "";
    } else {
      errorCopy.address = " Address is required";
      valide = false;
    }
    if (dateInscription.trim()) {
      errorCopy.dateInscription = "";
    } else {
      errorCopy.dateInscription = " Date is required";
      valide = false;
    }
    if (cin.trim()) {
      errorCopy.cin = "";
    } else {
      errorCopy.cin = " Date is required";
      valide = false;
    }
    setError(errorCopy)
    return valide;
  }

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
              {/* {imageSrc && (
                <img src={imageSrc} alt="Selected" className="photo1" />
              )} */}

{imageSrc && <img src={imageSrc} alt="Selected" />}
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
                  className={`form-control ${
                    error.firstName1 ? "is-invalid":""
                  } `}
                  fill="outline"
                  type="text"
                  value={firstName}
                  onIonChange={handleChangeFisrt}
                  placeholder="your first name"
                ></IonInput>
                
                {error.firstName1 && (
                  <div className="invalid-feedback">{error.firstName1} </div>
                )}
              </div>
              <div>
                <IonLabel>Last Name*</IonLabel>
                <IonInput
                  className={`form-control ${
                    error.lastName ? "is-invalid":""
                  } `}
                  placeholder="your last name"
                  fill="outline"
                  type="text"
                  value={lastName}
                  onIonChange={handleChangeLast}
                ></IonInput>
                 {error.lastName && (
                  <div className="invalid-feedback">{error.lastName} </div>
                )}
              </div>
              <div>
                <IonLabel>cin*</IonLabel>
                <IonInput
                  className={`form-control ${
                    error.cin ? "is-invalid":""
                  } `}
                  placeholder="AA111111"
                  fill="outline"
                  type="text"
                  value={cin}
                  onIonChange={handleChangecin}
                ></IonInput>
                 {error.cin && (
                  <div className="invalid-feedback">{error.cin} </div>
                )}
              </div>
              <div>
                <IonLabel>Address*</IonLabel>
                <IonInput
                  className={`form-control ${
                    error.address ? "is-invalid":""
                  } `}
                  placeholder="Your address"
                  fill="outline"
                  type="text"
                  value={address}
                  onIonChange={handleChangeAddress}
                />
                 {error.address && (
                  <div className="invalid-feedback">{error.address} </div>
                )}
              </div>
            </div>
            <div className="col-4 mx-3">
              <IonLabel>Email*</IonLabel>
              <IonInput
                className={`form-control ${
                  error.email ? "is-invalid":""
                } `}
                fill="outline"
                type="email"
                value={email}
                onIonChange={handleChangeEmail}
              ></IonInput>
               {error.email && (
                  <div className="invalid-feedback">{error.email} </div>
                )}
              <IonLabel>Phone*</IonLabel>
              <IonInput
                className={`form-control ${
                  error.phone ? "is-invalid":""
                } `}
                fill="outline"
                type="tel"
                value={phone}
                onIonChange={handleChangePhone}
              ></IonInput>
               {error.phone && (
                  <div className="invalid-feedback">{error.phone} </div>
                )}
              <IonLabel>Date of birth*</IonLabel>
              <IonInput
                className={`form-control ${
                  error.dateInscription ? "is-invalid":""
                } `}
                fill="outline"
                type="date"
                value={dateInscription}
                onIonChange={handleChangedateInscription}
              ></IonInput>
               {error.dateInscription && (
                  <div className="invalid-feedback">{error.dateInscription} </div>
                )}
            </div>
            <button className="btn btn-success mx-auto" onClick={saveParent}>
              Save
            </button>
          </IonRow>
        </div>
      </div>
    </div>
  );
}
export default NewParent;
