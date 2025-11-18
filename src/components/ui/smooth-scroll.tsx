"use client";

import { ReactNode, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const smoother = useRef<ScrollSmoother | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.current?.kill();
    };
  }, []);

  // Scroll to top on path change
  useEffect(() => {
    if (smoother.current) {
        smoother.current.scrollTo(0, false);
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
