'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Box } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/models')
      router.refresh()
    } catch (error: any) {
      setError(error.message || 'Ошибка входа')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="decorative-background" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '24px',
        padding: '48px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px'
          }}>
            <Box size={48} color="#FFFFFF" />
          </div>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '8px',
            marginTop: 0
          }}>
            Pelevin Explained
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            margin: 0
          }}>
            Войдите в свой аккаунт
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleLogin} style={{
          marginTop: '40px'
        }}>
          <div style={{
            marginBottom: '16px'
          }}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Электронная почта"
              style={{
                width: '100%',
                height: '48px',
                padding: '16px',
                fontSize: '16px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                color: '#000000',
                fontFamily: 'inherit',
                transition: 'all 0.2s ease-out'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#000000'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.05)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          <div style={{
            marginBottom: '24px'
          }}>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Пароль"
              style={{
                width: '100%',
                height: '48px',
                padding: '16px',
                fontSize: '16px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '12px',
                color: '#000000',
                fontFamily: 'inherit',
                transition: 'all 0.2s ease-out'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#000000'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 0, 0, 0.05)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {error && (
            <div style={{
              marginBottom: '24px',
              padding: '12px 16px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#EF4444'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              height: '48px',
              backgroundColor: '#000000',
              background: 'linear-gradient(135deg, #000000 0%, #1F2937 100%)',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '12px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease-out',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              opacity: loading ? 0.6 : 1,
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}