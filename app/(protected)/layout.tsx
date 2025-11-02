import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF'
    }}>
      <Sidebar />
      <TopBar />
      <main style={{
        marginLeft: '260px',
        marginTop: '72px',
        minHeight: 'calc(100vh - 72px)',
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