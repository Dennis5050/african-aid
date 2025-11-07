import React from "react";
import { Target, Lightbulb } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Mission Content */}
          <div>
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              Our Core Beliefs
            </h2>
            <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
              Hope is the Blueprint for Tomorrow
            </p>

            {/* Mission Statement */}
            <div className="mb-8 p-6 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm">
              <div className="flex items-center mb-3">
                <Target className="w-8 h-8 text-red-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To eradicate water poverty and malnutrition across Eastern Africa by implementing sustainable, community-owned infrastructure, ensuring every child has access to clean water, food, and education.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600 shadow-sm">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A future where local communities are empowered, self-sufficient, and thriving — no longer reliant on external aid, and serving as models for sustainable development globally.
              </p>
            </div>

            <a
              href="#about"
              className="text-blue-600 font-medium hover:text-blue-700 transition duration-150 flex items-center"
            >
              Read Our Full Story &rarr;
            </a>
          </div>

          {/* Right Column: Visual Placeholder */}
          <div className="relative h-96 w-full bg-gray-200 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Placeholder for image or video */}
            <svg
              className="w-24 h-24 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 10l4.55 4.55M18 10l-3 3M12 20a8 8 0 100-16 8 8 0 000 16zM12 14v4M12 10l4.55 4.55M8 10l3 3"
              ></path>
            </svg>
            <span className="absolute text-lg text-gray-600 font-semibold">
              Project Video Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
