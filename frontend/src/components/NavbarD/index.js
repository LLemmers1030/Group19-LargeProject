import "./navbar.css";
import avatar from "../../images/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const [errors, setErrors] = useState("");
  useEffect(() => {
    LoadPage();
  });

  const LoadPage = async (e) => {

    const JWT = localStorage.getItem("authToken");
    console.log(JWT);

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      // const { data } = await axios.get("http://localhost:8080/Users/get",
      //   { JWT },
      //   config);
      // For production: /Users/get 
      const { data } = await axios.post("http://localhost:8080/Users",
        { JWT },
        config);

      console.log(data);
      //console.log(response);
      //console.log(response.data);

      //localStorage.setItem("authToken", data.token);
      //history.push("/dashboard");
    } catch (error) {
      setErrors(error.response.data);
      setTimeout(() => {
        setErrors("");
      }, 5000)
    }
  }

  //var displayName = localStorage.getItem("authToken");

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="navbar__left">
        <a className="active_link">User Portal</a>
      </div>
      <div className="navbar__right">
        <a>
          <i>{ }</i>
        </a>
        <a>
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
