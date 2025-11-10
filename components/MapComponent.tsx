"use client";

import { useState } from "react"; 
import maplibregl from "maplibre-gl";
import { Map, Marker, Popup } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";


export default function MapComponent() {
  
 // Café data
  const cafes = [
    {
      name: "Kaaffeella",
      latitude: 23.011459406967468,
      longitude: 72.56436133534497,
    },
    {
      name: "Udipi Café",
      latitude: 23.01513289669329,
      longitude: 72.56539130355534,
    },
    {
      name: "The Chocolate Room",
      latitude: 23.006640268762347,
      longitude: 72.55594992829364,
    },
  ];

  // State for popup
  const [selectedCafe, setSelectedCafe] = useState<any>(null);

  return (
    <div className="h-[600px] w-full">
      <Map
        mapLib={maplibregl as any}
        initialViewState={{
          longitude: 72.562, // Center near Paldi
          latitude: 23.012,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`}
      >
        {cafes.map((cafe) => (
          <Marker
            key={cafe.name}
            longitude={cafe.longitude}
            latitude={cafe.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedCafe(cafe);
            }}
          >
            <div
              className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md cursor-pointer"
              title={cafe.name}
            />
          </Marker>
        ))}

        {selectedCafe && (
          <Popup
            longitude={selectedCafe.longitude}
            latitude={selectedCafe.latitude}
            anchor="top"
            onClose={() => setSelectedCafe(null)}
            closeOnClick={false}
          >
            <div className="font-semibold text-gray-800">
              {selectedCafe.name}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
