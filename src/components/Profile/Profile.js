import React from 'react';
import './Profile.css';

const Profile = ({ customer = {} }) => {
  return (
    <div className="profile-card">
      <img src={'/src/assets/images/profile.jpg'} alt="Profile" className="profile-picture" />
      <h2>{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
};

export default Profile;

