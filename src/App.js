import React, { useState, useRef } from 'react';
import './App.css';
import homeImage from './content/home-image.jpg'; // Import home image
import resumeImage from './content/resume-image.jpg'; // Import resume image

// Placeholder content for each page
const pageContent = {
  home: {
    imageUrl: homeImage, // Use the imported image
    title1: "Welcome to My Homepage",
    text1: "This is where you'll find information about me, my work, and my passions.",
    title2: "About My Journey",
    text2: "I’ve worked in various industries and here’s a brief look at my journey so far.",
    reelButton: "Check out my Acting Reel"
  },
  resume: {
    imageUrl: resumeImage, // Example image
    title1: "My Professional Journey",
    text1: "An overview of my skills, work experience, and accomplishments.",
    title2: "My Skills",
    text2: "I am skilled in various areas, including acting, writing, and directing.",
    title3: "Key Projects",
    text3: "Here are some of the major projects I have worked on, showcasing my experience in diverse fields.",
    title4: "Contact Information",
    text4: "Feel free to reach out if you would like to collaborate! Email me at example@email.com or call me at (123) 456-7890.",
    title5: "Awards & Recognition",
    text5: "Throughout my career, I have been recognized with several prestigious awards for my work in film and theater.",
    title6: "Education",
    text6: "I hold a degree in Performing Arts from the University of XYZ, where I honed my skills and passion for creative expression."
  },
  actingReel: {
    title: "Acting Reel",
    text: "Watch my latest acting reel to see the highlights of my career.",
    imageUrl: "https://via.placeholder.com/500", // Placeholder for image
    additionalText: "This reel features a selection of my best performances across various roles.",
    videoOptions: [
      { id: 1, title: "Reel 1", thumbnail: "thumb1.jpg", videoUrl: "video1.mp4" },
      { id: 2, title: "Reel 2", thumbnail: "thumb2.jpg", videoUrl: "video2.mp4" },
      { id: 3, title: "Reel 3", thumbnail: "thumb3.jpg", videoUrl: "video3.mp4" }
      // Add more video options as needed
    ]
  },
  gallery: {
    title: "Gallery",
    text: "Explore my photo gallery showcasing various moments from my career.",
    imageUrl: "https://via.placeholder.com/500",
    additionalText: "This gallery is a visual collection of my best moments and professional shoots."
  },
  contact: {
    title: "Contact Me",
    text: "Get in touch with me for collaborations or inquiries.",
    imageUrl: "https://via.placeholder.com/500",
    additionalText: "I am always open to new opportunities. Reach out via email or social media!"
  }
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [incomingPosition, setIncomingPosition] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);
  const incomingIndexRef = useRef(currentIndex);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(pageContent.actingReel.videoOptions[0]);

  const stepSize = 2;
  const animationDuration = 2000;

  const moveTextAndImages = () => {
  if (isAnimating) return;
  setIsAnimating(true);

  let currentPos = currentPosition;
  let incomingPos = incomingPosition;
  const steps = (animationDuration / 1000) * 60;
  let stepCount = 0;

  const elementAcceleration = 0.2;

  const easeInOutQuintic = (progress) => {
    return progress < 0.5
      ? 16 * Math.pow(progress, 5)
      : 1 - Math.pow(-2 * progress + 2, 5) / 2;
  };

  const animationFrame = () => {
    if (stepCount < steps) {
      const progress = stepCount / steps;
      const easing = easeInOutQuintic(progress);

      // Move current position to the left and incoming position to the right
      currentPos = currentPos > -100 ? currentPos - stepSize * easing : -100;
      incomingPos = incomingPos > 0 ? incomingPos - stepSize * easing : 0;

      setCurrentPosition(currentPos);
      setIncomingPosition(incomingPos);

      stepCount += 1;
      requestAnimationFrame(animationFrame);
    } else {
      // When animation ends, reset the positions and complete the transition
      setCurrentPosition(-100);
      setIncomingPosition(0);
      completeTransition();
    }
  };

  requestAnimationFrame(animationFrame);
};


  const completeTransition = () => {
    setCurrentPosition(0);
    setIncomingPosition(100);
    setCurrentIndex(incomingIndexRef.current);
    setIsAnimating(false);
  };

  const handleButtonClick = (index) => {
    if (!isAnimating && index !== currentIndex) {
      incomingIndexRef.current = index;
      setIsAnimating(true);
      moveTextAndImages();
    }
  };

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };

  const handleNextVideo = () => {
    const currentIndex = pageContent.actingReel.videoOptions.indexOf(selectedVideo);
    const nextIndex = (currentIndex + 1) % pageContent.actingReel.videoOptions.length;
    setSelectedVideo(pageContent.actingReel.videoOptions[nextIndex]);
  };

  const handlePrevVideo = () => {
    const currentIndex = pageContent.actingReel.videoOptions.indexOf(selectedVideo);
    const prevIndex = (currentIndex - 1 + pageContent.actingReel.videoOptions.length) % pageContent.actingReel.videoOptions.length;
    setSelectedVideo(pageContent.actingReel.videoOptions[prevIndex]);
  };

  const renderHomePageContent = () => {
    const content = pageContent.home;

    return (
      <div className="homepage-grid">
        <div className="left-section">
          <img src={content.imageUrl} alt="Homepage" className="homepage-image" />
        </div>
        <div className="right-section">
          <div className="top-right">
            <h2>{content.title1}</h2>
            <p>{content.text1}</p>
          </div>
          <div className="bottom-right">
            <h3>{content.title2}</h3>
            <p>{content.text2}</p>
            <button onClick={() => handleButtonClick(2)}>{content.reelButton}</button>
          </div>
        </div>
      </div>
    );
  };

  const renderResumePageContent = () => {
    const content = pageContent.resume;

    return (
      <div className="resume-page">
        <div className="top-row">
          <div className="left">
            <img src={content.imageUrl} alt="Resume" className="resume-image" />
          </div>
          <div className="right">
            <h2>{content.title1}</h2>
            <p>{content.text1}</p>
          </div>
        </div>

        <div className="bottom-row">
          <div className="bottom-left">
            <h3>{content.title2}</h3>
            <p>{content.text2}</p>
            <h3>{content.title3}</h3>
            <p>{content.text3}</p>
            <h3>{content.title5}</h3>
            <p>{content.text5}</p>
          </div>
          <div className="bottom-right">
            <h3>{content.title4}</h3>
            <p>{content.text4}</p>
            <h3>{content.title6}</h3>
            <p>{content.text6}</p>
          </div>
        </div>
      </div>
    );
  };

