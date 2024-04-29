// ProfileMap.js
import React, { useEffect } from 'react';
import L from 'leaflet';

function ProfileMap({ profiles }) {
  useEffect(() => {
    // Create the map
    const map = L.map('map').setView([0, 0], 2); // Centered at the equator, zoom level 2

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for each profile's address
    profiles.forEach(profile => {
      L.marker([0, 0]).addTo(map) // Change [0, 0] to the actual coordinates
        .bindPopup(profile.name); // Display profile name on marker
    });

    return () => {
      // Cleanup function to remove the map container from the DOM
      map.remove();
    };
  }, [profiles]);

  return (
    <div id="map" style={{ height: '400px' }}></div>
  );
}

export default ProfileMap;
