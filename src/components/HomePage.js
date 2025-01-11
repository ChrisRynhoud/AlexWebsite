import React from 'react';
import alexImage from '../content/alex.jpg'; // Adjust the file path as needed
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <img src={alexImage} alt="Alex" className="profile-img" />
      <p>
        From a young age, I've had a passion for acting, which I nurtured through formal training at UC Davis and hands-on experience in student films. During the COVID-19 pandemic, I worked as an extra on "13 Reasons Why," gaining valuable industry insights. I later played a significant role in the indie film "Waiting On The World." Now, I'm honing my skills at The Groundlings in LA, a renowned training ground for actors like Will Ferrell. This website showcases my acting journey, experiences, and skills, and serves as a platform for potential job opportunities.
      </p>
    </div>
  );
};

export default HomePage;
