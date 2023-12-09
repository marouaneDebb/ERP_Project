import { IonButton, IonInput } from "@ionic/react";
import "./homet.css";

function Account() {
  return (
    <div className="log-container">
    <div className="log-container container">
       <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 clo-sm-11 m-1 border rounded">
                <h2 className="ion-text-center rounded border text text-light bg-dark opacity-50 pt-3 pb-3 mb-4">Activate account</h2>
                <IonInput className="m-2" label="Email" labelPlacement="floating" placeholder="email@gmail.com" counter={true} maxlength={30} type="email"></IonInput>
                <IonInput className="m-2" label="CIN" labelPlacement="floating" placeholder="AA111111" counter={true} maxlength={15} type="text"></IonInput>
                <IonInput className="m-2" label="Id client" labelPlacement="floating" counter={true} maxlength={20} type="text"></IonInput>
                <IonInput className="m-2" label="Password" labelPlacement="floating" placeholder="Enter password" counter={true} maxlength={20} type="password"></IonInput>
                <IonInput className="m-2" label="Password" labelPlacement="floating" placeholder="verify password" counter={true} maxlength={20} type="password"></IonInput>

                <div className="ion-text-center">
                    <IonButton >Submit</IonButton>
                </div>
                <div className=" ion-text-center">
                  <samp>Already have an account!</samp>
                  <samp className="text text-primary">  <a href="/log">LogIn</a></samp>
                </div>
          </div>
      </div>
      </div>
      </div>
  );
};
export default Account;