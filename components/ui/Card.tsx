'use client'

interface CardProps {
  icon: React.ReactNode
  title: string
  description?: string
  onClick: () => void
}

export function Card({ icon, title, description, onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '20px',
        padding: '40px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)'
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)'
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(0.98)'
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
    >
      {/* Icon Container */}
      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#000000',
        marginBottom: description ? '12px' : '0',
        lineHeight: '1.3'
      }}>
        {title}
      </h3>
      
      {/* Description */}
      {description && (
        <p style={{
          fontSize: '15px',
          color: '#6B7280',
          lineHeight: '1.6',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>
      )}
    </div>
  )
}