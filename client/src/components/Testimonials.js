import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const Container = styled.div`
  background-color: var(--blue);
  color: #ffffff;
  height: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 1rem;
`;

const ReviewStar = styled.i`
  color: yellow;
`;

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const { data } = await axios.get(
        "https://superdelta-backend.onrender.com/"
      );

      setReviews(data.result.reviews);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const rating = num => {
    switch (num) {
      case 5:
        return (
          <>
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
          </>
        );

      case 4:
        return (
          <>
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
          </>
        );

      case 3:
        return (
          <>
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
          </>
        );

      case 2:
        return (
          <>
            <ReviewStar className="fas fa-star" />
            <ReviewStar className="fas fa-star" />
          </>
        );

      case 1:
        return (
          <>
            <ReviewStar className="fas fa-star" />
          </>
        );

      default:
        break;
    }
  };

  return (
    <Container id="testimonials">
      <Title>What Others Think...</Title>
      {loading ? (
        <div>Loading</div>
      ) : (
        reviews.map(
          review =>
            review.rating > 4 && (
              <ReviewContainer>
                {review.text && <div>"{review.text}"</div>}

                <div>{rating(review.rating)}</div>
                <div>{review.author_name}</div>
                <div>{review.relative_time_description}</div>
              </ReviewContainer>
            )
        )
      )}
    </Container>
  );
};

export default Testimonials;
