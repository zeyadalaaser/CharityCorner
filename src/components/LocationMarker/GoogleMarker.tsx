'user client';
import React from 'react';
import mapIcon from '../../assets/location/mapIcon.png';
import './GoogleMarker.css';
  
  export function GoogleMarker() {
    <button>
        <img className="icon"  alt="marker" />
    </button>
    return (
        <a href="https://maps.app.goo.gl/5xiaUqZsDdEPoc1R8" target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
            <img src={mapIcon.src} alt="External Link"    width="40px"  height="40px"/>
        </a>
    );
}
function handleIconClick() {
    // Perform actions before navigating to the external site
    console.log('Icon clicked');
}

  
  function handleButtonClick() {
      // Perform actions when the button is clicked
      console.log('Button clicked');
  }