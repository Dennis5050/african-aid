// src/components/Team.jsx

import React from "react";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";

const teamMembers = [
  {
    name: "Dr. John Perez",
    title: "Chief Executive Officer (CEO)",
    bio: "Visionary leader with 20+ years in international public health policy and water security.",
    img: team1,
  },
  {
    name: "Juliet cion",
    title: "Chief Operations Officer (COO)",
    bio: "Logistics expert overseeing all on-the-ground infrastructure and aid distribution.",
    img: team2,
  },
  {
    name: "Aisha Hassan",
    title: "Director of Donor Relations",
    bio: "Manages global fundraising campaigns and ensures transparency in financial reporting.",
    img: team3,
  },
  {
    name: "Jelani Kweku",
    title: "Head of Community Programs",
    bio: "Specializes in developing sustainable, locally-led education and nutritional initiatives.",
    img: team4,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Our Leadership
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Meet the Team Behind the Mission
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                className="w-28 h-28 rounded-full object-cover mb-4 ring-4 ring-red-100"
                src={member.img}
                alt={member.name}
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-red-600 font-medium text-sm mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm italic">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
