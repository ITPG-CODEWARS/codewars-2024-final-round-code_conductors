"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const Map: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-96"></div>;
};

export default Map;
