"use client";
import { useEffect } from "react";

export default function BookingPage() {

  useEffect(() => {
    const handler = async (event: MessageEvent) => {

      if (event.data?.type === "BOOKING_SUBMIT") {

        console.log("Received from iframe:", event.data.payload);

        try {
          const res = await fetch("/api/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(event.data.payload),
          });

          if (res.ok) {
  window.location.href = "/booking/success";
} else {
  alert("Booking failed");
}

        } catch (err) {
          console.error(err);
          alert("Server error");
        }
      }
    };

    window.addEventListener("message", handler);

    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <iframe
      src="/booking-ui.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}