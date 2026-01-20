import { useState, useEffect, useCallback, useRef } from 'react';
import { totalSlides } from '../data/slides';

interface UseSlideNavigationReturn {
  currentSlide: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isOverviewOpen: boolean;
  toggleOverview: () => void;
  closeOverview: () => void;
  showNotes: boolean;
  toggleNotes: () => void;
}

export function useSlideNavigation(): UseSlideNavigationReturn {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const wheelTimeoutRef = useRef<number | null>(null);
  const touchStartRef = useRef<number>(0);

  // Initialize from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/#slide=(\d+)/);
    if (match) {
      const slideNum = parseInt(match[1], 10);
      if (slideNum >= 1 && slideNum <= totalSlides) {
        setCurrentSlide(slideNum);
      }
    }
  }, []);

  // Update URL hash when slide changes
  useEffect(() => {
    window.history.replaceState(null, '', `#slide=${currentSlide}`);
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 1 && index <= totalSlides) {
      setCurrentSlide(index);
      setIsOverviewOpen(false);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 1));
  }, []);

  const toggleOverview = useCallback(() => {
    setIsOverviewOpen(prev => !prev);
  }, []);

  const closeOverview = useCallback(() => {
    setIsOverviewOpen(false);
  }, []);

  const toggleNotes = useCallback(() => {
    setShowNotes(prev => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if in overview mode for arrow keys (let overview handle them)
      if (isOverviewOpen && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides);
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          toggleOverview();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          toggleNotes();
          break;
        case 'Escape':
          if (isOverviewOpen) {
            e.preventDefault();
            closeOverview();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, toggleOverview, toggleNotes, closeOverview, isOverviewOpen]);

  // Wheel navigation with throttling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isOverviewOpen) return;

      // Throttle wheel events
      if (wheelTimeoutRef.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          nextSlide();
        } else {
          prevSlide();
        }

        wheelTimeoutRef.current = window.setTimeout(() => {
          wheelTimeoutRef.current = null;
        }, 500);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [nextSlide, prevSlide, isOverviewOpen]);

  // Touch/Swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (isOverviewOpen) return;
      touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isOverviewOpen) return;
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStartRef.current - touchEnd;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, isOverviewOpen]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    isOverviewOpen,
    toggleOverview,
    closeOverview,
    showNotes,
    toggleNotes
  };
}
