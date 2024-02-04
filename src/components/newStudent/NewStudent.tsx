
import {IonInput,IonRow, IonLabel, IonSearchbar, InputChangeEventDetail} from "@ionic/react"
import './newStudent.css'
import { ChangeEvent, useState } from "react";
import { getStudents, createStudent } from '../../Services/StrudentService';
import { getParent } from "../../Services/ParentService";

function NewStudent(){
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
        const [firstName,setFirstName] = useState('')
        const [lastName,setLastName] = useState('')
        const [address,setAdress] = useState('')
        const [classs,setClass] = useState('')
        const [phone,setphone] = useState('')
        const [dateNaissance,setdateNaissance] = useState('')
        const [dataParent,setdataParent] = useState('')
        const [parent,setParent] = useState('')


       
    

        // const handleChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
        //     const newValue = e.target.value;
        //     setFirstName(newValue);
        // };
        const handleChangeFirst = (e: CustomEvent<InputChangeEventDetail>) => {
            const newValue = (e.target as HTMLInputElement).value;
            setFirstName(newValue);
        };
        const handleChangeLast = (e:any) => {
            
            setLastName(e.target.value);
        };
        const handleChangeAdress =(e:any) => {
            
            setAdress(e.target.value);
        };
        const handleChangeClass = (e:any) => {
            
            setClass(e.target.value);
        };
        const handleChangePhone = (e:any) => {
            
            setphone(e.target.value);
        };
        const handleChangedateNaissance = (e:any) => {
            
            setdateNaissance(e.target.value);
        };
        
        const handleChangedataParent = (e:any) => {
            
            setdataParent(e.target.value);
           
        };
        



        function saveStudent(e:any){
            
            const student = {firstName,
                lastName,
                address,
                classs,
                phone,
                dateNaissance,
                parent
                
            }

           getParent(dataParent)
            .then((res)=>{
                const info = res.data;
                student.parent=info;

                console.log(student.parent,"The parent in student Data Manually")
            
                console.log(info,"The info in Backend Data")

                const jsonData = JSON.stringify(student);
            
                const requestOptions = {
                    method: 'POST',
                    url: 'http://localhost:8090/students/add',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    data: jsonData
                  };
                
                createStudent(requestOptions)
                .then(res=>{
                    // console.log(res.data,"data in bd")
                })
                .catch(error => {
                    console.error("Une erreur s'est produite lors de la création de l'étudiant:", error);
                });

            })
            .catch((error) => {
                console.error("Une erreur s'est produite lors de la récupération des données du parent:", error);
            });
            // console.log(student,"student data after")
        
        }
        
    return(
            <div className="midle1 p-3">
                <div className="formulaire">
                    <div className="newAccount">
                        <h5> New Student</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            
                            <div className="col-sm-2">
                                <g>photo</g>
                                {imageSrc && <img src={imageSrc} alt="Selected"  className="photo1" />}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="photo1"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="col-sm-4 mx-3">
                                <div>
                                    <IonLabel>First Name*</IonLabel>
                                    <IonInput className="my-2"
                                    placeholder="your first name" 
                                    fill="outline" type="text" value={firstName} 
                                    onIonChange={(handleChangeFirst)}
                                    ></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Last Name*</IonLabel>
                                    <IonInput className="my-2"
                                    placeholder="your last name"
                                    fill="outline"
                                    type="text"
                                    value={lastName}
                                    onIonChange={handleChangeLast}

                                    
                                    ></IonInput>
                                </div>
                                <div>
                                    <IonLabel>Address*</IonLabel>
                                    <IonInput className="my-2"
                                     placeholder="Adress" 
                                     fill="outline"
                                      type="text" 
                                      value={address}
                                      onIonChange={handleChangeAdress}
                                      />
                                </div>
                            </div>
                            <div className="col-sm-4 mx-3">
                                <IonLabel>dateNaissance of birth*</IonLabel>
                                <IonInput className="my-2"
                                 fill="outline" 
                                 type="date"
                                 value={dateNaissance}
                                 onIonChange={handleChangedateNaissance}
                                 ></IonInput>
                                <IonLabel>Class*</IonLabel>
                                <IonInput className="my-2"
                                 fill="outline" 
                                 type="text"
                                  value={classs}
                                  onIonChange={handleChangeClass}
                                  ></IonInput>
                                <IonLabel>phone*</IonLabel>
                                <IonInput className="my-2" 
                                fill="outline" type="tel" 
                                value={phone}
                                onIonChange={handleChangePhone}
                                ></IonInput>
                            </div>
                                <IonLabel>dataParent dataParent*</IonLabel>
                                <IonInput className="my-2" 
                                fill="outline" type="tel" 
                                value={dataParent}
                                onIonChange={handleChangedataParent}
                                ></IonInput>
                            
                            <button className="btn btn-success mx-auto" onClick={saveStudent}>Add</button>
                        </IonRow>
                    </div>
                </div>


            </div>
    )
}
export default NewStudent;