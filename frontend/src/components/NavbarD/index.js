import "./navbar.css";
import avatar from "../../images/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Navbar = (props, { sidebarOpen, openSidebar }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const loadName = async (e) => {

    const JWT = localStorage.getItem("authToken");

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };
    try {
      // For production: /Users/get 
      const { data } = await axios.post("http://localhost:8080/Users",
        { JWT },
        config);

      localStorage.setItem("authToken", data.JWT);

      setEmail(data.Email);

      if (email !== "") {
        setName(email.substring(0, email.lastIndexOf("@")));
      }

    } catch (error) {
      setErrors(error.response.data);
      setTimeout(() => {
        setErrors("");
      }, 5000)
    }
  }

  useEffect(() => {
    loadName();
    setLoading(true);


    console.log(name);
  }, [name, []]);



  return loading ? (
    // <div>
    <nav className="navbar" >
      { () => loadName()}
      <div className="nav_icon" onClick={() => openSidebar()}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="navbar__left">
        <a className="active_link">User Portal</a>
      </div>
      <div className="navbar__right">
        <a>
          <i >{name}</i>
        </a>
        <a>
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </ nav>
    // </div>
  ) : (
    <div></div>
  );
};

export default Navbar;
