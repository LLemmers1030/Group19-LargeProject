import { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./verification.css";

class VerificationScreen extends Component {
    //const [errors, setErrors] = useState("");

    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }

    constructor(props) {
        super(props);
        this.state = { errors: "" };
    }

    componentDidMount = async () => {
        //this.props.getVerifyUser(this.props.matchMedia.params.token);
        //console.log("token? " + this.props.matchMedia.params.token);
        console.log(this.props);
        //const uniqueString = this.props.match.params.token;
        const uniqueString = this.props.match.params.token;
        console.log(uniqueString);

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        try {
            // For production:  
            // For local: http://localhost:8080/Users/Login
            const { data } = await axios.post("http://localhost:8080/Users/verify",
                { uniqueString },
                config);

            console.log(data);

            //localStorage.setItem("authToken", data.JWT);
            //history.push("/dashboard");
        } catch (error) {
            //setErrors(error.response.data);
            this.setState({ errors: error.response.data })
            setTimeout(() => {
                this.this.setState("");
            }, 5000)
        }


    }

    render() {
        return (

            <div className="verifypassword-screen">
                <form>


                    <div className="verifypassword-screen__form">
                        <h3 className="verifypassword-screen__title">Your account has been verified. Proceed to login.</h3>

                        <div className="button-area">
                            <Link to="/signin">
                                <button type="submit" className="btn btn-primary ">
                                    Return to login
                            </button>
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        );
    };

};

export default VerificationScreen;

// 
//     const VerificationScreen = ({ props }) => {
//     // const [password, setPassword] = useState("");
//     // const [confirmPassword, setConfirmPassword] = useState("");
//     const [error, setError] = useState("");
//     //const [success, setSuccess] = useState("");
//     //const [code, setCode] = useState("");


//     // const verificationHandler = async (e) => {
//     //     e.preventDefault();

//     //     const config = {
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //         },
//     //     };
//     // }

//     return (
//         <div className="verifypassword-screen">
//                 <h3 className="verifypassword-screen__title">Your account has been verified. Proceed to login.</h3>
//                 {error && <span className="error-message">{error} </span>}
//                 <Link to="/verify"><button type="submit" className="btn btn-primary">
//                     Return to login
//         </button></Link>
//         </div>
//         // <div className="verifypassword-screen">
//         //     <form
//         //         onSubmit={verificationHandler}
//         //         className="verifypassword-screen__form"
//         //     >
//         //         <h3 className="verifypassword-screen__title">Verify Your Account</h3>
//         //         {error && <span className="error-message">{error} </span>}
//         //         {success && (
//         //             <span className="success-message">
//         //                 {success} <Link to="/login">Login</Link>
//         //             </span>
//         //         )}
//         //         <div className="form-group">
//         //             <label htmlFor="password"></label>
//         //             <input
//         //                 type="text"
//         //                 required
//         //                 id="code"
//         //                 placeholder="Enter code"
//         //                 autoComplete="true"
//         //                 value={code}
//         //                 onChange={(e) => setCode(e.target.value)}
//         //             />
//         //         </div>
//         //         <button type="submit" className="btn btn-primary">
//         //             Verify Email
//         // </button>
//         //     </form>
//         // </div>
//     );
// };

// export default VerificationScreen;