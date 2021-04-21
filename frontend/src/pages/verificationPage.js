import { useState } from "react";
import { Link } from "react-router-dom";
import "./ResetPasswordScreen.css";

const VerificationScreen = ({ }) => {
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
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

    // const resetPasswordHandler = async (e) => {
    //     e.preventDefault();

    //     const config = {
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     };

    //     if (password !== confirmPassword) {
    //         setPassword("");
    //         setConfirmPassword("");
    //         setTimeout(() => {
    //             setError("");
    //         }, 5000);
    //         return setError("Passwords don't match");
    //     }

    //     console.log(match.params.resetToken);
    //     console.log(match.params);
    //     console.log(match);

    //     try {
    //         const { data } = await axios.put(
    //             `/api/auth/resetpassword/${match.params.resetToken}`,
    //             {
    //                 password,
    //             },
    //             config
    //         );

    //         //console.log(data);
    //         setSuccess(data.data);
    //     } catch (error) {
    //         setError(error.response.data.error);
    //         setTimeout(() => {
    //             setError("");
    //         }, 5000);
    //     }
    // };

    return (
        <div className="resetpassword-screen">
            <form
                onSubmit={verificationHandler}
                className="resetpassword-screen__form"
            >
                <h3 className="resetpassword-screen__title">Verify Your Account</h3>
                {error && <span className="error-message">{error} </span>}
                {success && (
                    <span className="success-message">
                        {success} <Link to="/login">Login</Link>
                    </span>
                )}
                <div className="form-group">
                    <label htmlFor="password">New Password:</label>
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
                {/* <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm New Password:</label>
                    <input
                        type="password"
                        required
                        id="confirmpassword"
                        placeholder="Confirm new password"
                        autoComplete="true"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div> */}
                <button type="submit" className="btn btn-primary">
                    Verify Email
        </button>
            </form>
        </div>
    );
};

export default VerificationScreen;