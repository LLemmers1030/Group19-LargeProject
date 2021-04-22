import { useState } from "react";
import { Link } from "react-router-dom";
import "./verification.css";

const VerificationScreen = ({ }) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [code, setCode] = useState("");

    const verificationHandler = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
    }

    return (
        <div className="verifypassword-screen">
            <form
                onSubmit={verificationHandler}
                className="verifypassword-screen__form"
            >
                <h3 className="verifypassword-screen__title">Verify Your Account</h3>
                {error && <span className="error-message">{error} </span>}
                {success && (
                    <span className="success-message">
                        {success} <Link to="/login">Login</Link>
                    </span>
                )}
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        type="text"
                        required
                        id="code"
                        placeholder="Enter code"
                        autoComplete="true"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Verify Email
        </button>
            </form>
        </div>
    );
};

export default VerificationScreen;