'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const isClient = typeof window === 'object';

export const useIsMobile = () => {
  const pathname = usePathname();
  // Always start with false to prevent hydration mismatch
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value after mount to prevent hydration mismatch
    const checkIsMobile = () => {
      if (isClient) {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    const handleResize = () => {
      if (isClient) {
        const newIsMobile = window.innerWidth <= 768;
        setIsMobile(newIsMobile);
      }
    };

    if (isClient) {
      // Set initial value
      checkIsMobile();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isMobile;
};
