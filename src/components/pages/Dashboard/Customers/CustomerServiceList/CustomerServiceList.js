import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext, ServiceContext } from "../../../../../App";
import Loading from "../../../../utilities/Loading";
import Sidebar from "../../Sidebar/Sidebar";

const CustomerServiceList = () => {
  const [showOrdersInfo, setShowOrdersInfo] = useContext(ServiceContext);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInUser] = useContext(AuthContext);
  const [ordersByEmail, setOrdersByEmail] = useState([]);

  document.title = "Your Ordered Services";

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showOrders"
        );
        setShowOrdersInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [setShowOrdersInfo]);

  useEffect(() => {
    const ordersInfo = showOrdersInfo.filter(
      (elem) => elem.email === loggedInUser.email
    );
    setOrdersByEmail(ordersInfo);
  }, [loggedInUser.email, showOrdersInfo]);

  return (
    <section className="container-fluid row">
      <Sidebar />
      <div
        className="col-8 col-sm-10 col-md-10 col-lg-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
        }}
      >
        <div className="d-flex justify-content-between bg-white">
          <h5 className="text-brand">Service List</h5>
          <h4>{loggedInUser.name}</h4>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div
            style={{
              backgroundColor: "#F4FDFB",
              height: "100vh",
            }}
          >
            <div className="card-deck row mt-5">
              {ordersByEmail.map((order) => (
                <div className="card col-sm-12 col-md-4" key={Math.random()}>
                  <div className="card-header bg-white border-bottom-0">
                    <div className="d-flex justify-content-between">
                      <img
                        className=""
                        src={`data:image/png;base64,${order.image.img}`}
                        alt=""
                        width="60"
                        style={{ borderRadius: "50%" }}
                      />
                      <p
                        style={{
                          background:
                            order.status == "Pending"
                              ? "#FFE3E3"
                              : order.status == "Done"
                              ? "#C6FFE0"
                              : "#fff6e5",
                          color:
                            order.status == "Pending"
                              ? "#FF4545"
                              : order.status == "Done"
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
                    <p className="card-text text-secondary">
                      {order.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerServiceList;
