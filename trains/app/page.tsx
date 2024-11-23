"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

export default function Home() {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sample data for the ticket request
    const ticketData = {
      coupe: "A1",
      seat: "12B",
      wagon: "W2",
      platform: "3",
      departure_time: "2024-11-25 10:30",
      arrival_time: "2024-11-25 12:00"
    };

    // Send a POST request to the Flask backend to generate the QR code
    const fetchQrCode = async () => {
      setLoading(true); // Start loading
      setError(null);   // Reset error

      try {
        const response = await axios.post("http://127.0.0.1:5000/buy_ticket", ticketData, {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob", // Expect the response as a blob (image)
        });

        // Convert the response (QR code image) to a URL for display
        const qrCodeUrl = URL.createObjectURL(response.data);
        setQrCode(qrCodeUrl);
      } catch (err) {
        console.error("Error fetching QR code", err);
        setError("Error fetching QR code. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchQrCode();
  }, []);

  return (
    <div className="w-screen h-dvh">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex justify-center mt-8">
        {loading && <p>Loading QR Code...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {qrCode ? (
          <img src={qrCode} alt="Ticket QR Code" className="w-64 h-64" />
        ) : null}
      </div>
    </div>
  );
}
