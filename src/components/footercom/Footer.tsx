import './Footer.css';
import linkedin from '/linkedin.png';
import insta from '/instagram.png';
import fb from '/facebook.png';
import X from '/twitter.png';
import { IonFooter, IonImg } from '@ionic/react';


const Footer: React.FC = () => {
  return (
    
    <>
      <div className="footer">
        <div className="logo">
          <h2>SchoolLogo</h2>
        </div>
        <div className="menu">
          <a href="/home">
            <h3>Home</h3>
          </a>
          <a href="/about">
            <h3>About</h3>
          </a>
          <a href="/service">
            <h3>Service</h3>
          </a>
          <a href="/contact">
            <h3>Contact Us</h3>
          </a>
        </div>
        <div className="socialmedia">
          <a href="/">
            <p>
              <IonImg src={linkedin} alt="" />
            </p>
          </a>
          <a href="/">
            <p>
              <IonImg src={insta} alt="" />
            </p>
          </a>
          <a href="/">
            <p>
              <IonImg src={fb} alt="" />
            </p>
          </a>
          <a href="/">
            <p>
              <IonImg src={X} alt="" />
            </p>
          </a>
        </div>
      
        <hr></hr>
      
        <div className="copyright">
          <p>@copyright {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
