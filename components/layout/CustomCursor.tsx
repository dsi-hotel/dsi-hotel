'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    const handleHoverIn = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.matches('a, button, [role="button"], input, textarea, select, label')
      ) {
        setIsHovering(true)
      }
    }
    const handleHoverOut = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.matches('a, button, [role="button"], input, textarea, select, label')
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mouseover', handleHoverIn)
    document.addEventListener('mouseout', handleHoverOut)

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`
      }

      ringPosRef.current.x = ringPosRef.current.x + (posRef.current.x - ringPosRef.current.x) * 0.15
      ringPosRef.current.y = ringPosRef.current.y + (posRef.current.y - ringPosRef.current.y) * 0.15

      if (ringRef.current) {
        const ringSize = isHovering ? 48 : 32
        const half = ringSize / 2
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - half}px, ${ringPosRef.current.y - half}px)`
        ringRef.current.style.width = `${ringSize}px`
        ringRef.current.style.height = `${ringSize}px`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseover', handleHoverIn)
      document.removeEventListener('mouseout', handleHoverOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isHovering, isVisible])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.3s ease',
          willChange: 'transform',
          marginTop: isHovering ? -2 : 0,
          marginLeft: isHovering ? -2 : 0,
        }}
        aria-hidden="true"
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          border: '1.5px solid #ffffff',
          mixBlendMode: 'difference',
          opacity: isVisible ? 0.7 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  )
}
