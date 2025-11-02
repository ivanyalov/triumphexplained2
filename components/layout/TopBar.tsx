'use client'

import { User } from 'lucide-react'

export function TopBar() {
  // Get user initials (placeholder - you can get from auth context)
  const userInitials = 'U'

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: '260px',
      right: 0,
      height: '72px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '32px',
      zIndex: 99
    }}>
      <button 
        aria-label="Profile"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease-out',
          color: '#000000',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'inherit'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#F9FAFB'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FFFFFF'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {userInitials}
      </button>
    </div>
  )
}