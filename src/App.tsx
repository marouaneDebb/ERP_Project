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
import Students_Page from './components/page/students/Students_Page';
setupIonicReact();

function App(){
  return (
  <IonApp>
      <IonContent>
        <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" component={Homet} exact/>
              <Route path="/students" component={Students_Page} exact/>
              <Route path="/account" component={Account} exact/>
              <Route path="/logIn" component={LogIn} exact />
              <Route path="/dashBoard" component={DashBoard} exact/>
              <Route path="/finance" component={Finance} exact/>
              <Route path="/parents" component={Parents} exact/>


            </IonRouterOutlet>
            
        </IonReactRouter>
        
      </IonContent>
      
  </IonApp>
)}

export default App;
