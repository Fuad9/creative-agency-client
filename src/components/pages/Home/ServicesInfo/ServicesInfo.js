import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import ServicesInfoCard from "../ServicesInfoCard/ServicesInfoCard";
import Loading from "../../../utilities/Loading";
import { ServiceContext } from "../../../../App";
import { Link } from "react-router-dom";

const ServicesInfo = () => {
  const [servicesInfo, setServicesInfo] = useContext(ServiceContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get("http://localhost:5000/showServices");
        setServicesInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [setServicesInfo]);

  return (
    <section className="services services-container mt-5">
      <div className="text-center">
        <h2>
          Provide awesome <span style={{ color: "#7AB259" }}>services</span>
        </h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
            {servicesInfo.map((info) => (
              <Link to={`/order/${info.title}/${info.description}`}>
                <ServicesInfoCard
                  info={info}
                  key={info.title}
                ></ServicesInfoCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesInfo;

// // to insert all data
// const handleTasks = () => {
//   fetch("http://localhost:5000/addServices", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(infosData),
//   });
// };
