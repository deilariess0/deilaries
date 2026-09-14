import { useState, useEffect } from 'react';

const STORAGE_KEY = 'privacyAgreed';

export default function usePrivacyGate() {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Use sessionStorage — resets when the tab/browser is closed.
      // This means recruiters see the reminder on every new visit,
      // but the page doesn't nag them on every refresh.
      const agreed = sessionStorage.getItem(STORAGE_KEY) === 'true';
      setIsVerified(agreed);
    } catch {
      // sessionStorage blocked (private mode with strict settings)
      setIsVerified(false);
    }
    setIsLoading(false);
  }, []);

  const handleAgree = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore storage errors
    }
    setIsVerified(true);
  };

  return { isVerified, isLoading, handleAgree };
}