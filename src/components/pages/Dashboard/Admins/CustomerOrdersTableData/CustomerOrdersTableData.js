import React from "react";
import { Form } from "react-bootstrap";
import "./CustomerOrderTableData.css";

const CustomerOrdersTableData = ({ order }) => {
  const handleStatus = (e) => {
    fetch("https://gentle-sands-61587.herokuapp.com/statusUpdate", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: e.target.value,
        id: order._id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <tr>
        <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.service}</td>
        <td>{order.description}</td>

        <td>
          {order.status == "Pending" && (
            <Form.Control
              as="select"
              className="text-danger"
              onChange={handleStatus}
            >
              <option selected style={{ color: "#FF4545" }}>
                Pending
              </option>
              <option style={{ color: "#009444" }}>Done</option>
              <option style={{ color: "#FFBD3E" }}>On going</option>
            </Form.Control>
          )}
          {order.status == "Done" && (
            <Form.Control
              as="select"
              className="text-success"
              onChange={handleStatus}
            >
              <option style={{ color: "#FF4545" }}>Pending</option>
              <option selected style={{ color: "#009444" }}>
                Done
              </option>
              <option style={{ color: "#FFBD3E" }}>On going</option>
            </Form.Control>
          )}
          {order.status == "On going" && (
            <Form.Control
              as="select"
              className="text-warning"
              onChange={handleStatus}
            >
              <option style={{ color: "#FF4545" }}>Pending</option>
              <option style={{ color: "#009444" }}>Done</option>
              <option selected style={{ color: "#FFBD3E" }}>
                On going
              </option>
            </Form.Control>
          )}
        </td>
      </tr>
    </>
  );
};

export default CustomerOrdersTableData;
