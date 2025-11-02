'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Package, Flame, Square, Ruler, Copy } from 'lucide-react'

const promptData: Record<string, { name: string; icon: any }> = {
  artifacts: { name: 'Artifacts', icon: Package },
  ceremonies: { name: 'Ceremonies', icon: Flame },
  objects: { name: 'Objects', icon: Square },
  schema: { name: 'Schema', icon: Ruler },
}

export default function PromptDetailPage() {
  const params = useParams()
  const id = params.id as string
  const prompt = promptData[id]

  if (!prompt) {
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
            Prompt not found
          </h2>
          <Link href="/prompts" style={{
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
            Back to Prompts
          </Link>
        </div>
      </div>
    )
  }

  const Icon = prompt.icon

  return (
    <div>
      {/* Back Button */}
      <Link 
        href="/prompts"
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
          {prompt.name}
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
          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '16px',
            marginTop: 0
          }}>
            Description
          </h2>
          <p style={{ marginBottom: '20px', marginTop: 0 }}>
            Description for the <strong>{prompt.name}</strong> prompt will be added in future updates.
            Here will be detailed description, usage examples, and recommendations for applying this prompt.
          </p>

          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '16px',
            marginTop: '32px'
          }}>
            Prompt Template
          </h2>
          <div style={{
            backgroundColor: '#F9FAFB',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            position: 'relative'
          }}>
            <button style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F9FAFB'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF'
            }}
            >
              <Copy size={18} color="#000000" />
            </button>
            <code style={{
              fontSize: '15px',
              color: '#6B7280',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              lineHeight: '1.6'
            }}>
              Prompt content will appear here...
            </code>
          </div>

          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '16px',
            marginTop: '32px'
          }}>
            Information
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            <div>
              <div style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '8px',
                fontWeight: 500
              }}>
                Category
              </div>
              <div style={{
                fontSize: '17px',
                color: '#000000',
                fontWeight: 500
              }}>
                General
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '8px',
                fontWeight: 500
              }}>
                Complexity
              </div>
              <div style={{
                fontSize: '17px',
                color: '#000000',
                fontWeight: 500
              }}>
                Medium
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '8px',
                fontWeight: 500
              }}>
                Version
              </div>
              <div style={{
                fontSize: '17px',
                color: '#000000',
                fontWeight: 500
              }}>
                1.0.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}