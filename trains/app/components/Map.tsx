"use client";
import { useEffect } from "react";

// Declaring the global google object type for TypeScript
declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Assign the initMap function to window so the Google Maps API can call it once loaded
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    // Append the script to the document to load Google Maps
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-96"></div>;
};

export default Map;
