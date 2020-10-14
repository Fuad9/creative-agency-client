import Axios from "axios";
import React, { useEffect, useState } from "react";
// import { CustomerReviewData } from "../../../../fakedata/CustomerReviewData";
import Loading from "../../../utilities/Loading";
import CustomerReviewCard from "../CustomerReviewCard/CustomerReviewCard";

const CustomerReview = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   // to insert all data
  //   const handleAdd = () => {
  //     fetch("http://localhost:5000/addReviews", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(CustomerReviewData),
  //     });
  //   };

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get("http://localhost:5000/showReviews");
        setReviewsInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Clients <span style={{ color: "#7AB259" }}>feedback</span>
          </h2>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card-deck mt-5">
            {reviewsInfo.map((review) => (
              <CustomerReviewCard review={review} key={review._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReview;
