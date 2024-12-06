import React from 'react';

const Carte = () => {
    let map;

    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");
    
      map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
    

    return (
        <div>
          initMap();  
        </div>
    );
};

export default Carte;