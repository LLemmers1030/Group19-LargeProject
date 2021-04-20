import React, { useState } from "react";
import Navbar from "../components/NavbarD";
import Sidebar from "../components/SidebarD";
import axios from 'axios';

{/* function UserDashboard(props) { */ }
const UserDashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };



  return (
    <div className="containerDash">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      {props.children}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default UserDashboard;
