import { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./verification.css";

class VerificationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: "" };
    }

    componentDidMount = async () => {
        console.log(this.props);
        const uniqueString = this.props.match.params.token;
        console.log(uniqueString);

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        try {
            // For production: https://group19-housingmanager.herokuapp.com/Users/verify 
            // For local: http://localhost:8080/Users/verify
            const { data } = await axios.post("/Users/verify",
                { uniqueString },
                config);

            // that might fix it
            console.log(data);
            console.log("are you working >:(");

            localStorage.setItem("authToken", data.JWT);
            //localStorage.removeItem("authToken");
            //history.push("/dashboard");
        } catch (error) {
            //setErrors(error.response.data);
            this.setState({ errors: error.response.data })
            setTimeout(() => {
                this.setState("");
            }, 5000)
        }
    }

    render() {
        return (

            <div className="verifypassword-screen">
                <form>
                    <div className="verifypassword-screen__form">
                        <h3 className="verifypassword-screen__title">Your account has been verified. Click here to view your dashboard.</h3>

                        <div className="button-area">
                            <Link to="/signin">
                                <button type="submit" className="btn btn-primary ">
                                    View Dashboard
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