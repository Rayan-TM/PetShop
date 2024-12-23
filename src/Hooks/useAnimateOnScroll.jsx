import { useEffect, useRef, useState } from "react";

export default function useAnimateOnScroll({
  initialStatus = false,
  threshold = 0.3,
}) {
  const container = useRef();
  const [isVisible, setIsVisible] = useState(initialStatus);

  useEffect(() => {
    if (!container.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    observer.observe(container.current);

    return () => observer.disconnect();
  }, []);

  return [container, isVisible];
}
