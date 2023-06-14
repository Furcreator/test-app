const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(info => {
        return (
          <li key={info.id}>
            <p>
              <span>Reviewer:</span> {info.author}
            </p>
            <p>{info.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default ReviewsList;
