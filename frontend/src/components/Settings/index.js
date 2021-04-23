import "./settings.css";
import hello from "../../images/hello.svg";
import { Form, Input, Button, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

const tailLayout2 = {
  wrapperCol: {
    offset: 7,
    span: 10,
  },
};


const Settings = () => {
  const [infoMessage, setInfoMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [errors, setErrors] = useState("");
  //const [JWT, setJWT] = useState("");
  const [loading, setLoading] = useState(false);
  //const [userData, setUserData] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [pass, setPass] = useState("");

  var JWT = "";

  // For first name and last name
  const onFinish = async (values) => {
    var FirstName;
    var LastName;

    if (values.firstName == null) {
      FirstName = first;
    } else {
      FirstName = values.firstName;
    }

    if (values.lastName == null) {
      LastName = last;
    } else {
      LastName = values.lastName;
    }

    const Password = pass;
    //const JWT = localStorage.getItem("authToken");
    //console.log(JWT);

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      // need to send in password, first name, last name, and jwt
      // For production: /Users/login 
      // For local: http://localhost:8080/Users/edit
      const { data } = await axios.post("/Users/edit",
        { Password, FirstName, LastName, JWT },
        config);

      localStorage.setItem("authToken", data.JWT);
      setInfoMessage("User information has been updated.");
      //history.push("/dashboard");
    } catch (error) {
      setErrors(error.response.data);
      setTimeout(() => {
        setErrors("");
      }, 5000)
    }
  };


  const loadUser = async (e) => {
    JWT = localStorage.getItem("authToken");

    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };
    try {
      // Local : "http://localhost:8080/Users"
      // For production: /Users/get 
      const { data } = await axios.post("/Users",
        { JWT },
        config);

      localStorage.setItem("authToken", data.JWT);
      console.log("testing");
      console.log(data);
      setPass(data.Password);
      setFirst(data.FirstName);
      setLast(data.LastName);

    } catch (error) {
      setErrors(error.response.data);
      setTimeout(() => {
        setErrors("");
      }, 5000)
    }
  };

  useEffect(() => {
    loadUser();
    setLoading(true);
  }, [pass, first, last, []]);

  // For first name and last name
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // For password and confirm password
  const onFinish2 = async (passwords) => {
    const newPass = passwords.password;
    const newPassConfirm = passwords.confirmPassword;

    var Password = "";
    var FirstName = "";
    var LastName = "";


    if (newPass !== newPassConfirm) {
      // setPassword("");
      // setConfirmPassword("");
      setPassMessage("The passwords do not match");
    } else {
      Password = newPass;
      FirstName = first;
      LastName = last;
      setPassMessage("Password has been updated");
    }


    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    try {
      // need to send in password, first name, last name, and jwt
      // For production: /Users/login 
      // For local: http://localhost:8080/Users/edit
      const { data } = await axios.post("/Users/edit",
        { Password, FirstName, LastName, JWT },
        config);

      localStorage.setItem("authToken", data.JWT);
      //history.push("/dashboard");
    } catch (error) {
      setErrors(error.response.data);
      setTimeout(() => {
        setErrors("");
      }, 5000)
    }

  };

  // For password and confirm password
  const onFinishFailed2 = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return loading ? (
    <main>
      <div className="main__container">

        <h1 className="user_settings">User Settings</h1>
        <div className="main__title">
          <img src={hello} alt="hello" />

          <Row className="main__greeting" >
            <Col>
              <Form
                {...layout}
                name="basic1"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>


                <p className="form-name-title">Update first name or last name</p>
                <Col span={13}>
                  {/* First name*/}
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: false,
                        message: 'Please input your username!',
                      },
                    ]}>
                    <Input placeholder={first} />
                  </Form.Item>
                </Col>

                <Col span={13}>

                  {/* Last name */}
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: false,
                        message: 'Please input your last name!',
                      },
                    ]}>
                    <Input placeholder={last} />
                  </Form.Item>
                </Col>
                {infoMessage && <p className="info-message">{infoMessage}</p>}

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" className="name-butt">
                    Change Name
                </Button>
                </Form.Item>

                {/* need message here telling user they can reset password if they'd like */}
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form
                {...layout}
                name="basic2"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish2}
                onFinishFailed={onFinishFailed2}
              >
                <p className="form-password-title">Reset password</p>

                <Col span={22}>
                  {/* New password */}
                  <Form.Item
                    label="New Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your new password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col span={22}>

                  {/* Confirm password */}
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                {passMessage && <p className="pass-message">{passMessage}</p>}

                <Form.Item {...tailLayout2}>
                  <Button type="primary" htmlType="submit">
                    Reset Password
                </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  ) : (
    <div>lol</div>
  );
};

export default Settings;