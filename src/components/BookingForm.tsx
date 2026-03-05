"use client";

import { useState } from "react";

export default function BookingForm() {

  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    level: "",
    practice: "",
    chakra: "",
    notes: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {

  try {

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to submit booking");
    }

    setSuccess(true);

  } catch (error) {

    alert("Something went wrong. Please try again.");

  }
};

if (success) {
  return (
    <div className="max-w-lg mx-auto bg-zinc-900 text-white p-10 rounded-xl shadow-xl text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-4">
        Booking Confirmed ✓
      </h2>

      <p className="text-gray-300">
        Thank you for booking your session.
        We will contact you shortly.
      </p>
    </div>
  );
}

if (success) {
  return (
    <div className="max-w-lg mx-auto bg-zinc-900 text-white p-10 rounded-xl shadow-xl text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-4">
        Booking Confirmed ✓
      </h2>

      <p className="text-gray-300">
        Thank you for booking your session.
        We will contact you shortly.
      </p>
    </div>
  );
}

return (
    <div className="max-w-lg mx-auto bg-zinc-900 text-white p-8 rounded-xl shadow-xl space-y-6">

      <h2 className="text-2xl font-bold text-center">
        Book Your Session
      </h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">

          <h3 className="text-lg font-semibold">Personal Info</h3>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          />

          <button
            onClick={nextStep}
            className="w-full bg-green-600 py-3 rounded-lg font-semibold"
          >
            Next
          </button>

        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">

          <h3 className="text-lg font-semibold">Wellness Goal</h3>

          <select
            name="goal"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          >
            <option value="">Select goal</option>
            <option>Stress relief</option>
            <option>Anxiety</option>
            <option>Energy balance</option>
            <option>Physical health</option>
            <option>Spiritual growth</option>
          </select>

          <div className="flex gap-3">

            <button
              onClick={prevStep}
              className="flex-1 border py-3 rounded-lg"
            >
              Back
            </button>

            <button
              onClick={nextStep}
              className="flex-1 bg-green-600 py-3 rounded-lg"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">

          <h3 className="text-lg font-semibold">Practice Preferences</h3>

          <select
            name="level"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          >
            <option value="">Experience Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <select
            name="practice"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          >
            <option value="">Preferred Practice</option>
            <option>Yoga</option>
            <option>Meditation</option>
            <option>Breathwork</option>
            <option>Chakra healing</option>
          </select>

          <select
            name="chakra"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          >
            <option value="">Chakra Focus</option>
            <option>Root</option>
            <option>Sacral</option>
            <option>Solar Plexus</option>
            <option>Heart</option>
            <option>Throat</option>
            <option>Third Eye</option>
            <option>Crown</option>
            <option>Unsure</option>
          </select>

          <div className="flex gap-3">

            <button
              onClick={prevStep}
              className="flex-1 border py-3 rounded-lg"
            >
              Back
            </button>

            <button
              onClick={nextStep}
              className="flex-1 bg-green-600 py-3 rounded-lg"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="space-y-4">

          <h3 className="text-lg font-semibold">Additional Notes</h3>

          <textarea
            name="notes"
            placeholder="Anything you'd like to share..."
            onChange={handleChange}
            className="w-full p-3 rounded-lg border bg-black"
          />

          <div className="flex gap-3">

            <button
              onClick={prevStep}
              className="flex-1 border py-3 rounded-lg"
            >
              Back
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 bg-green-600 py-3 rounded-lg font-semibold"
            >
              Submit Booking
            </button>

          </div>

        </div>
      )}

    </div>
  );
}