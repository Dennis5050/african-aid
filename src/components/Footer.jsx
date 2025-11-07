// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 border-t-8 border-red-600 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Logo & Mission */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-2xl font-bold mb-4 text-red-400">Relief Aid Africa</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bringing sustainable relief: clean water, nutrition, and education to vulnerable communities. We are a registered 501(c)(3) non-profit organization.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-300 hover:text-red-300 transition">Home</a></li>
            <li><a href="#mission" className="text-gray-300 hover:text-red-300 transition">Our Mission</a></li>
            <li><a href="#impact" className="text-gray-300 hover:text-red-300 transition">Our Work</a></li>
            <li><a href="#donate" className="text-gray-300 hover:text-red-300 transition">Donate</a></li>
          </ul>
        </div>

        {/* Column 3: Legal & Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-red-300 transition">Annual Reports</a></li>
            <li><a href="#" className="text-gray-300 hover:text-red-300 transition">Volunteer</a></li>
            <li><a href="#" className="text-gray-300 hover:text-red-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <p className="text-gray-300 text-sm">P.O. Box 1000, Nairobi, Kenya</p>
          <p className="text-gray-300 text-sm mt-1">Email: info@reliefaid.org</p>
          <p className="text-gray-300 text-sm mt-1">Phone: +1 (329) 210-9094</p>
          
          {/* Social Media Icons Placeholder */}
          <div className="flex space-x-4 mt-4">
            {/* Using inline SVG placeholders for simple icons */}
            <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path fill="#fff" d="M14.9 10.1h1.5v2.5h-1.5v5.7h-2.9v-5.7H9.1v-2.5h2.9V8.6c0-1.7 1.1-2.6 2.5-2.6h1.5v2.4h-1.5c-.3 0-.6.2-.6.7v1.1z"/></svg>
            <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 6.7c-.8.4-1.7.7-2.7.8.9-.5 1.6-1.4 1.9-2.5-.9.6-1.9 1.1-2.9 1.3-.9-.9-2.2-1.5-3.6-1.5-3.6 0-6.5 2.9-6.5 6.5 0 .5.1 1 .2 1.5-5.4-.3-10.2-2.9-13.4-6.9-.5.8-.8 1.7-.8 2.7 0 2.2 1.1 4.2 2.8 5.3-.8 0-1.6-.2-2.2-.6v.1c0 3.1 2.2 5.7 5.1 6.3-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1 1.7 2.1 4.3 3.6 7.1 3.6-2.2 1.7-5 2.7-8 2.7-.5 0-1 0-1.5-.1C5.3 22 8.5 23 11.9 23c8.5 0 13.1-7.1 13.1-13.1 0-.2 0-.4-.1-.6.9-.6 1.6-1.4 2.2-2.3z"/></svg>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Relief Aid Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
