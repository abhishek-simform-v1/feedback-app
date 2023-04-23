/* eslint-disable react/prop-types */
const FeedbackStash = ({ feedback }) => {
  //calculate average a rating
  let avgRating = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {avgRating ? avgRating : 0}</h4>
    </div>
  );
};

export default FeedbackStash;
