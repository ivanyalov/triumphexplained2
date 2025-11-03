'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { useState } from 'react'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const sidebarWidth = isCollapsed ? 72 : 260
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF'
    }}>
      <Sidebar 
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed((v) => !v)}
      />
      <main style={{
        marginLeft: `${sidebarWidth}px`,
        minHeight: '100vh',
        position: 'relative'
      }}>
        <div className="decorative-background" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '64px',
          paddingRight: '64px',
          paddingTop: '48px',
          paddingBottom: '64px'
        }}>
          {children}
        </div>
      </main>
    </div>
  )
}