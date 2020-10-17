import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import Loading from "../../../utilities/Loading";
import { ServiceContext } from "../../../../App";
import SingleServiceInfoCard from "../SingleServiceInfoCard/SingleServiceInfoCard";

const SingleServiceInfo = () => {
  const [singleServiceInfo, setSingleServiceInfo] = useContext(ServiceContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showSingleService"
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
    <section className="services mt-5">
      <div className="container">
        <div className="text-center">
          <h2>
            Provide awesome <span style={{ color: "#7AB259" }}>services</span>
          </h2>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row my-3 mx-3">
            {singleServiceInfo.map((singleService) => (
              <SingleServiceInfoCard
                singleService={singleService}
                key={Math.random()}
              ></SingleServiceInfoCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleServiceInfo;
