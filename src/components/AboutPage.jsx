import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Together, We Bring Hope and Change
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Relief Aid to Africa is a non-profit initiative dedicated to ending
            water scarcity, hunger, and poverty across African communities.
            We believe in empowering local people to build sustainable futures
            through clean water, food security, education, and renewable energy.
          </p>
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/src/assets/children.jpeg"
              alt="African children smiling after receiving aid"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2022, Relief Aid to Africa was born from a vision to
              address the basic needs that every human deserves — clean water,
              food, and energy. Our volunteers work on the ground with local
              communities to ensure that every project we start becomes
              self-sustaining.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              What Drives Us
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>🌍 Empowering communities through long-term solutions</li>
              <li>💧 Providing access to clean and safe drinking water</li>
              <li>🍞 Combating hunger through local farming initiatives</li>
              <li>⚡ Promoting renewable energy and sustainable education</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
