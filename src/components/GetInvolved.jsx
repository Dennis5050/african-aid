import React from "react";

const GetInvolved = () => {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="getinvolved" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Get Involved
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Be Part of the Change
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            There are many ways you can make a difference — from volunteering your time to donating funds or spreading awareness.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Volunteer */}
          <div className="bg-red-50 p-8 rounded-2xl shadow-md text-center border border-red-100 hover:shadow-xl transition">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6l3 3-3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Join our field teams to help deliver essential aid and create lasting impact in local communities.
            </p>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Volunteer With Us
            </button>
          </div>

          {/* Donate */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-gray-200 hover:shadow-xl transition">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3h3V8zm0 8v-5H9c0 1.657 1.343 3 3 3zm0-13a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Donate</h3>
            <p className="text-gray-600 mb-6">
              Every dollar counts — your support brings clean water, food, and shelter to families in crisis.
            </p>
            <button
              onClick={() => scrollToSection("#donate")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Donate Today
            </button>
          </div>

          {/* Spread Awareness */}
          <div className="bg-red-50 p-8 rounded-2xl shadow-md text-center border border-red-100 hover:shadow-xl transition">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 2.707a1 1 0 00.217 1.21L6.586 17H18" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Spread Awareness</h3>
            <p className="text-gray-600 mb-6">
              Share our mission with your friends and family — every voice amplifies hope and action.
            </p>
            <button
              onClick={() => scrollToSection("#impact")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Share Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
