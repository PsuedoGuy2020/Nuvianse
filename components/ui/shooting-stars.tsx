"use client";

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  startX: number;
  startY: number;
  size: number;
  duration: number;
  delay: number;
  direction: 'diagonal-right' | 'diagonal-left' | 'horizontal';
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  const createStar = (index: number) => {
    const directions = ['diagonal-right', 'diagonal-left', 'horizontal'] as const;
    const direction = directions[Math.floor(Math.random() * directions.length)];
    
    let startX = 0;
    let startY = 0;
    
    switch (direction) {
      case 'diagonal-right':
        startX = -10;
        startY = Math.random() * 50;
        break;
      case 'diagonal-left':
        startX = 110;
        startY = Math.random() * 50;
        break;
      case 'horizontal':
        startX = 110;
        startY = 20 + Math.random() * 30;
        break;
    }

    return {
      id: index,
      startX,
      startY,
      size: 30 + Math.random() * 50,
      duration: 1.5 + Math.random() * 2,
      delay: Math.random() * 3,
      direction,
    };
  };

  useEffect(() => {
    const initialStars = Array.from({ length: 15 }).map((_, index) => createStar(index));
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => createStar(star.id))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute h-[2px] bg-gradient-to-r from-emerald-400 via-emerald-300 to-transparent"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: `${star.size}px`,
            animation: `shooting-star-${star.direction} ${star.duration}s ${star.delay}s infinite ease-out`,
            opacity: 0,
            boxShadow: '0 0 10px rgba(52, 211, 153, 0.5), 0 0 20px rgba(52, 211, 153, 0.3)',
          }}
        />
      ))}
    </div>
  );
}