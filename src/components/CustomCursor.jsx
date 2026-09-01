import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    let x = 0, y = 0;
    let mouseX = 0, mouseY = 0;
    let rafId = null;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.35;
      y += (mouseY - y) * 0.35;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleOver = (e) => {
      const t = e.target;
      if (!t) return;
      const tag = t.tagName?.toLowerCase();
      if (tag === 'a' || tag === 'button' || t.closest('a') || t.closest('button') || t.closest('[role="button"]') || t.closest('input') || t.closest('textarea')) {
        dotRef.current?.classList.add('hovering');
      }
    };

    const handleOut = (e) => {
      const t = e.target;
      if (!t) return;
      const tag = t.tagName?.toLowerCase();
      if (tag === 'a' || tag === 'button' || t.closest('a') || t.closest('button') || t.closest('[role="button"]') || t.closest('input') || t.closest('textarea')) {
        dotRef.current?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseout', handleOut, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor-dot" />
  );
};

export default CustomCursor;