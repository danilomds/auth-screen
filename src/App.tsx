import React from 'react';
import { FiLock, FiMail, FiFacebook, FiTwitter } from 'react-icons/fi';
import './App.css';

function App() {
  return (
    <div className="main">
      <img src="https://besthqwallpapers.com/Temp/23-3-2021/3d-blue-padlock-computer-security-encryption-3d-lock-security-blue-background-besthqwallpapers.com-2048x1536.jpg" alt="cadeado" />
    <div className="container">
      <h2>Login</h2>
        <div className="form">
          <div className="input-field">
            <FiMail className="icons" />
            <input type="text" name="email" id="input" placeholder=" E-mail" />
            <div className="underline" ></div>
          </div>

          <div className="input-field">
            <FiLock className="icons" />
            <input type="password" name="password" id="password" placeholder=" Password" />
            <div className="underline" ></div>
          </div>
            <input type="submit" value="Entrar" />
        </div>  
        
        <div className="footer">
          <span>Ou conecte-se com midias sociais</span>
          <div className="social-field twitter">
            <a href="#">
              <FiTwitter className="icons" />
              Login com Twitter
              </a> 
          </div>

          <div className="social-field facebook">
            <a href="#">
              <FiFacebook className="icons" />
              Login com Facebook
              </a>
          </div>

        </div>     
     </div>

    </div>
    

    
  );
}

export default App;
