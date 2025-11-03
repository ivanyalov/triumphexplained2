'use client'

import { User } from 'lucide-react'

interface TopBarProps {
  leftOffset?: number
}

export function TopBar({ leftOffset = 260 }: TopBarProps) {
  // Get user initials (placeholder - you can get from auth context)
  const userInitials = 'U'

  return (
    <div 
      className="fixed top-0 right-0 h-[72px] bg-gradient-to-b from-black/75 to-gray-800/75 backdrop-blur-xl border-b border-white/10 shadow-lg flex items-center justify-end pr-8 z-[99]"
      style={{ left: `${leftOffset}px` }}
    >
      <button
        aria-label="Профиль"
        className="h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold flex items-center justify-center transition-transform transition-colors duration-200 hover:bg-white/20 hover:scale-105"
      >
        {userInitials}
      </button>
    </div>
  )
}