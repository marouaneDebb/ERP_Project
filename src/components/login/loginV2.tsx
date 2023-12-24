import { IonButton, IonCheckbox, IonIcon, IonInput } from "@ionic/react";
import "./loginV2.css";
import { lockClosedOutline, mailOutline } from "ionicons/icons";
import { useHistory } from "react-router";
function Login() {
    const history = useHistory(); // Create a history object

  const handleLogin = () => {
    // Handle your login logic here

    // Redirect to the dashboard page after successful login
    history.push("/ERP_Project/dashBoard");
  };
  return (
    <div className="login_container">
      <section className="login_section">
        <form>
          <h1 className="login_h1">Login</h1>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={mailOutline}></IonIcon>
            <input type="email" required />
            <label htmlFor="">Id</label>
          </div>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={lockClosedOutline}></IonIcon>
            <input type="password" required />
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button className="login_button" onClick={handleLogin}>Log in</button>
          <div className="register">
            <p>
              Don't have a account <a href="/ERP_Project/signup">Register</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Login;
