// ProfileDetails.js
import React from 'react';

function ProfileDetails({ profile }) {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>Email: {profile.email}</p>
      <p>Address: {profile.address}</p>
      {/* Add more profile details as needed */}
    </div>
  );
}

export default ProfileDetails;
