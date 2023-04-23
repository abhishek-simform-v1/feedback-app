import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStash from './components/FeedbackStash';
import FeedbackForm from './components/FeedbackForm';
function App() {
  const [feedback, setFeedback] = useState([]);
  const AddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={AddFeedback} />
        <FeedbackStash feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
