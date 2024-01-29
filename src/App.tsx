import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact,IonRouterOutlet} from '@ionic/react';
import {
  IonContent,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Homet from './components/home/homet';
import LogIn from './components/login/LogIn';
import Account from './components/login/ActivateAccount';
import { IonReactRouter } from '@ionic/react-router';
import DashBoard from './components/dashboard/Dashboard';
import Finance from './components/finance/finance';
import Parents from './components/parents/parents';
import Service from './components/service/service';
import ServiceItem from './components/service/ServiceItems/serviceItem';
import Login from './components/login/loginV2';
import SignUp from './components/login/signUp';
import NewStudent from './components/newStudent/NewStudent';
import Payments from './components/finance/payments/payments';
import Students from './components/newStudent/students/students';
setupIonicReact();

function App(){
  return (
  <IonApp>
      <IonContent>
        <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/ERP_Project/" component={Homet} exact/>
              <Route path="/ERP_Project/signup" component={SignUp} exact/>
              <Route path="/ERP_Project/logIn" component={Login} exact />
              <Route path="/ERP_Project/dashBoard" component={DashBoard} exact/>
              <Route path="/ERP_Project/finance" component={Finance} exact/>
              <Route path="/ERP_Project/parents" component={Parents} exact/>
              <Route path="/ERP_Project/service" component={Service} exact/>
              <Route path="/ERP_Project/service1" component={ServiceItem} exact/>
              <Route path="/ERP_Project/students" component={Students} exact/>
              <Route path="/ERP_Project/pay" component={Payments} exact/>

            </IonRouterOutlet>
            
        </IonReactRouter>
        
      </IonContent>
      
  </IonApp>
)}

export default App;
