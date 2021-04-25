import React, { useState, useEffect, Component } from "react";
import Navbar from "../components/NavbarD";
import Sidebar from "../components/SidebarD";

{/* function UserDashboard(props) { */ }
//const UserDashboard = (props) => {
//const UserDashboard = (props) => {
class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
  }

  openSidebar = () => {
    this.setState({ sidebarOpen: true })
  };

  closeSidebar = () => {
    this.setState({ sidebarOpen: false })
  };

  componentWillMount() {
    if (!localStorage.getItem("authToken")) {
      this.props.history.push("/signin");
    }
  }

  render() {
    return (
      <div className="containerDash">

        <Navbar sidebarOpen={this.state.sidebarOpen} openSidebar={this.openSidebar} />
        {this.props.children}

        <Sidebar sidebarOpen={this.state.sidebarOpen} closeSidebar={this.closeSidebar} />

      </div>
    );
  };
};

export default UserDashboard;
