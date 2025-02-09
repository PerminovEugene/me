"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const GAComponent = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setConsentGiven(true);
    }
  }, []);

  if (!consentGiven) return null;

  return <GoogleAnalytics gaId="G-PHWX53XBDH" />;
};

export default GAComponent;
