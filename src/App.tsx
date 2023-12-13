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
<<<<<<< HEAD
import SideMenu from './components/sidemenu/sidemenu';
import Parent from './components/parents/parent/parent';
import Parents from './components/parents/parents';
=======
import DashBoard from './components/dashboard/Dashboard';
>>>>>>> 559192e5ebb2f384a4bcdb398d8e355e7850003f
setupIonicReact();

function App(){
  return (
  <IonApp>
      <IonContent>
        <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" component={Homet} exact/>
              <Route path="/account" component={Account} exact/>
              <Route path="/logIn" component={LogIn} exact />
<<<<<<< HEAD
              <Route path="/sidemenu" component={SideMenu} exact/>
              <Route path="/parent" component={Parent} exact/>
              <Route path="/parents" component={Parents} exact/>


=======
              <Route path="/dashBoard" component={DashBoard} exact/>
>>>>>>> 559192e5ebb2f384a4bcdb398d8e355e7850003f
            </IonRouterOutlet>
            
        </IonReactRouter>
        
      </IonContent>
      
  </IonApp>
)}

export default App;
