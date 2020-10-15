import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { AuthContext, ServiceContext } from "../../../../App";
import orderIcon from "../../../../images/icons/shopping-cart.png";
import logo from "../../../../images/logos/logo.png";

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
          <NavLink to="/customerService" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/addReview" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Review</span>
          </NavLink>
        </li>
        <div>
          <li>
            <NavLink to="/allServices" className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Service List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/addService" className="text-white">
              <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/makeAdmin" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
            </NavLink>
          </li>
        </div>
      </ul>
      <div>
        <NavLink to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

//this will be applied only for admins
// {isAdmin && (
//   <div>
//     <li>
//       <NavLink to="/allServices" className="text-white">
//         <FontAwesomeIcon icon={faCalendar} /> <span>Service List</span>
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/patient" className="text-white">
//         <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/prescriptions" className="text-white">
//         <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
//       </NavLink>
//     </li>
//   </div>
// )}
