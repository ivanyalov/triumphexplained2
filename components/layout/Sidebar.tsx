'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, FileText, Code, Settings } from 'lucide-react'
import { useState } from 'react'
import { SettingsModal } from './SettingsModal'

export function Sidebar() {
  const pathname = usePathname()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const navItems = [
    { path: '/models', label: 'Models', icon: Box },
    { path: '/prompts', label: 'Prompts', icon: FileText },
    { path: '/functions', label: 'Functions', icon: Code },
  ]

  return (
    <>
      <aside style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '260px',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 100
      }}>
        {/* Logo */}
        <div style={{
          paddingTop: '24px',
          paddingLeft: '24px',
          paddingBottom: '0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
            }}>
              <Box size={24} color="#FFFFFF" />
            </div>
            <span style={{
              fontSize: '20px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Triumph Guide
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{
          marginTop: '48px',
          paddingLeft: '20px',
          paddingRight: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1
        }}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname.startsWith(item.path)
            
            return (
              <Link 
                key={item.path} 
                href={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  height: '48px',
                  width: '220px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  borderRadius: '12px',
                  backgroundColor: isActive 
                    ? 'linear-gradient(135deg, #000000 0%, #1F2937 100%)' 
                    : 'transparent',
                  background: isActive 
                    ? 'linear-gradient(135deg, #000000 0%, #1F2937 100%)' 
                    : 'transparent',
                  color: isActive ? '#FFFFFF' : '#000000',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#F9FAFB'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <Icon 
                  size={24} 
                  color={isActive ? '#FFFFFF' : '#6B7280'} 
                />
                <span style={{
                  fontSize: '16px',
                  fontWeight: isActive ? 600 : 500
                }}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Settings Button */}
        <div style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '24px'
        }}>
          <button 
            onClick={() => setIsSettingsOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              height: '48px',
              width: '220px',
              paddingLeft: '16px',
              paddingRight: '16px',
              borderRadius: '12px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#000000',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              fontFamily: 'inherit',
              fontSize: '16px',
              fontWeight: 500
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F9FAFB'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            <Settings size={24} color="#6B7280" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  )
}