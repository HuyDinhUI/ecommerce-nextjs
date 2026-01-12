"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setShow(true);
      } else if (currentY < lastY) {
        setShow(true);
      } else {
        setShow(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return show;
}
