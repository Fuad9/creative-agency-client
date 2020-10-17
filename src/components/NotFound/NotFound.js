import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center align-content-center mt-5">
      <div className="tex-center">
        <h1>Sorry, 404 not found</h1>
        <button className="btn btn-brand" onClick={() => history.push("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
