import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import ServicesInfoCard from "../ServicesInfoCard/ServicesInfoCard";
import Loading from "../../../utilities/Loading";
import { ServiceContext } from "../../../../App";
import { Link } from "react-router-dom";
import SingleServiceInfo from "../SingleServiceInfo/SingleServiceInfo";

const ServicesInfo = () => {
  const [servicesInfo, setServicesInfo] = useContext(ServiceContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showServices"
        );
        setServicesInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [setServicesInfo]);

  return (
    <>
      <div className="mt-5">
        <div className="text-center">
          <h2>
            Provide awesome <span style={{ color: "#7AB259" }}>services</span>
          </h2>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row">
            {servicesInfo.map((info) => (
              <ServicesInfoCard
                info={info}
                key={Math.random()}
              ></ServicesInfoCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ServicesInfo;

// // to insert all data
// const handleTasks = () => {
//   fetch("https://gentle-sands-61587.herokuapp.com/addServices", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(infosData),
//   });
// };
