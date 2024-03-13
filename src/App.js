import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="main-container">
        <div class="main-left-container"></div>
        <div class="main-right-container">
          <div class="greeting-container">
            <div class="greeting">Hello, Again!</div>
            <div class="greeting-subtext">Login to your account</div>
          </div>
          <div class="text-box">right side</div>
          <div class="text-box">right side</div>
          <div class="forgot-password">Forgot Password?</div>  

          <div class="login-button">Login</div>
          <div class="register-now">Not a member? Register Now</div>
          <div class="social-media-login">
            <img src="./images/login-apple.png"/>
            <img src="./images/login-facebook.png"/>
            <img src="./images/login-google.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


