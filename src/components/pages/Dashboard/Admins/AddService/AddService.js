import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const AddService = () => {
  const history = useHistory();
  // const { serviceName } = useParams();
  // const [loggedInUser] = useContext(AuthContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

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

    fetch("http://localhost:5000/addServices", {
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
        <h5 className="text-brand">Add Services</h5>
        <form onSubmit={handleSubmit}>
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
          <div className="form-group">
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
