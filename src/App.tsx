import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact,IonRouterOutlet, IonFooter } from '@ionic/react';
import Home from './components/home';
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
import Homet from './components/homet';
import NavBar from './components/navBar';
import LogIn from './components/LogIn';
import Account from './components/ActivateAccount';
import Footer from './components/footercom/Footer'
import { IonReactRouter } from '@ionic/react-router';
import SideMenu from './components/sidemenu/sidemenu';
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
              <Route path="/sidemenu" component={SideMenu} exact/>
            </IonRouterOutlet>
            
        </IonReactRouter>
        
      </IonContent>
      
  </IonApp>
)}

export default App;
