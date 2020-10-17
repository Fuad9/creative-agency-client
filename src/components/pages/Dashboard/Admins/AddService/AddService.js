import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import fileUpload from "../../../../../images/icons/cloud-upload-outline 1.png";
import { AuthContext } from "../../../../../App";

const AddService = () => {
  const history = useHistory();
  const [loggedInUser] = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  document.title = "Add a Service";

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
    formData.append("title", info.title);
    formData.append("description", info.description);
    formData.append("file", file);

    fetch("https://gentle-sands-61587.herokuapp.com/addServices", {
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
        className="col-8 col-md-10 col-lg-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
        }}
      >
        <div className="d-flex justify-content-between">
          <h5 className="text-brand">Add Services</h5>
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
            <div className="row">
              <div className="col-lg-5">
                <div className="form-group">
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter title"
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
                    placeholder="Enter Details"
                  ></input>
                </div>
              </div>
              <div className="form-group col-4">
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
            <button type="submit" className="btn btn-success ml-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
