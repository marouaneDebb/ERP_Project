
import {IonInput,IonRow, IonLabel, IonSearchbar, InputChangeEventDetail} from "@ionic/react"
import './newStudent.css'
import { ChangeEvent, useState } from "react";
import { getStudents, createStudent } from '../../Services/StrudentService';

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
        



        function saveStudent(e:any){
            
            const student = {firstName,lastName,address,classs,phone}
            const jsonData = JSON.stringify(student);
            console.log(jsonData)
            const requestOptions = {
                method: 'POST',
                url: 'http://localhost:8090/students/add',
                headers: {
                  'Content-Type': 'application/json'
                },
                data: jsonData
              };
            
            createStudent(requestOptions).then(res=>{
                console.log(res.data)
            })
        }
        
    return(
            <div className="midle1 p-3">
                <div className="formulaire">
                    <div className="newAccount">
                        <h5> New Student</h5>
                    </div>
                    <div className="mainf">
                        <IonRow>
                            
                            <div className="col-2 mx-2">
                                <g>photo</g>
                                {imageSrc && <img src={imageSrc} alt="Selected"  className="photo1" />}
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
                            <div className="col-4 mx-3">
                                <IonLabel>Date of birth*</IonLabel>
                                <IonInput className="my-2"
                                 fill="outline" 
                                 type="date"></IonInput>
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
                            
                            <button className="btn btn-success mx-auto" onClick={saveStudent}>Add</button>
                        </IonRow>
                    </div>
                </div>


            </div>
    )
}
export default NewStudent;