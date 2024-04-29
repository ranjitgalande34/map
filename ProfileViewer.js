import React, { useState, useEffect } from 'react';
import ProfileMap from './ProfileMap'; 
import ProfileDetails from './ProfileDetails'; 
import style from "./Count.css"

function ProfileViewer() {
  // State variables
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch profiles from an API
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('https://api.example.com/profiles');
        const data = await response.json();
        setProfiles(data.profiles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  // Function to handle profile selection
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  // Function to handle summary click
  const handleSummaryClick = () => {
    // Implement summary functionality here
    console.log('Summary button clicked');
  };

  // Render loading indicator if data is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Viewer</h1>

      {/* Display list of profiles */}
      <div className="profile-list">
        {profiles.map(profile => (
          <div key={profile.id} onClick={() => handleProfileClick(profile)}>
            <h2>{profile.name}</h2>
            <img src={profile.photo} alt={profile.name} />
            <p>{profile.description}</p>
            {/* Add more profile details as needed */}
            <button onClick={() => handleSummaryClick(profile)}>Summary</button>
          </div>
        ))}
      </div>

      {/* Display selected profile details */}
      {selectedProfile && <ProfileDetails profile={selectedProfile} />}

      {/* Interactive map component */}
      <ProfileMap profiles={profiles} />

      {/* Summary button */}
      {selectedProfile && (
        <button onClick={handleSummaryClick}>Summary</button>
      )}

      {/* Implement admin panel/dashboard here */}
      {/* Implement search and filter functionality here */}
    </div>
  );
}

export default ProfileViewer;
