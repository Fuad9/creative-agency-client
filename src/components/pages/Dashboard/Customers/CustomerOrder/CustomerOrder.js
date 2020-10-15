import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext, ServiceImageContext } from "../../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import fileUpload from "../../../../../images/icons/cloud-upload-outline 1.png";
import "./CustomerOrder.css";
import { useForm } from "react-hook-form";

const CustomerOrder = () => {
  // const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { serviceName, serviceDetails } = useParams();
  const [serviceImage, setServiceImage] = useContext(ServiceImageContext);
  const [loggedInUser] = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  // to set service name to setServiceImage in order to consume it from customerServieList
  setServiceImage(serviceName);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("service", info.service);
    formData.append("description", info.description);
    formData.append("price", info.price);
    formData.append("file", file);

    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result === true) {
          history.push("/customerService");
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
          <h5 className="text-danger">
            * Please fill out all the input fields and upload an image
          </h5>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              name="name"
              className="form-control"
              placeholder="Your name / company’s name"
              required
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="form-group">
            <input
              onBlur={handleBlur}
              type="text"
              name="service"
              className="form-control"
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
          <div className="d-flex">
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                name="price"
                className="form-control"
                placeholder="price"
                required
              />
            </div>
            <div className="form-group">
              <label className="file-upload p-2 text-center">
                <input
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  type="file"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Picture"
                  required
                />
                <img
                  src={fileUpload}
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />{" "}
                upload project file
              </label>
            </div>
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
