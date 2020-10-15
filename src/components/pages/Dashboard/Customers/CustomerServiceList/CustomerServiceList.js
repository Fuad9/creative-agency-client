import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ServiceContext, ServiceImageContext } from "../../../../../App";
import Loading from "../../../../utilities/Loading";
import Sidebar from "../../Sidebar/Sidebar";

const CustomerServiceList = () => {
  const [showOrdersInfo, setShowOrdersInfo] = useContext(ServiceContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get("http://localhost:5000/showOrders");
        setShowOrdersInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [setShowOrdersInfo]);

  return (
    <div>
      <Sidebar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
            {showOrdersInfo.map((order) => (
              <div style={{ marginLeft: "300px" }}>
                <div className="card shadow-sm">
                  <div className="card-header">
                    <img
                      className="mx-3"
                      src={`data:image/png;base64,${order.image.img}`}
                      alt=""
                      width="60"
                    />
                    <div>
                      <h6 className="text-dark font-weight-bold">
                        {order.service}
                      </h6>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="card-text text-secondary mt-4">
                      {order.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerServiceList;
