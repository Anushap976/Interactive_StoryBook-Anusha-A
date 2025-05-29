import { useState } from 'react';
import './StoryBook.css';
import stories from '../../assets/stories.json';
import Button from '../../components/Button';
import StoryPreview from './StoryPreview';

const StoryBook = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const currentStory = currentIndex !== null ? stories[currentIndex] : null;

  const nextStory = () => {
    setCurrentIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
  };

  const resetStory = () => {
    setCurrentIndex(null);
  };

 return (
    <div className="storybook-container">
      <h2>📖 Interactive Story Explorer</h2>

      {currentStory === null ? (
        <div className="story-list fade-in">
          {stories.map((story, index) => (
            <StoryPreview
              key={story.id}
              story={story}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      ) : (
        <div className="story-detail fade-in">
          <h2>{currentStory.title}</h2>
          <p className="author">by {currentStory.author}</p>
          <img src={currentStory.image} alt={currentStory.title} />
          <p className="story-content">{currentStory.content}</p>

          <div className="nav-buttons">
            <Button text="← Previous" onClick={prevStory} />
            <Button text="🔄 Reset" onClick={resetStory} />
            <Button text="Next →" onClick={nextStory} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryBook;