'use client'
import React, { useState, useEffect } from 'react'

interface TerminalLogoProps {
  text?: string
  className?: string
}

export const TerminalLogo: React.FC<TerminalLogoProps> = ({ 
  text = 'EDDCODE',
  className = ''
}) => {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 800) // Cursor parpadea cada 800ms

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-mono text-white uppercase tracking-wider">
        {text}
      </span>
      <span 
        className={`inline-block w-2 h-5 bg-white ml-1 transition-opacity duration-150 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>
    </div>
  )
}