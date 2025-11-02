'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Box, Brain, FlaskConical, MessageSquare, Sparkles } from 'lucide-react'

const modelData: Record<string, { name: string; icon: any }> = {
  gpt5: { name: 'GPT5', icon: Box },
  assistant: { name: 'Assistant', icon: Brain },
  experimenter: { name: 'Experimenter', icon: FlaskConical },
  writer: { name: 'Writer', icon: MessageSquare },
  artist: { name: 'Artist', icon: Sparkles },
}

export default function ModelDetailPage() {
  const params = useParams()
  const id = params.id as string
  const model = modelData[id]

  if (!model) {
    return (
      <div>
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '24px'
          }}>
            Model not found
          </h2>
          <Link href="/models" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#000000',
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.2s ease-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#6B7280'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
          >
            <ArrowLeft size={18} />
            Back to Models
          </Link>
        </div>
      </div>
    )
  }

  const Icon = model.icon

  return (
    <div>
      {/* Back Button */}
      <Link 
        href="/models"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#000000',
          textDecoration: 'none',
          fontSize: '16px',
          marginBottom: '32px',
          transition: 'color 0.2s ease-out',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#6B7280'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </Link>

      {/* Header Card */}
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon size={32} color="#FFFFFF" />
        </div>
        <h1 style={{
          fontSize: '40px',
          fontWeight: 700,
          color: '#000000',
          margin: 0,
          lineHeight: '1.2'
        }}>
          {model.name}
        </h1>
      </div>

      {/* Content Card */}
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '20px',
        padding: '48px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        marginTop: '24px',
        maxWidth: '800px'
      }}>
        <div style={{
          fontSize: '17px',
          lineHeight: '1.7',
          color: '#000000'
        }}>
          <p style={{ marginBottom: '20px', marginTop: 0 }}>
            Description for the <strong>{model.name}</strong> model will be added in future updates.
          </p>
          <p style={{ marginBottom: '20px', marginTop: 0 }}>
            Here will be detailed information about capabilities, settings, and usage examples for this model.
          </p>
        </div>
      </div>
    </div>
  )
}