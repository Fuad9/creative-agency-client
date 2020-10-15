import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Loading from "../../../utilities/Loading";
import { ServiceContext } from "../../../../App";
import { Link } from "react-router-dom";
import SingleServiceInfoCard from "../SingleServiceInfoCard/SingleServiceInfoCard";

const SingleServiceInfo = () => {
  const [singleServiceInfo, setSingleServiceInfo] = useContext(ServiceContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "http://localhost:5000/showSingleService"
        );
        setSingleServiceInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, [setSingleServiceInfo]);

  return (
    <div className="mt-5">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          {singleServiceInfo.map((singleService) => (
            <SingleServiceInfoCard
              singleService={singleService}
              key={Math.random()}
            ></SingleServiceInfoCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleServiceInfo;

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
