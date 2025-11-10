"use client";

import maplibregl from "maplibre-gl";
import { Map, Marker } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComponent() {
  return (
    <div className="h-[600px] w-full">
      <Map
        mapLib={maplibregl as any}
        initialViewState={{
          longitude: 72.5597,
          latitude: 23.012,
          zoom: 14,
        }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker latitude={23.012} longitude={72.5597}>
          <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
        </Marker>
      </Map>
    </div>
  );
}
