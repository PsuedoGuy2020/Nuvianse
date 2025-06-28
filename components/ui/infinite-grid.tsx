"use client"

import React from "react"

export const InfiniteGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 animate-infinite-grid">
      <div
        className="w-full h-full"
        style={{
          background: `
            linear-gradient(to right, rgba(16,16,32,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,16,32,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'moveGrid 16s linear infinite',
        }}
      />
      <style jsx global>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 40px, 40px 0;
          }
        }
      `}</style>
    </div>
  )
}
