"use client";

import { useState, useEffect } from "react";

export default function ShimmerQuote({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      className={`text-center max-w-4xl transition-all duration-1000 ${
        isDone ? "glow-bg" : ""
      }`}
    >
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight shimmer-text">
        &bdquo;{displayedText}
        <span className="typing-cursor">|</span>&ldquo;
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}