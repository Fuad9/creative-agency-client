import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const CustomerReview = () => {
  const [loggedInUser] = useContext(AuthContext);
  const history = useHistory();
  const [info, setInfo] = useState({});

  document.title = "Review Us!!!";

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("image", loggedInUser.photo);
    formData.append("company", info.company);
    formData.append("description", info.description);

    fetch("https://gentle-sands-61587.herokuapp.com/addSingleReview", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          alert("Reviews Sent Successfully");
        }
      });
  };

  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-8 col-md-10 col-lg-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <div className="d-flex justify-content-between">
          <h5 className="text-brand">Add Review</h5>
          <h4>{loggedInUser.name}</h4>
        </div>
        <div
          className="mt-5"
          style={{
            backgroundColor: "#F4FDFB",
            height: "100vh",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Your name / company’s name"
                required
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="company"
                placeholder="Company’s name, Designation"
                required
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                name="description"
                className="form-control"
                cols="30"
                rows="10"
                placeholder="Project Details"
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-brand">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
