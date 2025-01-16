import React, { useState, useRef } from 'react';
import './App.css';
import homeImage from './content/home-image.jpg'; // Import home image
import resumeImage from './content/resume-image.jpg'; // Import resume image
import thumb1 from './content/thumb1.jpg'; // Import thumbnail image
import thumb2 from './content/thumb2.jpg'; // Import thumbnail image
import thumb3 from './content/thumb3.jpg'; // Import thumbnail image
import thumb4 from './content/thumb4.jpg'; // Import thumbnail image
import thumb5 from './content/thumb5.jpg'; // Import thumbnail image
import thumb6 from './content/thumb6.jpg'; // Import thumbnail image
import thumb7 from './content/thumb7.jpg'; // Import thumbnail image
import thumb8 from './content/thumb8.jpg'; // Import thumbnail image
import thumb9 from './content/thumb9.jpg'; // Import thumbnail image
import thumb10 from './content/thumb10.jpg'; // Import thumbnail image
import thumb11 from './content/thumb11.jpg'; // Import thumbnail image
import thumb12 from './content/thumb12.jpg'; // Import thumbnail image
import video1 from './content/video1.mp4'; // Import reel video
import video2 from './content/video2.mp4'; // Import reel video
import video3 from './content/video3.mp4'; // Import reel video
import video4 from './content/video4.mp4'; // Import reel video
import video5 from './content/video5.mp4'; // Import reel video
import video6 from './content/video6.mp4'; // Import reel video
import video7 from './content/video7.mp4'; // Import reel video
import video8 from './content/video8.mp4'; // Import reel video
import video9 from './content/video9.mp4'; // Import reel video
import video10 from './content/video10.mp4'; // Import reel video
import video11 from './content/video11.mp4'; // Import reel video
import video12 from './content/video12.mp4'; // Import reel video

import fbImage from './content/fbImage.png'; // Import facebook image
import twitterImage from './content/twitterImage.png'; // Import twitter image
import igImage from './content/igImage.png'; // Import instagram image
import chainImage from './content/chainImage.png'; // Import chain image
import closeImage from './content/closeImage.png'; // Import chain image

import infoImage from './content/info-image.jpeg'; // Import info image

import infoButtonImage from './content/info-button-image.png'; // Import info button image
import shareButtonImage from './content/share-button-image.png'; // Import share button image

import fullscreenImage from './content/fullscreen-image.png';  // Change the path if needed

