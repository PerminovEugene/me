"use client";

import React, { useState, useEffect } from "react";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setShowBanner(true);
    } else {
      setConsentGiven(consent === "true");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsentGiven(true);
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("cookieConsent", "false");
    setConsentGiven(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="z-50 fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2 flex-col lg:flex-row">
      <p className="mb-2">
        I use cookies to track the number of visitors and enhance your
        experience. Do you accept?
      </p>
      <div className="flex">
        <button
          onClick={handleAccept}
          className="mr-2 p-2 bg-green-500 rounded"
        >
          Accept
        </button>
        <button onClick={handleRefuse} className="p-2 bg-red-500 rounded">
          Refuse
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
