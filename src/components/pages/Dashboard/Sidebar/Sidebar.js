import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext, ServiceContext } from "../../../../App";
import orderIcon from "../../../../images/icons/shopping-cart.png";
import logo from "../../../../images/logos/logo.png";
import serviceIcon from "../../../../images/icons/Group 1360.png";
import reviewIcon from "../../../../images/icons/message-square-outline 1.png";
import plusIcon from "../../../../images/icons/plus 1.png";
import peopleIcon from "../../../../images/icons/person-add-outline 1.png";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  const [servicesInfo] = useContext(ServiceContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/home">
            <img src={logo} alt="" className="w-100" />
          </Link>
        </li>
        <li>
          <NavLink to="/order" activeStyle={{ color: "green" }}>
            <img src={orderIcon} alt="" /> <span>Order</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customerService" activeStyle={{ color: "green" }}>
            <img src={serviceIcon} alt="" /> <span>Service List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/addReview" activeStyle={{ color: "green" }}>
            <img src={reviewIcon} alt="" /> <span>Review</span>
          </NavLink>
        </li>
        {isAdmin && (
          <div>
            <li>
              <NavLink to="/allServices" activeStyle={{ color: "green" }}>
                <img src={serviceIcon} alt="" /> <span>Service List</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/addService" activeStyle={{ color: "green" }}>
                <img src={plusIcon} alt="" /> <span>Add Service</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/makeAdmin" activeStyle={{ color: "green" }}>
                <img src={peopleIcon} alt="" /> <span>Make Admin</span>
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
