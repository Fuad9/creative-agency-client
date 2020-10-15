import React from "react";

const CustomerOrdersTableData = ({ ordersInfo }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email ID
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            Project Details
          </th>
          <th className="text-secondary" scope="col">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {ordersInfo.map((order) => (
          <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td>{order.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerOrdersTableData;
