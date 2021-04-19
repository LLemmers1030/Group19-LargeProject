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

const SignInPage = ({ history }) => {
    //class SignInPage extends Component {
    const [regEmail, setRegEmail] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [loginUsername, setLoginUsername] = useState("");

    const [Password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         errors: {}
    //     };
    // }


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

        // if (!input["email"]) {
        //     isValid = false;
        //     errors["email"] = "Please enter email";
        //     //errors["email"] = alert("Please enter email");
        // }

        // if (typeof input["email"] !== "undefined") {

        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        //     if (!pattern.test(input["email"])) {
        //         isValid = false;
        //         errors["email"] = "Please enter valid email address.";
        //         //errors["email"] = alert("Please enter valid email address.");
        //     }
        // }

        // if (!input["password"]) {
        //     isValid = false;
        //     errors["password"] = "Please enter your password";
        //     //errors["password"] = alert("Please enter your password");
        // }

        // if (!input["confirm_password"]) {
        //     isValid = false;
        //     errors["confirm_password"] = "Please confirm your password";
        //     //errors["confirm_password"] = alert("Please enter your confirm password");
        // }

        // if (typeof input["password"] != "undefined" && typeof input["confirm_password"] !== "undefined") {
        //     if (input["password"] !== input["confirm_password"]) {
        //         isValid = false;
        //         errors["password"] = "Passwords don't match";
        //         //errors["password"] = alert("Passwords don't match");
        //     }
        // }

        // this.setState({
        //     errors: errors
        // });

        //return isValid;
    };

    const LoginHandler = async (e) => {
        e.preventDefault();
        const Email = loginEmail;
        console.log(Email);
        //if (validate()) {
        //    console.log("yay?");
        //}
        //const validationErrors = validate();
        //const noErrors = Object.keys(validationErrors).length === 0;
        //setErrors(validationErrors);

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        try {
            const { data } = await axios.post("http://localhost:8080/Users/login",
                { Email, Password },
                config);

            localStorage.setItem("authToken", data.token);
            history.push("/dashboard");
        } catch (error) {
            //console.log(error);
            //console.log(error.response);
            //console.log(error.response.data);
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
            const { data } = await axios.post("http://localhost:8080/Users/register", { Username, Email, Password },
                config);

            localStorage.setItem("authToken", data.token);
            // push to login page ?
            history.push("/dashboard");
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
            {/* <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
            {/* <ListNavBar /> */}
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
                                    placeholder="Enter email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    tabIndex={1}
                                />
                            </div>
                            {/* {errors.email && <p className="text-danger">{errors.email}</p>} */}
                            {/* <p className="text-danger">{this.state.errors.email}</p> */}
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input
                                    type="text"
                                    required id="name"
                                    placeholder="Enter password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    tabIndex={2}
                                />
                            </div>
                            {errors && <p className="danger">{errors}</p>}
                            {/* <div className="danger">{this.state.errors.password}</div> */}
                            {/* <input type="submit" value="Submit" defaultValue="Login" className="btn solid" /> */}
                            <button type="submit" className="btn btn-primary" tabIndex={3}>Login</button>
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
                        <form className="sign-up-form" onSubmit={registerHandler}>
                            <h2 className="title">Sign up</h2>
                            {/* <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Username" />
                </div> */}
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input
                                    type="text"
                                    required id="name"
                                    placeholder="Enter username"
                                    value={regUsername}
                                    onChange={(e) => setRegUsername(e.target.value)}
                                />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input
                                    type="email"
                                    required id="email"
                                    placeholder="Enter email"
                                    value={regEmail}
                                    onChange={(e) => setRegEmail(e.target.value)}

                                />
                            </div>
                            {/* <p className="text-danger">{this.state.errors.email}</p> */}
                            {/* <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="phoneNumber" placeholder="Phone Number" />
                </div> */}

                            <div className="input-field">
                                <i className="fas fa-lock" />

                                <input
                                    type="text"
                                    required id="name"
                                    placeholder="Enter password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock" />

                                <input
                                    type="password"
                                    required id="name"
                                    placeholder="Enter confirm password"
                                    value={confirmpassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}

                                />
                            </div>
                            {errors && <p className="danger">{errors}</p>}
                            {/* <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" name="confirm_password" placeholder="Re-Enter Password"
                                    value={this.state.input.confirm_password} onChange={this.handleChange} />
                            </div>
                            <p className="danger">{this.state.errors.confirm_password}</p> */}
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
                            <h3 className="top-title">New here?</h3>
                            <p>Register here</p>
                            <button className="btn transparent" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src={image2} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3 className="top-title">One of us?</h3>
                            <p>Login here</p>
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


// class SignInPage extends Component {

//     constructor() {
//       super();

//       this.state = {
//         input: {},
//         errors: {}
//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       let input = this.state.input;
//       input[event.target.name] = event.target.value;

//       this.setState({
//         input
//       });
//     }

//     handleSubmit(event) {
//       event.preventDefault();

//       if (this.validate()) {
//         console.log(this.state);

//         let input = {};
//         input["email"] = "";
//         input["password"] = "";
//         input["confirm_password"] = "";
//         this.setState({ input: input });


//         alert('Form submitted');
//       }
//     }

//     validate() {
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;

//       if (!input["email"]) {
//         isValid = false;
//         errors["email"] = "Please enter email";
//         //errors["email"] = alert("Please enter email");
//       }

//       if (typeof input["email"] !== "undefined") {

//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

//         if (!pattern.test(input["email"])) {
//           isValid = false;
//           errors["email"] = "Please enter valid email address.";
//           //errors["email"] = alert("Please enter valid email address.");
//         }
//       }

//       if (!input["password"]) {
//         isValid = false;
//         errors["password"] = "Please enter your password";
//         //errors["password"] = alert("Please enter your password");
//       }

//       if (!input["confirm_password"]) {
//         isValid = false;
//         errors["confirm_password"] = "Please enter your confirm password";
//         //errors["confirm_password"] = alert("Please enter your confirm password");
//       }

//       if (typeof input["password"] != "undefined" && typeof input["confirm_password"] !== "undefined") {
//         if (input["password"] !== input["confirm_password"]) {
//           isValid = false;
//           errors["password"] = "Passwords don't match";
//           //errors["password"] = alert("Passwords don't match");
//         }
//       }

//       this.setState({
//         errors: errors
//       });

//       return isValid;
//     }

//     componentDidMount() {
//       const sign_in_btn = document.querySelector("#sign-in-btn");
//       const sign_up_btn = document.querySelector("#sign-up-btn");
//       const container = document.querySelector(".container");

//       sign_up_btn.addEventListener('click', () => {
//         container.classList.add("sign-up-mode");
//       });

//       sign_in_btn.addEventListener('click', () => {
//         container.classList.remove("sign-up-mode");
//       });

//     }

//     render() {
//       return (



//   }

// export default SignInPage;