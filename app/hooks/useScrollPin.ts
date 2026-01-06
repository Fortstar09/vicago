import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook to pin a section when it reaches the top of the viewport
 * Usage: const ref = useScrollPin();
 *        <div ref={ref}> ... </div>
 */
export function useScrollPin() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          pin: true,
          pinSpacing: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
