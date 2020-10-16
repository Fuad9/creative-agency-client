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
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showIndividualOrders"
        );
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
        <div className="row">
          <div
            className="col-sm-6 col-md-6 col-lg-4"
            style={{ marginLeft: "300px" }}
          >
            {showOrdersInfo.map((order) => (
              <div className="card shadow-sm">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <img
                      className="mx-3"
                      src={`data:image/png;base64,${order.image.img}`}
                      alt=""
                      width="60"
                    />
                    <p
                      style={{
                        background: "#C6FFE0",
                        color:
                          order.status == "pending"
                            ? "#FF4545"
                            : order.status == "done"
                            ? "#009444"
                            : "#FFBD3E",
                        borderRadius: "5px",
                        padding: "5px 10px",
                      }}
                    >
                      {order.status}
                    </p>
                  </div>
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerServiceList;
