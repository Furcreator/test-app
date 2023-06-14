import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsOfMovie } from 'utils/api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    getReviewsOfMovie(moviesId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => setError(error));
  }, [moviesId]);

  return (
    <>
      {error && <p>{error}</p>}
      {reviews && <ReviewsList reviews={reviews}></ReviewsList>}
      {(!reviews || reviews.length === 0) && (
        <div>
          <p>There is no reviews!</p>
        </div>
      )}
    </>
  );
};
export default Reviews;
