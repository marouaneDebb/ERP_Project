import React from 'react';
import { IonHeader,IonButton,IonToolbar } from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar(){
  return (   
    <IonHeader>
      <div className="navbar navbar-expand-lg navbar-light bg-light col-lg-12">
          <div className="container-fluid">
            <a className="navbar-brand col-3 " href="#">SCHOOL LOGO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-lg-9" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 ">
                <li className="nav-item col-10 ">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item col-10 ">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item col-10">
                  <a className="nav-link " href="#">About Us</a>
                </li>
                <li className="nav-item col-4">
                  <a className="nav-link" href="/logIn"><IonButton className='B'>Register</IonButton></a>
                  
                </li>
              </ul>
            </div>
           
          </div>
          </div>
    </IonHeader>
  );
};

export default NavBar;
