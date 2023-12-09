import { IonButton, IonCheckbox, IonInput} from "@ionic/react";
function LogIn() {
  return (
    <section className="container mt-2">
       <div className="row justify-content-center">
         
          <div className="col-lg-5 col-md-6 clo-sm-11 m-1 border rounded">
                <h2 className="ion-text-center text text-light rounded border bg-dark opacity-50 pt-3 pb-3 mb-5 ">LogIn</h2>
                <IonInput className="my-2" label="Id client" labelPlacement="floating" fill="outline" placeholder="Enter your id" type="text"></IonInput>
                <IonInput className="my-2" label="Password"  labelPlacement="floating" fill="outline" placeholder="**********" type="password"></IonInput>
                <IonCheckbox className="my-2"> Remember my id!</IonCheckbox>
                <div className="ion-text-center">
                    <IonButton className="mb-3">LogIn</IonButton>
                </div>
                <div className=" ion-text-center">
                  <samp>Don't have an account!</samp>
                  <samp className="text text-primary">  <a href="/account">Activate account</a></samp>
                </div>
          </div>
      </div>
    </section>
  );
};
export default LogIn;