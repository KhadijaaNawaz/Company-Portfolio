import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import styles from './map.module.css'; // Import the CSS module

const OpenStreetMapSection = () => {
  const mapRef = useRef(null); 

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([40.748817, -73.985428], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([40.748817, -73.985428]).addTo(map)
        .bindPopup('<b>Our Location</b>')
        .openPopup();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current._leaflet_id = null; 
      }
    };
  }, []); 

  return (
    <div className={styles.map_container}>
      <div ref={mapRef} className={styles.mapContainer}></div>
    </div>
  );
};

export default OpenStreetMapSection;