import gallery1 from './content/gallery1.jpeg';  // Import gallery image
import gallery2 from './content/gallery2.jpeg';  // Import gallery image
import gallery3 from './content/gallery3.jpg';  // Import gallery image
import gallery4 from './content/gallery4.jpeg';  // Import gallery image



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
      { id: 1, title: "Reel 1", thumbnail: thumb1, videoUrl: video1, category: "film" },
      { id: 2, title: "Reel 2", thumbnail: thumb2, videoUrl: video2, category: "tv" },
      { id: 3, title: "Reel 3", thumbnail: thumb3, videoUrl: video3, category: "theatre" },
      { id: 4, title: "Reel 4", thumbnail: thumb4, videoUrl: video4, category: "film" },
      { id: 5, title: "Reel 5", thumbnail: thumb5, videoUrl: video5, category: "tv" },
      { id: 6, title: "Reel 6", thumbnail: thumb6, videoUrl: video6, category: "theatre" },
      { id: 7, title: "Reel 7", thumbnail: thumb7, videoUrl: video7, category: "film" },
      { id: 8, title: "Reel 8", thumbnail: thumb8, videoUrl: video8, category: "tv" },
      { id: 9, title: "Reel 9", thumbnail: thumb9, videoUrl: video9, category: "theatre" },
      { id: 10, title: "Reel 10", thumbnail: thumb10, videoUrl: video10, category: "film" },
      { id: 11, title: "Reel 11", thumbnail: thumb11, videoUrl: video11, category: "tv" },
      { id: 12, title: "Reel 12", thumbnail: thumb12, videoUrl: video12, category: "theatre" },
    ]
  },
  gallery: {
    images: [
      { id: 1, src: gallery1, title: "Image 1", description: "Description of image 1" },
      { id: 2, src: gallery2, title: "Image 2", description: "Description of image 2" },
      { id: 3, src: gallery3, title: "Image 3", description: "Description of image 3" },
      { id: 4, src: gallery4, title: "Image 4", description: "Description of image 4" },
    ]
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

   const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(pageContent.actingReel.videoOptions[0]);

  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const [isShareOverlayOpen, setIsShareOverlayOpen] = useState(false);
const [isInfoOpen, setIsInfoOpen] = useState(false);

const [isOverlayVisible, setIsOverlayVisible] = useState(false);

const [isImageOverlayOpen, setIsImageOverlayOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const [isShareOverlayVisible, setIsShareOverlayVisible] = useState(false);


  const stepSize = 2;
  const animationDuration = 2000;
  const reelsPerPage = 3;
  const maxReels = 12




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


  // Handle search query input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter video options based on search query and category
  const filteredVideos = pageContent.actingReel.videoOptions.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVideoSelection = (video) => {
    console.log("Selected video:", video);  // Add this line to check the selected video
    setSelectedVideo(video);
  };

  const handleNextVideo = () => {
    if (currentReelIndex + reelsPerPage < maxReels) {
      setCurrentReelIndex((prevIndex) => prevIndex + reelsPerPage);
    }
  };

  const handlePrevVideo = () => {
    if (currentReelIndex - reelsPerPage >= 0) {
      setCurrentReelIndex((prevIndex) => prevIndex - reelsPerPage);
    }
  };


const handleShareClick = () => {
  setIsShareOverlayOpen(true);  // Open the share overlay
  //setIsOverlayVisible(true);   // Show the darkening overlay
};

const handleCloseShareOverlay = () => {
  setIsShareOverlayOpen(false); // Close the share overlay
  //setIsOverlayVisible(false);   // Hide the darkening overlay
};

const handleInfoClick = () => {
  setIsInfoOpen(true);  // Open the info modal
  setIsOverlayVisible(true);   // Show the darkening overlay
};

const handleCloseInfo = () => {
  setIsInfoOpen(false); // Close the info modal
  setIsOverlayVisible(false);   // Hide the darkening overlay
};

const handleOverlayToggle = () => {
  setIsOverlayVisible(!isOverlayVisible);
};



const handleImageClick = (image) => {
  setSelectedImage(image);
  setIsImageOverlayOpen(true);
};


const handleCloseImageOverlay = () => {
  setIsImageOverlayOpen(false);
  setSelectedImage(null);
};

const handleShareImageClick = () => {
  // Implement share functionality here
};

const handleOpenShareOverlay = () => {
  setIsShareOverlayVisible(true);
};

const handleExitShareOverlay = () => {
  setIsShareOverlayVisible(false);
};

const handleFullScreenClick = () => {
  const elem = document.getElementById("image-fullscreen");

  if (elem) {
    if (typeof elem.requestFullscreen === "function") {
      elem.requestFullscreen();
    } else if (typeof elem.webkitRequestFullscreen === "function") {
      elem.webkitRequestFullscreen();
    } else {
      // Fallback for iOS Safari: Create a fullscreen-like overlay
      const fullscreenOverlay = document.createElement("div");
      fullscreenOverlay.id = "fullscreen-overlay";
      fullscreenOverlay.style.position = "fixed";
      fullscreenOverlay.style.top = "0";
      fullscreenOverlay.style.left = "0";
      fullscreenOverlay.style.width = "100vw";
      fullscreenOverlay.style.height = "100vh";
      fullscreenOverlay.style.background = "black";
      fullscreenOverlay.style.zIndex = "1000";
      fullscreenOverlay.style.display = "flex";
      fullscreenOverlay.style.justifyContent = "center";
      fullscreenOverlay.style.alignItems = "center";
      fullscreenOverlay.onclick = () => document.body.removeChild(fullscreenOverlay);

      const clonedElem = elem.cloneNode(true);
      clonedElem.style.maxWidth = "100%";
      clonedElem.style.maxHeight = "100%";
      fullscreenOverlay.appendChild(clonedElem);

      document.body.appendChild(fullscreenOverlay);
    }
  } else {
    console.error("Element with ID 'image-fullscreen' not found.");
  }
};



const handlePrevImage = () => {
  const currentIndex = pageContent.gallery.images.findIndex(image => image.id === selectedImage.id);
  const prevIndex = currentIndex === 0 ? pageContent.gallery.images.length - 1 : currentIndex - 1;
  setSelectedImage(pageContent.gallery.images[prevIndex]);
};

const handleNextImage = () => {
  const currentIndex = pageContent.gallery.images.findIndex(image => image.id === selectedImage.id);
  const nextIndex = currentIndex === pageContent.gallery.images.length - 1 ? 0 : currentIndex + 1;
  setSelectedImage(pageContent.gallery.images[nextIndex]);
};







const renderShareOverlay = () => (
  <div className="share-overlay">
    <div className="share-overlay-content">
      <button className="close-btn" onClick={() => { handleExitShareOverlay(); handleCloseShareOverlay(); }}>X</button>

      <h2 className="share-title">Share</h2>
      <div className="share-buttons">
        <button onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)}>
          <img src={fbImage} alt="Facebook" />
        </button>
        <button onClick={() => window.open('https://twitter.com/intent/tweet?url=' + window.location.href)}>
          <img src={twitterImage} alt="Twitter" />
        </button>
        <button onClick={() => window.open('https://www.instagram.com')}>
          <img src={igImage} alt="Instagram" />
        </button>
        <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
          <img src={chainImage} alt="Copy Link" />
        </button>
      </div>
    </div>
  </div>
);


