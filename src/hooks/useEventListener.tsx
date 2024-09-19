import { useEffect } from "react";

export function useEventListener(
  element: HTMLElement | Window,
  eventName: string,
  handler: EventListener
) {
  useEffect(() => {
    element.addEventListener(eventName, handler);

    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, []);
}
