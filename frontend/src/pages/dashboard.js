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
      sidebarOpen: false,
      setsidebarOpen: false
    }
  }

  //const [sidebarOpen, setsidebarOpen] = useState(false);

  // const openSidebar = () => {
  //   setsidebarOpen(true);
  // };

  // const closeSidebar = () => {
  //   setsidebarOpen(false);
  // };

  openSidebar = () => {
    this.setState({ setsidebarOpen: true })
  };

  closeSidebar = () => {
    this.setState({ setsidebarOpen: false })
  };

  componentWillMount() {
    if (!localStorage.getItem("authToken")) {
      this.props.history.push("/signin");
    }
  }


  // useEffect(() => {

  //   if (!localStorage.getItem("authToken")) {
  //     props.history.push("/signin");
  //   }
  // }, [props.history]);


  render() {
    return (
      <div className="containerDash">

        <Navbar sidebarOpen={this.sidebarOpen} openSidebar={this.openSidebar} />
        {this.props.children}

        <Sidebar sidebarOpen={this.sidebarOpen} closeSidebar={this.closeSidebar} />

      </div>
    );
  };
};

export default UserDashboard;
