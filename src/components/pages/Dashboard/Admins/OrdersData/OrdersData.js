import Axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../../utilities/Loading";
import Sidebar from "../../Sidebar/Sidebar";
import CustomerOrdersTableData from "../CustomerOrdersTableData/CustomerOrdersTableData";

const OrdersData = () => {
  const [ordersInfo, setOrdersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get("http://localhost:5000/showOrders");
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
      <div className="ml-auto col-md-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <CustomerOrdersTableData ordersInfo={ordersInfo} />
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersData;
