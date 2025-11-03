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
      <aside style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: isCollapsed ? '72px' : '260px',
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
                background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
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
                  cursor: 'pointer',
                  justifyContent: isCollapsed ? 'center' : 'flex-start'
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
                {!isCollapsed && (
                  <span style={{
                    fontSize: '16px',
                    fontWeight: isActive ? 600 : 500
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
              border: '1px solid rgba(0,0,0,0.08)',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.2s ease-out'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F9FAFB' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF' }}
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