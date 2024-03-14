import './Login.css';
import appleLogin from '../../images/login-apple.png';
import facebookLogin from '../../images/login-facebook.png';
import googleLogin from '../../images/login-google.png';

function Login() {
  return (
    <div className="App">
      <div class="main-container">
        <div class="main-left-container"></div>
        <div class="main-right-container">
          <div class="greeting-container">
            <div class="greeting">Hello, Again!</div>
            <div class="greeting-subtext">Login to your account</div>
          </div>
        
          <div class="text-box-container">
            <div class="text-box-title">Username</div>
            <input class="text-box" />
          </div>
          <div class="text-box-container">
            <div class="text-box-title" >Password</div>
            <input class="text-box" type="password"/>
          </div>
          <div class="forgot-password">Forgot Password?</div>  

          <div class="login-button">Login</div>
          <div class="register-now">Not a member? Register Now</div>
          <div class="social-media-login">
            <img src={appleLogin}/>          
            <img src={facebookLogin}/>          
            <img src={googleLogin}/>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


