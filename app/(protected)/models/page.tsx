'use client'

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Box, Brain, FlaskConical, MessageSquare, Sparkles } from 'lucide-react'

export default function ModelsPage() {
  const router = useRouter()

  const models = [
    { id: 'gpt5', name: 'GPT5', icon: Box },
    { id: 'assistant', name: 'Assistant', icon: Brain },
    { id: 'experimenter', name: 'Experimenter', icon: FlaskConical },
    { id: 'writer', name: 'Writer', icon: MessageSquare },
    { id: 'artist', name: 'Artist', icon: Sparkles },
  ]

  return (
    <div>
      <h1 style={{
        fontSize: '48px',
        fontWeight: 800,
        color: '#000000',
        marginBottom: '48px',
        lineHeight: '1.2'
      }}>
        Models
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px'
      }}>
        {models.map((model) => {
          const Icon = model.icon
          return (
            <Card
              key={model.id}
              icon={<Icon size={40} />}
              title={model.name}
              onClick={() => router.push(`/models/${model.id}`)}
            />
          )
        })}
      </div>
    </div>
  )
}