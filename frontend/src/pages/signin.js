// import React from 'react'
// // import './App.css';
// import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

// class SignInPage extends React.Component {
//     state = {
//         signin: true,
//     }
//     render() {
//         const { signin = true } = this.state;
//         return (
//             <div className="zama-form">
//                 <h2>Jack Mobile Home Park</h2>
//                 <div className={`container ${!signin ? 'right-panel-active' : ''}`} id="container">
//                     <div className="form-container sign-up-container">
//                         <form action="/#">
//                             <h1>Create Account</h1>
//                             <div className="social-container">
//                                 <a href="/#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
//                                 <a href="/#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
//                                 <a href="/#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
//                             </div>
//                             <span>or use your email for registration</span>
//                             <input type="text" placeholder="Name" />
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <button className="sign-button">Sign Up</button>
//                         </form>
//                     </div>
//                     <div className="form-container sign-in-container">
//                         <form action="/#">
//                             <h1>Sign in</h1>
//                             <div className="social-container">
//                                 <a href="/#" className="social"><FontAwesomeIcon icon={faTwitter} /></a>
//                                 <a href="/#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
//                                 <a href="/#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
//                             </div>
//                             <span>or use your account</span>
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <a href="/#">Forgot your password?</a>
//                             <button className="sign-button">Sign In</button>
//                         </form>
//                     </div>
//                     <div className="overlay-container">
//                         <div className="overlay">
//                             <div className="overlay-panel overlay-left">
//                                 <h1>Welcome Back!</h1>
//                                 <p>To keep connected with us please login with your personal info</p>
//                                 <button className="ghost" onClick={e => this.setState({ signin: true })}>Sign In</button>
//                             </div>
//                             <div className="overlay-panel overlay-right">
//                                 <h1>Hello, Friend!</h1>
//                                 <p>Enter your personal details and start journey with us</p>
//                                 <button className="ghost" onClick={e => this.setState({ signin: false })}>Sign Up</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// // React.render(<Form />, document.getElementById('app'));

// export default SignInPage;



import './index.css';
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import image1 from '../images/svg-6.svg'
import image2 from '../images/svg-7.svg'
//import rpng from './register.png';
//import './hook.js';


class SignInPage extends Component {

  componentDidMount() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener('click', () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove("sign-up-mode");
    });

  }

  render() {
    return (
      <div>
        {/* <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <title>Sign In &amp; Sign Up</title>
        <link rel="stylesheet" href="style.css" />
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" defaultValue="Login" className="btn solid" />
                <p className="social-text">Sign in with other platforms</p>
                <div className="social-media">
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </form>
              <form className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" defaultValue="Sign up" className="btn solid" />
                <p className="social-text">Sign up with other platforms</p>
                <div className="social-media">
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="/#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Welcome</p>
                <button className="btn transparent" id="sign-up-btn">Sign up</button>
              </div>
              <img src={image2} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Lorem stuff</p>
                <button className="btn transparent" id="sign-in-btn">Sign in</button>
              </div>
              <img src={image1} className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default SignInPage;

/*function App() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign In &amp; Sign Up</title>
        <link rel="stylesheet" href="style.css" />
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" defaultValue="Login" className="btn solid" />
                <p className="social-text">Sign in with other platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </form>
              <form className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" defaultValue="Sign up" className="btn solid" />
                <p className="social-text">Sign up with other platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Welcome</p>
                <button className="btn transparent" id="sign-up-btn">Sign up</button>
              </div>
              <img src="img/house.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Lorem stuff</p>
                <button className="btn transparent" id="sign-in-btn">Sign in</button>
              </div>
              <img src="img/register.png" className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }*/