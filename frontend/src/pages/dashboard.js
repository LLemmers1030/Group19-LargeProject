import React, { useState, useEffect } from "react";
import Navbar from "../components/NavbarD";
import Sidebar from "../components/SidebarD";

{/* function UserDashboard(props) { */ }
//const UserDashboard = (props) => {
const UserDashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  useEffect(() => {

    if (!localStorage.getItem("authToken")) {
      props.history.push("/signin");
    }
  }, [props.history]);



  return (
    <div className="containerDash">

      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      {props.children}

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

    </div>
  );
};

export default UserDashboard;
