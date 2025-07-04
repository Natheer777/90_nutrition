import React, { useEffect, useRef } from "react";
import "./DigitRain.css"; // سننشئ ملف CSS خارجي

const DigitRain = () => {
  const containerRef = useRef(null);
  const digits = "09090909090909";

  useEffect(() => {
    const container = containerRef.current;

    const createDigit = () => {
      const digit = document.createElement("div");
      digit.classList.add("digit");
      digit.innerText = digits[Math.floor(Math.random() * digits.length)];
      digit.style.left = Math.random() * window.innerWidth + "px";
      digit.style.animationDuration = 2 + Math.random() * 2 + "s";
      digit.style.fontSize = 12 + Math.random() * 15 + "px";
      container.appendChild(digit);

      // Remove after animation ends
      setTimeout(() => {
        container.removeChild(digit);
      }, 6000);
    };

    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createDigit();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="digit-container" ref={containerRef}></div>;
};

export default DigitRain;
