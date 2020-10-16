import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import google from "../../../images/logos/GoogleIcon.png";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManager";
import "./Login.css";
import { AuthContext } from "../../../App";
// import logo from "../../Images/logos/Group 1329.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  initializeLoginFramework();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Link to="/home">
          <img style={{ width: "200px" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="auth">
        <p>Login With</p>
        <img src={google} alt="" />
        <div className="auth-button">
          <button onClick={googleSignIn}>Continue with Google</button>
          <p className="text-center mr-auto">
            Don’t have an account?<Link to="/login"> Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
