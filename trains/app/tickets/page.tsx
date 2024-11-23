"use client";
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';


type TicketInfo = {
    coupe: string;
    seat: string;
    wagon: string;
    platform: string;
    departure_time: string;
    arrival_time: string;
};

const ticket = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [qrInfo, setQrInfo] = useState<TicketInfo | null>(null);

    useEffect(() => {
        const ticketData = {
            coupe: "A1",
            seat: "12B",
            wagon: "W2",
            platform: "3",
            departure_time: "2024-11-25 10:30",
            arrival_time: "2024-11-25 12:00",
        };

        const fetchQrCode = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.post("http://127.0.0.1:5000/buy_ticket", ticketData, {
                    headers: { "Content-Type": "application/json" },
                    responseType: "blob",
                });
                const qrCodeUrl = URL.createObjectURL(response.data);
                setQrCode(qrCodeUrl);
            } catch (err) {
                console.error("Error fetching QR code", err);
                setError("Error fetching QR code. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchQrCode();
    }, []);

    useEffect(() => {
        const fetchQRData = async () => {
            try {
                const response = await axios.get<TicketInfo>("http://127.0.0.1:5000/ticket_info", {
                    headers: { "Content-Type": "application/json" },
                });
                setQrInfo(response.data);
            } catch (err) {
                console.error("Error fetching ticket info", err);
                setError("Error fetching ticket information.");
            }
        };

        fetchQRData();
    }, []);

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex justify-center mt-8">
                {loading && <p>Loading QR Code...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {qrCode && <img src={qrCode} alt="Ticket QR Code" className="w-64 h-64" />}
            </div>

            <div className="mt-8 px-4">
                {qrInfo ? (
                    <div>
                        <h2 className="text-xl font-bold">Ticket Information</h2>
                        <p><strong>Coupe:</strong> {qrInfo.coupe}</p>
                        <p><strong>Seat:</strong> {qrInfo.seat}</p>
                        <p><strong>Wagon:</strong> {qrInfo.wagon}</p>
                        <p><strong>Platform:</strong> {qrInfo.platform}</p>
                        <p><strong>Departure Time:</strong> {qrInfo.departure_time}</p>
                        <p><strong>Arrival Time:</strong> {qrInfo.arrival_time}</p>
                    </div>
                ) : (
                    <p>Loading ticket information...</p>
                )}
            </div>
        </div>
    )
}

export default ticket