import './StoryBook.css';

const StoryPreview = ({ story, onClick }) => {
  return (
    <div className="story-list-item" onClick={onClick}>
      <h3>{story.title}</h3>
      <p className="author">by {story.author}</p>
      <p className="summary">{story.content.substring(0, 150)}...</p>
    </div>
  );
};

export default StoryPreview;