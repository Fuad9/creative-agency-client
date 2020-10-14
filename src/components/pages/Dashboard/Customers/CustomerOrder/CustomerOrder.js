import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const CustomerOrder = () => {
  const history = useHistory();
  const { serviceName } = useParams();
  const [loggedInUser] = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const [description, setDescription] = useState({
    description: "",
  });

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleDescription = (e) => {
    const newDescription = { ...description };
    newDescription.description = e.target.value;
    setDescription(newDescription);
  };

  const handleSubmit = () => {
    const newTask = {
      ...loggedInUser,
      ...info,
      ...description,
      ...file,
    };
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          history.push("/");
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
              type="email"
              className="form-control"
              name="email"
              defaultValue={loggedInUser.email}
              placeholder="Your email address"
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="service"
              defaultValue={serviceName}
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="price"
              placeholder="price"
            />
          </div>
          <div className="form-group">
            <textarea
              onBlur={handleDescription}
              name="description"
              className="form-control"
              id=""
              cols="30"
              rows="10"
              placeholder="Project Details"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="btn btn-brand">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerOrder;
