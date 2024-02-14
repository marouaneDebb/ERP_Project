import {
  IonInput,
  IonRow,
  IonLabel,
  IonSearchbar,
  InputChangeEventDetail,
  IonButton,
} from "@ionic/react";
import "./newStudent.css";
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { getStudents, createStudent } from "../../Services/StrudentService";
import { getParent } from "../../Services/ParentService";

function NewStudent() {
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

  // Mapping
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAdress] = useState("");
  const [classs, setClass] = useState("");
  const [phone, setphone] = useState("");
  const [dateNaissance, setdateNaissance] = useState("");
  const [dataParent, setdataParent] = useState("");
  const [parent, setParent] = useState("");

  const history = useHistory();

  // const handleChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = e.target.value;
  //     setFirstName(newValue);
  // };
  const handleChangeFirst = (e: CustomEvent<InputChangeEventDetail>) => {
    const newValue = (e.target as HTMLInputElement).value;
    setFirstName(newValue);
  };
  const handleChangeLast = (e: any) => {
    setLastName(e.target.value);
  };
  const handleChangeAdress = (e: any) => {
    setAdress(e.target.value);
  };
  const handleChangeClass = (e: any) => {
    setClass(e.target.value);
  };
  const handleChangePhone = (e: any) => {
    setphone(e.target.value);
  };
  const handleChangedateNaissance = (e: any) => {
    setdateNaissance(e.target.value);
  };

  const handleChangedataParent = (e: any) => {
    setdataParent(e.target.value);
  };

  function saveStudent(e: any) {
    const student = {
      firstName,
      lastName,
      address,
      classs,
      phone,
      dateNaissance,
      parent,
    };

    getParent(dataParent)
      .then((res) => {
        const info = res.data;
        student.parent = info;

        console.log(student.parent, "The parent in student Data Manually");

        // console.log(info, "The info of parent in Backend Data");

        const jsonData = JSON.stringify(student);

        const requestOptions = {
          method: "POST",
          url: "http://localhost:8090/students/add",
          headers: {
            "Content-Type": "application/json",
          },
          data: jsonData,
        };
        if (validation()) {
          createStudent(requestOptions)
            .then((res) => {
              // console.log(res.data,"data in bd")
              setFirstName("");
              setLastName("");
              setAdress("");
              setClass("");
              setphone("");
              setdateNaissance("");
              setParent("");
            })
            .catch((error) => {
              console.error(
                "Une erreur s'est produite lors de la création de l'étudiant:",
                error
              );
            });
        } else {
          console.error("error de la creation d'etudiant");
        }
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données du parent:",
          error
        );
        errorCopy.dataParent='CIN is not valide'
      });
    // console.log(student,"student data after")
  }

  //Les errors

  interface ErrorType {
    firstName: string;
    lastName: string;
    phone: string;
    dateNaissance: string;
    address: string;
    classs: string;
    dataParent: string;
  }
  const [error, setError] = useState<ErrorType>({
    firstName: "",
    lastName: "",
    phone: "",
    dateNaissance: "",
    address: "",
    classs: "",
    dataParent: "",
  });
  const errorCopy = { ...error };
  function validation() {
    let valide = true;
    if (firstName.trim()) {
      errorCopy.firstName = "";
      console.log(firstName, "name pas vide");
      console.log(error.firstName, "error,si name pas vide");
    } else {
      console.log("Error firstname est vide");
      errorCopy.firstName = "First name is required";
      valide = false;
    }
    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last name  is required";
      valide = false;
    }
    if (dataParent.trim()) {
      errorCopy.dataParent = "";
    } else {
      errorCopy.dataParent = "CIN of parent is required";
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
    if (dateNaissance.trim()) {
      errorCopy.dateNaissance = "";
    } else {
      errorCopy.dateNaissance = " Date is required";
      valide = false;
    }
    if (phone.trim()) {
      errorCopy.phone = "";
    } else {
      errorCopy.phone = " Date is required";
      valide = false;
    }
    setError(errorCopy);
    return valide;
  }

  return (
    <div className="midle1 p-3">
      <div className="formulaire">
        <div className="newAccount">
          <h5> New Student</h5>
        </div>
        <div className="mainf">
          <IonRow>
            <div className="col-sm-2">
              <g>photo</g>
              {imageSrc && (
                <img src={imageSrc} alt="Selected" className="photo1" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            
            <div className="col-sm-4 mx-3">
              <div>
                <IonLabel>First Name*</IonLabel>
                <IonInput
                  className={`form-control ${
                    error.firstName ? "is-invalid" : ""
                  } `}
                  placeholder="your first name"
                  fill="outline"
                  type="text"
                  value={firstName}
                  onIonChange={handleChangeFirst}
                ></IonInput>
                {error.firstName && (
                  <div className="invalid-feedback">{error.firstName} </div>
                )}
              </div>
              <div>
                <IonLabel>Last Name*</IonLabel>
                <IonInput
                  className={`form-control ${
                    error.lastName ? "is-invalid" : ""
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
                <IonLabel>Address*</IonLabel>
                <IonInput
                  className={`form-control ${
                    error.address ? "is-invalid" : ""
                  } `}
                  placeholder="Adress"
                  fill="outline"
                  type="text"
                  value={address}
                  onIonChange={handleChangeAdress}
                />
                {error.address && (
                  <div className="invalid-feedback">{error.address} </div>
                )}
              </div>
            </div>
            <div className="col-sm-5 mx-3">
              <IonLabel>date of birth*</IonLabel>
              <IonInput
                className={`form-control ${
                    error.dateNaissance ? "is-invalid" : ""
                  } `}
                fill="outline"
                type="date"
                value={dateNaissance}
                onIonChange={handleChangedateNaissance}
              ></IonInput>
              {error.dateNaissance && (
                  <div className="invalid-feedback">{error.dateNaissance} </div>
                )}
              <IonLabel>Class*</IonLabel>
              <IonInput
                className={`form-control ${
                    error.classs ? "is-invalid" : ""
                  } `}
                fill="outline"
                type="text"
                value={classs}
                onIonChange={handleChangeClass}
              ></IonInput>
              {error.classs && (
                  <div className="invalid-feedback">{error.classs} </div>
                )}
              <IonLabel>phone*</IonLabel>
              <IonInput
                className={`form-control ${
                    error.phone ? "is-invalid" : ""
                  } `}
                fill="outline"
                type="tel"
                value={phone}
                onIonChange={handleChangePhone}
              ></IonInput>
              {error.phone && (
                  <div className="invalid-feedback">{error.phone} </div>
                )}
            </div>

            <IonLabel>CIN Parent*</IonLabel>
            <IonInput
              className={`form-control ${
                error.dataParent ? "is-invalid" : ""
              } `}
              fill="outline"
              type="tel"
              value={parent}
              placeholder="CIN Parent"
              onIonChange={handleChangedataParent}
            ></IonInput>
            {error.dataParent && (
                  <div className="invalid-feedback">{error.dataParent} </div>
                )}
            <div className="button-container mt-2">
              <IonButton shape="round" className="text_1" onClick={saveStudent}>
                ADD
              </IonButton>
            </div>
          </IonRow>
        </div>
      </div>
    </div>
  );
}
export default NewStudent;
