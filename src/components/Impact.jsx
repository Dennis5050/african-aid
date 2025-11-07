// src/components/Impact.jsx

import React from 'react';

// NOTE: All external icon dependencies (like lucide-react) have been replaced with 
// inline SVGs to fix the persistent Vite dependency resolution error.

// Define inline SVG components for each statistic
const IconDroplet = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3-2-4s-2.5-2-2.5-3c0-.6.1-1.2.4-1.7.5-.9 1.4-1.7 2.4-2.2C14.5 3 13.5 2 12 2 8 2 5 7 5 15a7 7 0 0 0 7 7Z"/></svg>
);
const IconUtensils = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h2c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1H3a1 1 0 0 0-1 1v14c0 .5.5 1 1 1ZM19 4h2a1 1 0 0 1 1 1v14c0 .5-.5 1-1 1h-2a1 1 0 0 1-1-1V5c0-.5.5-1 1-1Z"/><path d="M8 12h8"/></svg>
);
const IconHome = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconZap = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);


const stats = [
  {
    icon: IconDroplet,
    label: 'People Served with Clean Water',
    value: '3.4M+',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: IconUtensils,
    label: 'Nutritious Meals Provided',
    value: '12.8M',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: IconHome,
    label: 'Families Housed & Supported',
    value: '45,000+',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: IconZap,
    label: 'Renewable Power Stations Built',
    value: '1,500',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
];

const ImpactSection = () => {
  // Renamed StatCard to match JavaScript convention and accept the SVG component
  const StatCard = ({ icon: Icon, label, value, color, bgColor }) => (
    <div 
      className={`p-6 md:p-8 rounded-2xl ${bgColor} shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col items-center justify-center`}
    >
      <Icon className={`w-12 h-12 ${color} mb-4`} />
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
      <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-none">
        {value}
      </h3>
    </div>
  );

  return (
    <section id="impact" className="py-16 sm:py-24 bg-white -mt-20 relative z-20"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Global Impact</h2>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Real Help. Tangible Results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;