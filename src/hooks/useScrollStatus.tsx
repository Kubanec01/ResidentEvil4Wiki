import { useEffect, useState } from "react";

export function useScrollStatus() {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.scrollY === 0) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    window.addEventListener('scroll', scrollPosition);

    return () => {
        window.removeEventListener('scroll', scrollPosition);
    }

  });

  return isOnTop
}