const renderInfoModal = () => (
  
    <div className="info-modal">
      <button className="close-btn" onClick={handleCloseInfo}>X</button>
      <img src={infoImage} alt="Info" className="info-modal-image" />
      <h2>Info Title</h2>
      <p>This is an acting reel page featuring highlights from various performances across film, TV, and theatre.</p>
    </div>
  
);











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
<div className="acting-reel-page"> {/* Wrapper div */}
  {/* Information and Share Buttons - positioned on the top right */}
  <div className="video-actions">
    <button className="action-button" onClick={handleShareClick}>
      <img src={shareButtonImage} alt="Share" />
    </button>
    <button className="action-button" onClick={handleInfoClick}>
      <img src={infoButtonImage} alt="Info" />
    </button>
  </div>

  {isShareOverlayOpen && renderShareOverlay()}
 

  {/* Video Player */}
  <div className="video-player-container">
    <video className="video-player" controls key={selectedVideo.id}>
      <source src={selectedVideo.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={`video-overlay ${isShareOverlayOpen ? "visible" : ""}`}></div>
  </div>
  <small>Videos created using Clipchamp. Stock assets licensed through Clipchamp.</small>


  {/* Search Category Bar */}
  <div className="search-category-bar">
    <input
      type="text"
      className="search-bar"
      placeholder="Search videos..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
    <select className="category-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
      <option value="all">All Categories</option>
      <option value="film">Film</option>
      <option value="tv">TV</option>
      <option value="theatre">Theatre</option>
    </select>
  </div>

{/* Video Selection */}
<div className="video-selection-bar">
  {/* Video Thumbnails */}
  <div className="video-thumbnails">
    {filteredVideos
      .slice(currentReelIndex, currentReelIndex + reelsPerPage)
      .map((video) => (
        <div
          key={video.id}
          className={`video-thumbnail ${selectedVideo.id === video.id ? "selected" : ""}`}
          onClick={() => handleVideoSelection(video)}
        >
          <img src={video.thumbnail} alt={video.title} />
          <p className="title">{video.title}</p>
        </div>
      ))}
  </div>

  {/* Select Navigation Buttons */}
  <div className="select-nav-buttons">
    <button
      className="prev-button"
      onClick={handlePrevVideo}
      disabled={currentReelIndex === 0}
    >
      Previous
    </button>
    <button
      className="next-button"
      onClick={handleNextVideo}
      disabled={currentReelIndex + reelsPerPage >= filteredVideos.length}
    >
      Next
    </button>
  </div>
</div>





{/* End of the parent wrapper */}
</div>

  );
};












const renderGalleryPageContent = () => {
  const content = pageContent.gallery;

  return (
    <div className="gallery-page">
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <div className="gallery-grid">
        {content.images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img
              src={image.src}
              alt={image.title}
              className="gallery-thumbnail"
              onClick={() => handleImageClick(image)}
            />
            <div className="overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};







const renderContactPageContent = () => {
  const content = pageContent.contact; // Assuming you have a contact content object like your homepage one.

  return (
    <div className="contact-page-grid">
      <div className="left-section">
        <h2>{content.title}</h2>
        <p>{content.text}</p>
      </div>
      <div className="right-section">
        <form>
          <div className="input-slot">
            
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="input-slot">
            
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="input-slot">
            
            <input type="text" id="subject" placeholder="Subject" />
          </div>
          <div className="input-slot">
            
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
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
  } else if (index === 3) {
    return renderGalleryPageContent(); // Render gallery page
  } else if (index === 4) {
    return renderContactPageContent(); // Render contact page
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


    {/* Share Overlay for Image Overlay */}
    {isShareOverlayVisible && renderShareOverlay()}


    {/* Image Overlay */}
    {isImageOverlayOpen && (
      <div className="image-overlay">
        <div className="overlay-content">
          <button className="close-btn" onClick={handleCloseImageOverlay}>X</button>
          <button className="share-btn" onClick={handleOpenShareOverlay}>
  <img src={shareButtonImage} alt="Share" />
</button>
            <button className="fullscreen-btn" onClick={handleFullScreenClick}>
  <img src={fullscreenImage} alt="Fullscreen" />
</button>

            {/* Left Arrow */}
      <button className="nav-arrow left" onClick={handlePrevImage}>←</button>



          <img
            id="image-fullscreen"
            src={selectedImage.src}
            alt={selectedImage.title}
            className="overlay-image"
          />

           {/* Right Arrow */}
      <button className="nav-arrow right" onClick={handleNextImage}>→</button>

          <div className="image-details">
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            
          </div>
        </div>
      </div>
    )}


      {/* Full-Screen Overlay */}
      {isOverlayVisible && (
        <div className="info-overlay">
          {/* Dark overlay to cover everything */}
        </div>
      )}

      {/* Info Modal */}
      {isInfoOpen && (
        <div className="info-modal">
          <button className="close-btn" onClick={handleCloseInfo}>X</button>
          <img src={infoImage} alt="Info" className="info-modal-image" />
          <h2>Info Title</h2>
          <p>This is an acting reel page featuring highlights from various performances across film, TV, and theatre.</p>
        </div>
      )}



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