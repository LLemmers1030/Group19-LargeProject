import './index.css';
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import image1 from '../images/svg-login.svg'
import image2 from '../images/svg-reg.svg'
// import ListNavBar from '../components/ListNavBar';
//import rpng from './register.png';
//import './hook.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const SignInPage = ({ history }) => {
    //class SignInPage extends Component {
    const [regEmail, setRegEmail] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    // const [loginUsername, setLoginUsername] = useState("");

    const [Password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener('click', () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener('click', () => {
            container.classList.remove("sign-up-mode");
        });

        if (localStorage.getItem("authToken")) {
            history.push("/dashboard");
        }
    }, [history]);

    const validate = () => {
        //let isValid = true;
        const errors = {};

        //if ({ loginEmail } == undefined) {
        if (!{ loginEmail }) {
            console.log("no email");
            errors.loginEmail = "Please enter email";
        }

        if (Password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            errors.password = "Passwords do not match";
        }

        return errors;
    };

    const LoginHandler = async (e) => {
        e.preventDefault();
        const Email = loginEmail;
        const Password = loginPassword;
        console.log(Email);

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        try {
            // For production: /Users/login 
            // For local: http://localhost:8080/Users/Login
            const { data } = await axios.post("/Users/login",
                { Email, Password },
                config);

            // console.log(loginPassword);
            console.log(Email);

            localStorage.setItem("authToken", data.JWT);
            history.push("/dashboard");
        } catch (error) {
            setErrors(error.response.data);
            setTimeout(() => {
                setErrors("");
            }, 5000)
        }
    };

    const registerHandler = async (e) => {
        e.preventDefault();
        const Username = regUsername;
        const Email = regEmail;

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if (Password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setErrors("")
            }, 5000);
            return setErrors("Passwords do not match");
        }

        try {
            // For production: /Users/register 
            const { data } = await axios.post("http://localhost:8080/Users/register", { Username, Email, Password },
                config);

            localStorage.setItem("authToken", data.JWT);
            // push to enter verification code page
            history.push("/verification");
        } catch (error) {
            setErrors(error.response.data);
            setTimeout(() => {
                setErrors("");
            }, 5000)
        }
    };

    // render() {
    return (
        <div>
            <title>Sign In &amp; Sign Up</title>
            <link rel="stylesheet" href="style.css" />
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form" onSubmit={LoginHandler}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input
                                    type="email"
                                    required id="email"
                                    placeholder="Email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    tabIndex={1}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input
                                    type="password"
                                    required id="name"
                                    placeholder="Password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    tabIndex={2}
                                />
                            </div>
                            {errors && <p className="danger">{errors}</p>}
                            <button type="submit" className="btn btn-primary" tabIndex={3}>Login</button>
                            {/* <p className="social-text">Sign in with other platforms</p> */}

                            {/* Forgot password */}
                            <NavLink to="/forgotpassword"><p>Forgot password?</p></NavLink>
                            {/* <div className="social-media">
                                <a href="/#" className="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="/#" className="social-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div> */}
                        </form>
                        <form className="sign-up-form" onSubmit={registerHandler}>
                            <h2 className="title">Sign up</h2>

                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input
                                    type="email"
                                    required id="email"
                                    placeholder="Email"
                                    value={regEmail}
                                    onChange={(e) => setRegEmail(e.target.value)}

                                />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock" />

                                <input
                                    type="password"
                                    required id="name"
                                    placeholder="Password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock" />

                                <input
                                    type="password"
                                    required id="name"
                                    placeholder="Confirm password"
                                    value={confirmpassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}

                                />
                            </div>
                            {errors && <p className="danger">{errors}</p>}

                            <input type="submit" value="Submit" defaultValue="Sign up" className="btn solid" />
                            {/* <p className="social-text">Sign up with other platforms</p> */}
                            {/* <div className="social-media">
                                <a href="/#" className="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="/#" className="social-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div> */}
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3 className="top-title">New here?</h3>
                            {/* <p>Register here</p> */}
                            <button className="btn transparent" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src={image2} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3 className="top-title">One of us?</h3>
                            {/* <p>Login here</p> */}
                            <button className="btn transparent" id="sign-in-btn">Sign in</button>
                        </div>
                        <img src={image1} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SignInPage;