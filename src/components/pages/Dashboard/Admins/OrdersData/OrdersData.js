import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../App";
import Loading from "../../../../utilities/Loading";
import Sidebar from "../../Sidebar/Sidebar";
import CustomerOrdersTableData from "../CustomerOrdersTableData/CustomerOrdersTableData";
import "./OrderData.css";

const OrdersData = () => {
  const [ordersInfo, setOrdersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showOrders"
        );
        setOrdersInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="ml-auto col-8 col-md-10 col-lg-10 mt-3">
        <div className="d-flex justify-content-between">
          <h5 className="text-brand">Order</h5>
          <h4>{loggedInUser.name}</h4>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <table className="table table-borderless">
            <thead style={{ backgroundColor: "lightgray" }}>
              <tr>
                <th
                  className="text-secondary"
                  style={{ width: "10%" }}
                  scope="col"
                >
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
                <th
                  className="text-secondary"
                  style={{ width: "8.3em" }}
                  scope="col"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersInfo.map((order) => (
                <CustomerOrdersTableData order={order} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default OrdersData;
