import { useState } from "react";
import { useEventListener } from "./useEventListener";

export function useScrollStatus() {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const scrollPosition = () => {
    if (window.scrollY === 0) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  };

  useEventListener(window, "scroll", scrollPosition);

  return isOnTop;
}
