import { useState, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ResetPasswordScreen.css";

//const ResetPasswordScreen = ({ match }) => {
class ResetPasswordScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      token: "",
      password: "",
      confirmPassword: "",
      error: ""
    }
  }

  componentDidMount = async () => {

    this.setState({
      email: this.props.match.params.email,
      token: this.props.match.params.token
    });
  }

  resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ password: this.state.password });
      this.setState({ confirmPassword: this.state.confirmPassword });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 5000);
      return this.setState({ error: "Passwords don't match" });
    }

    const Password = this.state.password;
    const Email = this.state.email;
    const Token = this.state.token;

    try {
      // need to send email, new password, and email specific token
      const { data } = await axios.post(
        "http://localhost:8080/Passwords/resetValidate",
        {
          Email, Password, Token
        },
        config
      );

      //console.log(data);
      localStorage.removeItem("authToken");
      this.props.history.push({ pathname: "/signin" });
      //setSuccess(data.data);
    } catch (error) {
      this.setState({ error: error.response.data })
      setTimeout(() => {
        this.setState({ error: "" })
      }, 5000);
    }
  };

  render() {
    return (
      <div className="resetpassword-screen">
        <form
          onSubmit={this.resetPasswordHandler}
          className="resetpassword-screen__form"
        >
          <h3 className="resetpassword-screen__title">Reset Password</h3>

          <div className="form-group1">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              required
              id="password"
              placeholder="Enter new password"
              autoComplete="true"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="form-group2">
            <label htmlFor="confirmpassword">Confirm New Password:</label>
            <input
              type="password"
              required
              id="confirmpassword"
              placeholder="Confirm new password"
              autoComplete="true"
              value={this.state.confirmPassword}
              onChange={(e) => this.setState({ confirmPassword: e.target.value })}
            />
          </div>
          {this.state.error && <span className="error-message">{this.state.error} </span>}
          {this.state.success && (
            <span className="success-message">
              {this.state.success} <Link to="/signin">Login</Link>
            </span>
          )}
          <button type="submit" className="btn btn-primary">
            Reset Password
        </button>
        </form>
      </div>
    );
  };
}

export default ResetPasswordScreen;