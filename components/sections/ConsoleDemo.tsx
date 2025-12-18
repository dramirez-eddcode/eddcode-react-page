'use client'
import React, { useState, useEffect, useRef } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  onComplete?: () => void
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, delay = 0, onComplete }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Start delay timer
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, started, onComplete])

  return <span>{displayText}</span>
}

export const ConsoleDemo: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Delays más cortos para una animación fluida (total ~6s en vez de ~21s)
  const commands = [
    { prompt: '$ ', command: 'npm create eddcode-app', delay: 200 },
    { prompt: '✨ ', command: 'Creando tu aplicación...', delay: 100 },
    { prompt: '📦 ', command: 'Instalando dependencias...', delay: 100 },
    { prompt: '🚀 ', command: 'Tu app está lista!', delay: 100 },
    { prompt: '$ ', command: 'npm run dev', delay: 200 },
    { prompt: '🔥 ', command: 'Servidor ejecutándose en http://localhost:3000', delay: 100 }
  ]

  // Solo iniciar animación cuando la sección es visible
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [isVisible])

  const handleLineComplete = () => {
    setTimeout(() => {
      if (currentLine < commands.length - 1) {
        setCurrentLine(prev => prev + 1)
      }
    }, 300) // Reducido de 500ms a 300ms
  }

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Desarrollo en Acción
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            Así trabajamos: rápido, eficiente y con las mejores herramientas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 font-mono">
                eddcode-terminal
              </div>
              <div className="w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[180px]">
              {isVisible ? (
                commands.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className="mb-2 flex items-start">
                    <span className={`
                      ${line.prompt === '$ ' ? 'text-green-400' :
                        line.prompt === '✨ ' ? 'text-purple-400' :
                        line.prompt === '📦 ' ? 'text-blue-400' :
                        line.prompt === '🚀 ' ? 'text-red-400' :
                        line.prompt === '🔥 ' ? 'text-orange-400' : 'text-yellow-400'}
                    `}>
                      {line.prompt}
                    </span>
                    <span className="text-white">
                      {index === currentLine ? (
                        <Typewriter
                          text={line.command}
                          speed={25}
                          delay={line.delay}
                          onComplete={handleLineComplete}
                        />
                      ) : (
                        line.command
                      )}
                    </span>
                    {index === currentLine && (
                      <span className={`ml-1 inline-block w-2 h-5 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex items-center text-gray-500">
                  <span className="text-green-400">$ </span>
                  <span className="ml-1 inline-block w-2 h-5 bg-green-400 animate-pulse"></span>
                </div>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-white mb-2">Setup Rápido</h3>
              <p className="text-gray-400 text-sm">
                Tu proyecto listo en minutos, no horas
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold text-white mb-2">Herramientas Modernas</h3>
              <p className="text-gray-400 text-sm">
                Stack tecnológico de vanguardia
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-white mb-2">Deploy Automático</h3>
              <p className="text-gray-400 text-sm">
                De desarrollo a producción sin fricción
              </p>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-green-600/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}