import React from 'react';
import './Reels.css';

const reelsData = [
  {
    videoSrc: '', // Leave blank for now or use a placeholder image/video link
    description: 'This is a short description of the first acting reel. It showcases my dramatic performance in a tense courtroom scene.'
  },
  {
    videoSrc: '',
    description: 'This reel highlights my comedic timing in a light-hearted romantic comedy.'
  },
  {
    videoSrc: '',
    description: 'Watch my powerful monologue in this dramatic piece, showcasing my range and emotional depth.'
  },
  {
    videoSrc: '',
    description: 'This reel features me in an action-packed scene, demonstrating my ability to handle intense physical performances.'
  },
  {
    videoSrc: '',
    description: 'Experience my versatility in this reel, where I play a charming yet enigmatic character.'
  },
  {
    videoSrc: '',
    description: 'In this reel, I deliver a heartfelt performance in a touching family drama.'
  },
  {
    videoSrc: '',
    description: 'Watch my captivating performance in this thriller, where I portray a detective unraveling a complex mystery.'
  }
];

const Reels = () => {
  return (
    <div className="reels">
      <h1>Acting Reels</h1>
      {reelsData.map((reel, index) => (
        <div className="reel" key={index}>
          {reel.videoSrc ? (
            <video controls className="reel-video">
              <source src={reel.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="placeholder-video">Video Placeholder</div>
          )}
          <p>{reel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Reels;
