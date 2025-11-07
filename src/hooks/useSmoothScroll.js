// src/hooks/useSmoothScroll.js
import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest('a[href^="#"]');
      if (!target) return;

      const id = target.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      if (element) {
        event.preventDefault();

        const headerOffset = 80; // height of your sticky header (adjust if needed)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};

export default useSmoothScroll;
