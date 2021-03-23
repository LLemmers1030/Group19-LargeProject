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
                <input type="submit" value="Submit" defaultValue="Login" className="btn solid" />
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
                {/* <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div> */}
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="text" placeholder="Email" />
                </div>
                {/* <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="phoneNumber" placeholder="Phone Number" />
                </div> */}
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Re-Enter Password" />
                </div>
                <input type="submit" value="Submit" defaultValue="Sign up" className="btn solid" />
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
                <h3>New here?</h3>
                <p>Register here</p>
                <button className="btn transparent" id="sign-up-btn">Sign up</button>
              </div>
              <img src={image2} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us?</h3>
                <p>Login here</p>
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