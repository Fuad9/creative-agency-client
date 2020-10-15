import React, { useContext, useEffect, useState } from "react";
import { ServiceContext, ServiceImageContext } from "../../../../../App";
import Sidebar from "../../Sidebar/Sidebar";

const CustomerServiceList = () => {
  const [servicesInfo, setServicesInfo] = useContext(ServiceContext);
  const [serviceImage, setServiceImage] = useContext(ServiceImageContext);
  const [showImage, setShowImage] = useState({});

  console.log(serviceImage);

  useEffect(() => {
    const serviceInfoImage = servicesInfo.find(
      (elem) => elem.title === serviceImage
    );
    setShowImage(serviceInfoImage);
  }, [serviceImage, servicesInfo]);

  const showServiceImage = showImage.image && showImage.image;
  console.log(showServiceImage);

  return (
    <div>
      <Sidebar />
      <img style={{ marginLeft: "300px" }} src={showServiceImage} alt="" />
    </div>
  );
};

export default CustomerServiceList;
