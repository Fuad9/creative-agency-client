import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../../App";
import Loading from "../../../utilities/Loading";
import SingleCustomerReviewCard from "../SingleCustomerReviewCard/SingleCustomerReviewCard";

const SingleCustomerReview = () => {
  const [singleReview, setSingleReview] = useState([]);
  const [loggedInUser] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  // to show signle review
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "http://localhost:5000/showSingleReview"
        );
        setSingleReview(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className="my-5">
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card-deck mt-5">
            {singleReview.map((review) => (
              <SingleCustomerReviewCard review={review} key={review._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleCustomerReview;
