"use client";
import { useEffect } from "react";
import {
  bookingSchema,
  getBookingValidationErrors,
  type BookingValidationErrors,
} from "../../lib/bookingSchema";

type BookingResponse = {
  success?: boolean;
  redirectTo?: string;
  message?: string;
  errors?: BookingValidationErrors;
};

export default function BookingPage() {

  useEffect(() => {
    const handler = async (event: MessageEvent) => {

      if (event.data?.type === "BOOKING_SUBMIT") {
        const validation = bookingSchema.safeParse(event.data.payload);

        if (!validation.success) {
          event.source?.postMessage(
            {
              type: "BOOKING_VALIDATION_ERRORS",
              errors: getBookingValidationErrors(validation.error),
            },
            { targetOrigin: event.origin },
          );
          return;
        }

        try {
          const res = await fetch("/api/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(validation.data),
          });

          const result: BookingResponse = await res.json();

if (res.ok && result.success) {
  window.location.href = result.redirectTo || "/booking/success";
} else {
  if (result.errors) {
    event.source?.postMessage(
      { type: "BOOKING_VALIDATION_ERRORS", errors: result.errors },
      { targetOrigin: event.origin },
    );
  } else {
    alert(result.message || "Booking failed. Please try again.");
  }
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
    style={{
      width: "100%",
      height: "100vh",
      border: "none",
    }}
  />
);

}
