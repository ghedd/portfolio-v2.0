import React, { useState, useEffect } from "react";

const useWindowSize = () => {
  const isSSR: boolean = typeof window !== undefined;
  const [windowSize, setwindowSize] = useState({
    width: isSSR ? window.innerWidth : 800,
  });

  const changeWindowSize = () => {
    setwindowSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      changeWindowSize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        changeWindowSize();
      });
    };
  }, []);
  console.log(windowSize);

  return windowSize;
};

export default useWindowSize;
