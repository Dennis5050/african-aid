import React, { useState } from "react";
import binanceQR from "../assets/binance.jpg"; // ✅ correct relative import

// Inline SVG for copy icon
const IconCopy = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const donationTiers = [25, 50, 100, 250, 500];

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [copiedText, setCopiedText] = useState(null);

  // Digital transfer details
  const paypalEmail = "julietkimutai1@gmail.com";
  const binanceWallet = "793 220 057";

  const handleTierClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(0);
    }
  };

  const copyToClipboard = (text, type) => {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
  const finalAmountDisplay = finalAmount > 0 ? finalAmount.toFixed(2) : "0.00";

  return (
    <section
      id="donate"
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Together, We Can <span className="text-red-600">Restore Hope</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your donation helps provide{" "}
          <span className="font-semibold">
            clean water, food, shelter, healthcare, and education
          </span>{" "}
          to vulnerable families across Africa. Every act of kindness makes a
          real impact.
        </p>

        {/* Donation Card */}
        <div className="mt-12 bg-white border border-red-100 shadow-2xl rounded-2xl p-8 sm:p-10">
          {/* Tier Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
            {donationTiers.map((amount) => (
              <button
                key={amount}
                onClick={() => handleTierClick(amount)}
                className={`py-3 rounded-xl text-lg font-semibold transition-all duration-200 ${
                  selectedAmount === amount
                    ? "bg-red-600 text-white shadow-md scale-[1.03]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="mb-6 text-left">
            <label
              htmlFor="custom-amount"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Enter Custom Amount (USD)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 font-semibold">
                $
              </span>
              <input
                id="custom-amount"
                type="text"
                value={customAmount || selectedAmount}
                onChange={handleCustomChange}
                placeholder="500"
                className={`w-full pl-10 pr-4 py-3 text-xl rounded-xl border-2 transition duration-200 focus:outline-none ${
                  (customAmount || selectedAmount)
                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                    : "border-gray-300 focus:ring-1 focus:ring-red-300"
                }`}
              />
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            You are about to donate <strong>${finalAmountDisplay}</strong> — 
            thank you for supporting lives in need! Use Binance or PayPal to channel your contribution.
          </p>
        </div>

        {/* Digital Transfer Options */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Donation Methods
          </h3>

          {/* Binance Wallet Section with QR */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl mb-4 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <img
                src={binanceQR}
                alt="Binance QR Code"
                className="w-24 h-24 rounded-lg border border-gray-200 shadow-sm"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-700">
                  Binance Pay / Wallet (BEP20)
                </p>
                <p className="text-red-600 break-all">{binanceWallet}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Scan the QR code or copy the ID to send via Binance Pay
                </p>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(binanceWallet, "Binance ID")}
              className="flex items-center text-red-600 hover:text-red-700 font-medium px-4 py-2 rounded-lg border border-red-200 hover:border-red-400 transition"
            >
              <IconCopy className="w-5 h-5 mr-1" />
              {copiedText === "Binance ID" ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* PayPal Section */}
          <div className="bg-white border border-gray-200 p-4 rounded-xl flex justify-between items-center text-sm md:text-base">
            <div className="text-left">
              <p className="font-semibold text-gray-700">PayPal Email</p>
              <p className="text-red-600 break-all">{paypalEmail}</p>
            </div>
            <button
              onClick={() => copyToClipboard(paypalEmail, "PayPal Email")}
              className="flex items-center text-red-600 hover:text-red-700 font-medium px-3 py-1 rounded-lg transition"
            >
              <IconCopy className="w-5 h-5 mr-1" />
              {copiedText === "PayPal Email" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
