'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, FileText, Code, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { SettingsModal } from './SettingsModal'

interface SidebarProps {
  isCollapsed?: boolean
  onToggleCollapse?: () => void
}

export function Sidebar({ isCollapsed = false, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const navItems = [
    { path: '/models', label: 'Модели', icon: Box },
    { path: '/prompts', label: 'Промпты', icon: FileText },
    { path: '/functions', label: 'Функции', icon: Code },
  ]

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen shadow-lg z-[100]"
        style={{
          width: isCollapsed ? '72px' : '260px',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(17,24,39,0.92) 100%)',
          borderRight: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        {/* Logo */}
        <div style={{
          paddingTop: '24px',
          paddingLeft: isCollapsed ? '16px' : '24px',
          paddingBottom: '0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            justifyContent: 'flex-start'
          }}>
            {!isCollapsed && (
              <span style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#F9FAFB'
              }}>
                Pelevin Explained
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav style={{
          marginTop: '48px',
          paddingLeft: isCollapsed ? '12px' : '20px',
          paddingRight: isCollapsed ? '12px' : '20px',
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
                  gap: isCollapsed ? '0' : '12px',
                  height: '48px',
                  width: isCollapsed ? '48px' : '220px',
                  paddingLeft: isCollapsed ? '0' : '16px',
                  paddingRight: isCollapsed ? '0' : '16px',
                  borderRadius: '12px',
                  background: isActive 
                    ? 'linear-gradient(135deg, #111827 0%, #0B1220 100%)' 
                    : 'transparent',
                  color: isActive ? '#FFFFFF' : '#D1D5DB',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isActive ? '0 6px 18px rgba(0, 0, 0, 0.4)' : 'none',
                  cursor: 'pointer',
                  justifyContent: isCollapsed ? 'center' : 'flex-start'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
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
                  color={isActive ? '#FFFFFF' : '#9CA3AF'} 
                />
                {!isCollapsed && (
                  <span style={{
                    fontSize: '16px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#FFFFFF' : '#E5E7EB'
                  }}>
                    {item.label}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Actions */}
        <div style={{
          paddingLeft: isCollapsed ? '12px' : '20px',
          paddingRight: isCollapsed ? '12px' : '20px',
          paddingBottom: '24px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between'
        }}>
          <button 
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? 'Развернуть боковую панель' : 'Свернуть боковую панель'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              width: '40px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.12)',
              backgroundColor: 'rgba(255,255,255,0.06)',
              cursor: 'pointer',
              transition: 'all 0.2s ease-out'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)' }}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          {!isCollapsed && (
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
                color: '#E5E7EB',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'inherit',
                fontSize: '16px',
                fontWeight: 500
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Settings size={24} color="#9CA3AF" />
              <span>Настройки</span>
            </button>
          )}
        </div>
      </aside>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  )
}