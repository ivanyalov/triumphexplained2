'use client'

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Package, Flame, Square, Ruler } from 'lucide-react'

export default function PromptsPage() {
  const router = useRouter()

  const prompts = [
    { id: 'artifacts', name: 'Artifacts', icon: Package },
    { id: 'ceremonies', name: 'Ceremonies', icon: Flame },
    { id: 'objects', name: 'Objects', icon: Square },
    { id: 'schema', name: 'Schema', icon: Ruler },
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
        Prompts
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px'
      }}>
        {prompts.map((prompt) => {
          const Icon = prompt.icon
          return (
            <Card
              key={prompt.id}
              icon={<Icon size={40} />}
              title={prompt.name}
              onClick={() => router.push(`/prompts/${prompt.id}`)}
            />
          )
        })}
      </div>
    </div>
  )
}