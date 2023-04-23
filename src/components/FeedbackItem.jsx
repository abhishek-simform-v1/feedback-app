import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
/* eslint-disable react/prop-types */
const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card className="card">
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
