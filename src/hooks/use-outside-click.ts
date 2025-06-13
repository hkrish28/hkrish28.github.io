import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    // Specify event type to be MouseEvent or TouchEvent for the listener
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if the ref is current and if the clicked target is outside the ref's element
      // event.target could be null or not an HTMLElement, so cast it or check for null
      if (!ref.current || (event.target instanceof Node && ref.current.contains(event.target))) {
        return;
      }
      callback(event);
    };

    // Use specific event types for addEventListener
    document.addEventListener("mousedown", listener as EventListener); 
    document.addEventListener("touchstart", listener as EventListener);

    return () => {
      document.removeEventListener("mousedown", listener as EventListener);
      document.removeEventListener("touchstart", listener as EventListener);
    };
  }, [ref, callback]); // ref and callback are stable, but good to include in dependency array if they could change
};