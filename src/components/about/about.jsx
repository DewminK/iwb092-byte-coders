// src/components/AboutUs.jsx
import React, { useEffect, useState } from 'react';
import './aboutUs.css'; // Import the CSS file for styling
import Header from './headerAbout.jsx';

const contributors = [
  {
    name: 'Mahima Bhashitha',
    phone: '+94 71 130 5386',
    email: 'mahimabashitha2001@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mahima-bhashitha-558738288/',
    photo: './src/assets/Mahima.jpeg', // Replace with actual image URL
  },
  {
    name: 'Rashmitha Hansamal',
    phone: '+94 70 124 1480',
    email: 'hansamalkodithuwakku@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rashmitha-hansamal-610452271/',
    photo: './src/assets/Hansa.jpeg', // Replace with actual image URL
  },
  {
    name: 'Tharushi Wasuda',
    phone: '+94 71 137 4744',
    email: 'Desilva.tharushiw@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tharushii/',
    photo: './src/assets/Tharushi.jpeg', // Replace with actual image URL
  },
  {
    name: 'Dewmin Kasmitha',
    phone: '+94 76 502 3921',
    email: 'dewminkasmitha30@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dewmin-deniyegedara-a190b5165/',
    photo: './src/assets/GitHub.jpg', // Replace with actual image URL
  },
];

const AboutUs = () => {
  const [isProfilesVisible, setIsProfilesVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const profilesTimer = setTimeout(() => {
      setIsProfilesVisible(true); // Trigger profiles animation after a short delay
    }, 300); // Adjust delay for smooth appearance

    return () => clearTimeout(profilesTimer); // Cleanup timer
  }, []);

  useEffect(() => {
    if (isProfilesVisible) {
      const formTimer = setTimeout(() => {
        setIsFormVisible(true); // Trigger form animation after profiles are visible
      }, 500); // Adjust delay for the form appearance after profiles (500ms here)
      return () => clearTimeout(formTimer); // Cleanup timer
    }
  }, [isProfilesVisible]);

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    
    try {
      const response = await fetch('http://localhost:8080/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Form submitted successfully');
        event.target.reset(); // Clear the form after successful submission
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="about-us">
      <Header />
      <h1>Meet the Team</h1>
      <div className={`profiles ${isProfilesVisible ? 'visible' : ''}`}>
        {contributors.map((contributor, index) => (
          <div key={index} className="profile-card">
            <img src={contributor.photo} alt={`${contributor.name}'s photo`} className="profile-pic" />
            <h2>{contributor.name}</h2>
            <p>📱 {contributor.phone}</p>
            <p>📧 {contributor.email}</p>
            <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
      <div className={`contact-form ${isFormVisible ? 'visible' : ''}`}>
        <h2>Want to contact us?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
