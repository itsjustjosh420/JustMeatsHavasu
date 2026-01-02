"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  const sections = [
    {
      title: "About Us",
      content:
        "Just Meats is a local, family-run meat shop focused on quality cuts, fair prices, and great service. Walk in or call—no nonsense, just good meat.",
    },
    {
      title: "Our Products",
      content:
        "Fresh beef, pork, chicken, and specialty cuts. Custom orders available—just ask at the counter or call ahead.",
    },
    {
      title: "Hours & Location",
      content:
        "Mon–Sat: 9am–6pm\nSunday: Closed\n📍 In-store only — call for availability.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-xl text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Just Meats</h1>
        <p className="text-lg mb-6">Quality cuts. Local shop. No fluff.</p>

        <a
          href="tel:15551234567"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
        >
          📞 Call Now
        </a>
      </section>

      {/* Expandable Sections */}
      <section className="w-full max-w-xl space-y-4 pb-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
            >
              {section.title}
              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <div className="px-6 pb-4 text-gray-300 whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
