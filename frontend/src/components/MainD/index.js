import "./main.css";
import welcome from '../../images/welcome.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Main(props) {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  //const [email, setEmail] = useState("");

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
      // Local "http://localhost:8080/Users
      // For production: /Users/get 
      const { data } = await axios.post("/Users",
        { JWT },
        config);

      localStorage.setItem("authToken", data.JWT);

      const first = data.FirstName;
      const last = data.LastName;

      if ((first != null && last != null) && (first != "" && last != "")) {
        setMessage(`Hello ${first} ${last}`);
      } else {
        setMessage("Hello!");
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
  }, []);


  return loading ? (
    <main>
      { () => loadName()}
      <div className="main-container">

        <div className="main__title">
          <div>
            <div className="d-row">
              <h1 className="d-title">{message}</h1>
            </div>

            <div className="d-row">
              <img className=" dashboardImg" src={welcome}></img>
            </div>

            <div className="d-row">
              <p className="dash-blurb" >
                Thank you for creating an account with Jack Mobile Home Park!
                In the sidebar you will be able to create maintennance requests,
                edit your user settings, and contact the owners for all of your
                housing needs!
            </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  ) : (
    <div></div>
  );
};

export default Main;