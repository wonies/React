import React from 'react';
import '../style/MapGuide/MapLocation.css';

function MapComponent() {
  return (
    <>
      <div className="map-container">
        <div className="map">
          <img
            src={`${process.env.PUBLIC_URL}/mapcollect/map1.svg`}
            alt="Map"
          />
        </div>
      </div>
    </>
  );
}

export default MapComponent;
