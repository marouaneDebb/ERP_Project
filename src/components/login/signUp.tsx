import { IonButton, IonCheckbox, IonIcon, IonInput } from "@ionic/react";
import "./loginV2.css";
import { keyOutline, lockClosedOutline, mailOutline, personOutline } from "ionicons/icons";
function SignUp() {
  return (
    <div className="login_container">
      <section className="login_section">
        <form>
          <h1 className="login_h1">Sign Up</h1>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={mailOutline}></IonIcon>
            <input type="email" required />
            <label htmlFor="">Email</label>
          </div>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={personOutline}></IonIcon>
            <input type="email" required />
            <label htmlFor="">CIN</label>
          </div>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={keyOutline}></IonIcon>
            <input type="email" required />
            <label htmlFor="">Id</label>
          </div>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={lockClosedOutline}></IonIcon>
            <input type="password" required />
            <label htmlFor="">Password</label>
          </div>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={lockClosedOutline}></IonIcon>
            <input type="password" required />
            <label htmlFor="">Verify Password</label>
          </div>
          <button className="login_button">Sign Up</button>
          <div className="register">
            <p>
            Already have an account! <a href="/ERP_Project/logIn">Login</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
export default SignUp;
