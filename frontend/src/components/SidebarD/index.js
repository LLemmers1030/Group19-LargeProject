import "./sidebar.css";
import logo from "../../images/house.png";
import { useHistory, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faTimes,
  faTools,
  faPhoneAlt,
  faPowerOff,
  faHouseUser,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Modal, Button } from "antd";

{/* function Sidebar(props, { sidebarOpen, closeSidebar }) { */ }
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [errors, setErrors] = useState("");
  const [visible, setVisible] = useState(false);

  let history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    // or /login
    history.push("/");
  }

  const showModal = () => {
    setVisible(true);
  }

  const handleCancel = () => {
    setVisible(false);
  }

  const deleteHandler = async () => {
    const JWT = localStorage.getItem("authToken");

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      // need to send in jwt
      // For production: /Users/delete 
      // For local: http://localhost:8080/Users/delete
      const { data } = await axios.post("/Users/delete",
        { JWT },
        config);

      localStorage.removeItem("authToken");
      history.push("/");

    } catch (error) {
      setErrors(error.response.data);
      setTimeout(() => {
        setVisible(false);
        setErrors("");
      }, 5000)
    }

  }

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1 className="sidebar_heading">Jack Mobile Home Park</h1>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        />
      </div>

      <div className="sidebar__menu">
        <NavLink to="/dashboard" className="sidebar__link" activeClassName="active_menu_link" exact={true}>
          <FontAwesomeIcon icon={faHouseUser} />
          <p>Dashboard</p>
        </NavLink>
        <h2>UTILITIES</h2>
        <NavLink to="/dashboard/maintenance" className="sidebar__link" activeClassName="active_menu_link" >
          <FontAwesomeIcon icon={faTools} />
          <p>Maintenance Request</p>
        </NavLink>
        <h2>EXTRA</h2>
        <NavLink to="/dashboard/settings" className="sidebar__link" activeClassName="active_menu_link">
          <FontAwesomeIcon icon={faUserEdit} />
          <p>User Settings</p>
        </NavLink>
        <NavLink to="/dashboard/contact" className="sidebar__link" activeClassName="active_menu_link">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <p>Contact Us</p>
        </NavLink>
        {/* need to actually log user out */}
        <button onClick={logoutHandler} className="sidebar__logout">
          <FontAwesomeIcon icon={faPowerOff} />
          <p>Logout</p>
        </button>
        {/* Delete Account Button */}
        <button onClick={showModal} className="sidebar__delete">
          <FontAwesomeIcon icon={faTrashAlt} />
          <p>Delete Account</p>
        </button>
        <Modal 
          title="Delete Account" 
          visible={visible} 
          onOk={deleteHandler} 
          onCancel={handleCancel}
          footer={[
            <Button key="no" onClick={handleCancel}>
              NO
            </Button>,
            <Button key="yes" type="primary" onClick={deleteHandler} danger>
              DELETE MY ACCOUNT
            </Button>
          ]} 
        >
          <p>Are you sure you want to delete your account? This action cannot be undone.</p>
        </Modal>
      </div>
    </div>
  );
}

export default Sidebar;
