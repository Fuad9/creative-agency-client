import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);

  const handleBlur = (e) => {
    const newInfo = { ...email };
    newInfo[e.target.name] = e.target.value;
    setEmail(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmail = { ...email };

    fetch("https://gentle-sands-61587.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newEmail),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          history.push("/home");
        }
      });
  };

  return (
    <>
      <section className="container-fluid row">
        <Sidebar />
        <div
          className="col-8 col-md-10 col-lg-10 p-4 pr-5"
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "#E5E5E5",
            height: "100vh",
          }}
        >
          <div className="d-flex justify-content-between">
            <h5 className="text-brand">Add Services</h5>
            <h4>{loggedInUser.name}</h4>
          </div>
          <div>
            <h6 htmlFor="input">Email</h6>
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
                placeholder="join@gmail.com"
              />
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeAdmin;
