import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

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
          className="col-md-10 p-4 pr-5 d-flex"
          style={{ position: "absolute", right: 0, backgroundColor: "#E5E5E5" }}
        >
          <h5 className="text-brand">Email</h5>
          <form onSubmit={handleSubmit}>
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
      </section>
    </>
  );
};

export default MakeAdmin;
