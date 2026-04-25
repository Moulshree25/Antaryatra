"use client";

import Link from "next/link";

const practices = [
  {
    title: "Yoga",
    description: "Improve flexibility, strength, and balance through guided yoga sessions.",
  },
  {
    title: "Meditation",
    description: "Calm the mind and reduce stress with focused meditation practices.",
  },
  {
    title: "Breathwork",
    description: "Regulate your nervous system with powerful breathing techniques.",
  },
  {
    title: "Chakra Healing",
    description: "Balance your energy centers and reconnect with inner awareness.",
  },
];

export default function PracticeTypes() {
  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {practices.map((practice, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {practice.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {practice.description}
              </p>

              <Link
                href="/booking"
                className="text-indigo-600 font-medium"
              >
                Book a session →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}