const renderActingReelPageContent = () => {
  const content = pageContent.actingReel;

  return (
    <div className="acting-reel-page">
      {/* Information and Share Buttons - positioned on the top right */}
      <div className="video-actions">
        <button className="info-button">Info</button>
        <button className="share-button">Share</button>
      </div>

      <div className="video-player-container">
        <video className="video-player" controls>
          <source src={selectedVideo.videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="search-category-bar">
        <input type="text" className="search-bar" placeholder="Search videos..." />
        <select className="category-dropdown">
          <option value="all">All Categories</option>
          <option value="film">Film</option>
          <option value="tv">TV</option>
        </select>
      </div>

      <div className="video-selection-bar">
        <div className="video-options-display">
          {content.videoOptions.map((video) => (
            <div key={video.id} className="video-option" onClick={() => handleVideoSelection(video)}>
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="video-options">
        <button className="prev-button" onClick={handlePrevVideo}>Prev</button>
        <button className="next-button" onClick={handleNextVideo}>Next</button>
      </div>
    </div>
  );
};





const renderPageContent = (index) => {
  if (index === 0) {
    return renderHomePageContent();
  } else if (index === 1) {
    return renderResumePageContent(); // Render resume if index is 1
  } else if (index === 2) {
    return renderActingReelPageContent(); // Render acting reel if index is 2
  }

  const pageKey = Object.keys(pageContent)[index];
  const content = pageContent[pageKey];

  return (
    <div className="page-content">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <div className="image-container">
        <img src={content.imageUrl} alt={pageKey} />
      </div>
      <p>{content.additionalText}</p>
    </div>
  );
};



    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

 return (
    <div className="App">
      <header>
        <div className="header-left">
          <span onClick={() => handleButtonClick(0)} className="header-name">Alex Rynhoud</span>
          <span onClick={() => handleButtonClick(0)} className="header-title">Actor, Los Angeles, CA</span>
        </div>

        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => handleButtonClick(0)}>Home</button>
          <button onClick={() => handleButtonClick(1)}>Resume</button>
          <button onClick={() => handleButtonClick(2)}>Acting Reel</button>
          <button onClick={() => handleButtonClick(3)}>Gallery</button>
          <button onClick={() => handleButtonClick(4)}>Contact</button>
        </div>

        <div className="nav-desktop">
          <button onClick={() => handleButtonClick(0)}>Home</button>
          <button onClick={() => handleButtonClick(1)}>Resume</button>
          <button onClick={() => handleButtonClick(2)}>Acting Reel</button>
          <button onClick={() => handleButtonClick(3)}>Gallery</button>
          <button onClick={() => handleButtonClick(4)}>Contact</button>
        </div>
      </header>

      <div className="content-wrapper">
        <div
          className={`page-wrapper ${isAnimating ? 'transitioning' : ''}`}
          style={{
            transform: `translateX(${currentPosition}%)`,
            opacity: currentPosition > -100 ? 1 : 0,
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: currentPosition > -100 ? 2 : 1,
            transition: 'none',
          }}
        >
          <div className="page-content">
            {renderPageContent(currentIndex)}
          </div>
        </div>

        <div
          className={`page-wrapper ${isAnimating ? 'transitioning' : ''}`}
          style={{
            transform: `translateX(${incomingPosition}%)`,
            opacity: incomingPosition < 100 ? 1 : 0,
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: incomingPosition < 100 ? 1 : 0,
            transition: 'none',
          }}
        >
          <div className="page-content">
            {renderPageContent(incomingIndexRef.current)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;