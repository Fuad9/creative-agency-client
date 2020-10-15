import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const CustomerReview = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("company", info.company);
    formData.append("description", info.description);

    fetch("http://localhost:5000/addReviews", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          history.push("/home");
        }
      });
  };

  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Order</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Your name / company’s name"
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="company"
              placeholder="Company’s name, Designation"
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              name="description"
              className="form-control"
              id=""
              cols="30"
              rows="10"
              placeholder="Project Details"
            ></input>
          </div>
          <button type="submit" className="btn btn-brand">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerReview;
