import { useState } from "react";
import { useEventListener } from "./useEventListener";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEventListener(window, "resize", handleResize);

  return windowWidth;
}
