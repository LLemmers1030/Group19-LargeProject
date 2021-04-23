// @ts-nocheck
import { useState, Component } from "react";
import axios from "axios";
import "./ForgotPasswordScreen.css";

//const ForgotPasswordScreen = ({ props }) => {
class ForgotPasswordScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      error: "",
      email: "",
      success: ""
    };
  }

  //const forgotPasswordHandler = async (e) => {
  forgotPasswordHandler = async (e) => {
    const Email = this.state.email;
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {

      // http://localhost:8080/Passwords/reset
      console.log(this.state.email);
      const { data } = await axios.post(
        "/Passwords/reset",
        { Email },
        config
      );

      this.setState({ success: "Check email to reset password" });
    } catch (error) {
      //setError(error.response.data.error);
      this.setState({ error: error.response.data });
      //this.setState({ email: email });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 5000);
    }
  };

  render() {
    return (
      <div className="forgotpassword-screen" >
        <form
          onSubmit={this.forgotPasswordHandler}
          className="forgotpassword-screen__form"
        >
          <h3 className="forgotpassword-screen__title">Forgot Password</h3>
          {this.state.error && <span className="error-message">{this.state.error}</span>}
          <div className="form-group">
            <p className="forgotpassword-screen__subtext">
              Please enter the email address you registered your account with.
              You will receive an email to reset your password.
          </p>
            <label htmlFor="email" className="forgot-email">Email:</label>
            <input
              className="forgot-password-text-box"
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={this.state.email}
              //onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => this.setState({ email: e.target.value })}

            />
          </div>
          {this.state.success && <span className="success-message">{this.state.success}</span>}
          <button type="submit" className="btn btn-primary">
            Send Email
        </button>
        </form>
      </div>
    );
  };
}

export default ForgotPasswordScreen;