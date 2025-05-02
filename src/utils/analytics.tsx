import { useEffect } from "react";
import ReactGA from "react-ga4";

export const Analytics = () => {
  useEffect(() => {
    // Initialize Gooogle analytics
    ReactGA.initialize("G-85RPEZ0RX5");
  }, []);

  return (
    <div>
      <p>Google Analytics</p>
    </div>
  );
};
