'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Box, Brain, FlaskConical, MessageSquare, Sparkles } from 'lucide-react'

const modelData: Record<string, { name: string; icon: any }> = {
  gpt5: { name: 'GPT5', icon: Box },
  assistant: { name: 'Ассистент', icon: Brain },
  experimenter: { name: 'Экспериментатор', icon: FlaskConical },
  writer: { name: 'Писатель', icon: MessageSquare },
  artist: { name: 'Художник', icon: Sparkles },
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
            Модель не найдена
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
            Вернуться к моделям
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
          color: '#FFFFFF',
          textDecoration: 'none',
          fontSize: '16px',
          marginBottom: '32px',
          transition: 'color 0.2s ease-out',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#D1D5DB'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
      >
        <ArrowLeft size={18} />
        <span>Назад</span>
      </Link>

      {/* Header Card */}
      <div style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F8FB 100%)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        width: '100%'
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

      {/* Content Cards */}
      {id === 'assistant' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Описание */}
          <div style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F8FB 100%)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Описание</h2>
            <div style={{ fontSize: '17px', lineHeight: '1.7', color: '#000000' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Для чего</h3>
                <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
                  Главная аналитическая модель для кураторской работы. Работает с корпусом текстов Пелевина, артефактами и объектами из базы данных. Помогает выстраивать экспозицию через поиск смысловых связей и структурирование материала.
                </p>
              </div>
              <div style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>База знаний</h3>
                <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
                  Подключена ко всем книгам, артефактам, объектам, церемониям Триумфа.
                </p>
              </div>
            </div>
          </div>

          {/* Когда использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Когда использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Поиск и подбор артефактов под концепцию зала</li>
              <li style={{ marginBottom: '8px' }}>Анализ смысловых связей между элементами выставки</li>
              <li style={{ marginBottom: '8px' }}>Планирование концепции залов и маршрутов</li>
              <li style={{ marginBottom: '8px' }}>Создание сценариев движения зрителя по выставке</li>
              <li style={{ marginBottom: '8px' }}>Проверка гипотез и интерпретаций через материал</li>
              <li style={{ marginBottom: '8px' }}>Визуальное описание артефактов (раздельно: смысл + визуал)</li>
              <li style={{ marginBottom: 0 }}>Создание ASCII-схем залов и экспозиций</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Когда НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Финальные тексты для публикации → используй Писателя (Ассистент дает аналитические конспекты, не маркетинговые тексты)</li>
              <li style={{ marginBottom: '8px' }}>Генерация визуальных промптов и изображений → используй Художника</li>
              <li style={{ marginBottom: 0 }}>Нестандартные задачи без готовых инструкций → используй Экспериментатора</li>
            </ul>
          </div>

          {/* Особенности и принцип работы */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Особенности модели</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Работает как аналитический инструмент, не как собеседник</li>
              <li style={{ marginBottom: '8px' }}>Опирается только на базу данных, не домысливает</li>
              <li style={{ marginBottom: '8px' }}>Всегда указывает степень уверенности в связях</li>
              <li style={{ marginBottom: '8px' }}>Мыслит как куратор: видит роль элементов в экспозиции, ритм, контрасты, опыт зрителя</li>
              <li style={{ marginBottom: 0 }}>Дает структурированные ответы: СУТЬ → КОНТЕКСТ → СТРУКТУРА → СПРАВОЧНЫЙ МАТЕРИАЛ</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Принцип работы</h3>
            <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Приходишь с кураторской задачей → Ассистент находит материал в базе, анализирует связи, предлагает структуру. Честно говорит когда материала нет или связь слабая.
            </p>
          </div>
        </div>
      ) : id === 'experimenter' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Описание */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Описание</h2>
            <div style={{ fontSize: '17px', lineHeight: '1.7', color: '#000000' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Для чего</h3>
                <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
                  Максимально гибкая модель без предустановленных инструкций. Базируется на чистой GPT5 с доступом ко всей базе знаний Триумфа.
                </p>
              </div>
              <div style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>База знаний</h3>
                <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
                  Подключена ко всем книгам, артефактам, объектам, церемониям.
                </p>
              </div>
            </div>
          </div>

          {/* Когда использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Когда использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Нестандартные задачи, для которых нет готовых инструкций в Ассистенте</li>
              <li style={{ marginBottom: '8px' }}>Когда нужна максимальная адаптация под твои конкретные требования и стиль</li>
              <li style={{ marginBottom: '8px' }}>Экспериментальные подходы к кураторской работе</li>
              <li style={{ marginBottom: 0 }}>Как альтернатива Ассистенту для специфических кейсов</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Когда НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Написание финальных текстов → используй Писателя (Экспериментатор создает тексты с AI-структурой)</li>
              <li style={{ marginBottom: '8px' }}>Генерация визуальных промптов → используй Художника</li>
              <li style={{ marginBottom: 0 }}>Типовые кураторские задачи → используй Ассистента (он оптимизирован под стандартный workflow)</li>
            </ul>
          </div>

          {/* Принцип работы / Недостатки */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Принцип работы</h2>
            <p style={{ marginTop: 0, marginBottom: '24px', color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Самая податливая модель - дай четкие инструкции и получишь результат именно в твоем стиле. Идеальна когда стандартные модели не подходят под задачу.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Недостатки</h3>
            <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              нет инструкций для контроля качества, нет заданой роли.
            </p>
          </div>
        </div>
      ) : id === 'writer' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Описание */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '24px',
              marginTop: 0
            }}>
              Описание
            </h2>
            <div style={{ fontSize: '17px', lineHeight: '1.7', color: '#000000' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Для чего</h3>
                <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
                  Создание профессиональных текстов без признаков AI. Специализирован на качественном копирайтинге для всех текстовых материалов проекта.
                </p>
              </div>
              <div style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>База знаний</h3>
                <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
                  Подключен ко всей базе Триумфа - книги, артефакты, объекты, контекст проекта.
                </p>
              </div>
            </div>
          </div>

          {/* Когда использовать / НЕ использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Когда использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Описания залов и выставок</li>
              <li style={{ marginBottom: '8px' }}>Описания артефактов и объектов</li>
              <li style={{ marginBottom: '8px' }}>Маркетинговые тексты (посты, анонсы, промо)</li>
              <li style={{ marginBottom: '8px' }}>Статьи и лонгриды</li>
              <li style={{ marginBottom: 0 }}>Любой финальный текстовый контент для публикации</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Когда НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Структурирование выставки или создание схем → используй Ассистента</li>
              <li style={{ marginBottom: 0 }}>Генерация изображений → используй Художника</li>
            </ul>
          </div>

          {/* Рекомендации */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '24px', marginTop: 0 }}>Рекомендации по использованию</h2>
            <p style={{ marginTop: 0, marginBottom: '16px', color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Для лучших результатов указывай в запросе:
            </p>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Длину текста: короткое описание (100-150 слов), средний текст (300-500 слов), лонгрид (1000+ слов)</li>
              <li style={{ marginBottom: '8px' }}>Тон и стиль: формальный, неформальный, академический, разговорный</li>
              <li style={{ marginBottom: 0 }}>Платформу/формат: Instagram, Telegram, сайт, email, печатные материалы</li>
            </ul>
          </div>
        </div>
      ) : id === 'artist' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Описание */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '24px',
              marginTop: 0
            }}>
              Описание
            </h2>
            <div style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Для чего
                </h3>
                <p style={{
                  marginBottom: 0,
                  marginTop: 0,
                  color: '#000000',
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}>
                  Исключительно генерация промптов и изображений. Специализирован на создании высококачественных, детальных промптов для AI-генераторов и самой генерации визуала.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Когда использовать:
                </h3>
                <ul style={{
                  marginBottom: 0,
                  marginTop: 0,
                  paddingLeft: '48px',
                  listStyle: 'disc',
                  color: '#000000'
                }}>
                  <li style={{ marginBottom: '8px' }}>Нужен промпт для конкретного изображения</li>
                  <li style={{ marginBottom: '8px' }}>Генерация финального визуала по готовой концепции</li>
                  <li style={{ marginBottom: 0 }}>Создание обложек, графики, иллюстраций</li>
                </ul>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Когда НЕ использовать:
                </h3>
                <ul style={{
                  marginBottom: 0,
                  marginTop: 0,
                  paddingLeft: '48px',
                  listStyle: 'disc',
                  color: '#000000'
                }}>
                  <li style={{ marginBottom: '8px' }}>Разработка концепта изображения → используй Ассистента</li>
                  <li style={{ marginBottom: '8px' }}>Обсуждение визуальной стратегии → используй Ассистента</li>
                  <li style={{ marginBottom: 0 }}>Креативный брейншторм визуалов → используй Ассистента</li>
                </ul>
              </div>

              <div style={{ marginBottom: 0 }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Принцип работы
                </h3>
                <p style={{
                  marginBottom: 0,
                  marginTop: 0,
                  color: '#000000',
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}>
                  Ассистент придумывает ЧТО показать, Художник делает КАК это показать технически качественно.
                </p>
              </div>
            </div>
          </div>

          {/* Метод 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '24px',
              marginTop: 0
            }}>
              Метод 1: Генерация внутри Open WebUI
            </h2>
            <div style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Как работает
                </h3>
                <p style={{
                  marginBottom: 0,
                  marginTop: 0,
                  color: '#000000',
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}>
                  После создания промпта в модели Художник → кнопка "Сгенерировать изображение" → получаешь картинку сразу в интерфейсе.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Ограничения
                </h3>
                <ul style={{
                  marginBottom: 0,
                  marginTop: 0,
                  paddingLeft: '48px',
                  listStyle: 'disc',
                  color: '#000000'
                }}>
                  <li style={{ marginBottom: '8px' }}>Только формат 1:1 (квадрат)</li>
                  <li style={{ marginBottom: '8px' }}>Нельзя добавить референсы</li>
                  <li style={{ marginBottom: '8px' }}>Сложнее вносить правки</li>
                  <li style={{ marginBottom: 0 }}>Медленная генерация</li>
                </ul>
              </div>

              <div style={{ marginBottom: 0 }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Когда использовать
                </h3>
                <p style={{
                  marginBottom: 0,
                  marginTop: 0,
                  color: '#000000',
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}>
                  Быстрые тесты, простые задачи, квадратные форматы.
                </p>
              </div>
            </div>
          </div>

          {/* Метод 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            width: '100%'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '24px',
              marginTop: 0
            }}>
              Метод 2: Whisk AI (рекомендуется)
            </h2>
            <div style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: '#000000'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Как работает
                </h3>
                <ol style={{
                  marginBottom: 0,
                  marginTop: 0,
                  paddingLeft: '48px',
                  color: '#000000'
                }}>
                  <li style={{ marginBottom: '8px' }}>Генерируешь промпт в модели Художник</li>
                  <li style={{ marginBottom: '8px' }}>Копируешь промпт в Whisk AI</li>
                  <li style={{ marginBottom: '8px' }}>Выбираешь нужный формат и добавляешь референсы</li>
                  <li style={{ marginBottom: 0 }}>Получаешь качественное изображение</li>
                </ol>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Преимущества
                </h3>
                <ul style={{
                  marginBottom: 0,
                  marginTop: 0,
                  paddingLeft: '48px',
                  listStyle: 'disc',
                  color: '#000000'
                }}>
                  <li style={{ marginBottom: '8px' }}>Выбор формата: 16:9 (горизонтальный), 1:1 (квадрат), 9:16 (вертикальный)</li>
                  <li style={{ marginBottom: '8px' }}>Можно загрузить референсы для объекта, стиля, сцены</li>
                  <li style={{ marginBottom: '8px' }}>Легко итерировать и вносить изменения</li>
                  <li style={{ marginBottom: '8px' }}>Лучшее качество изображений</li>
                  <li style={{ marginBottom: 0 }}>Та же модель Google Imagen</li>
                </ul>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Доступ
                </h3>
                <p style={{
                  marginBottom: 0,
                  marginTop: 0,
                  color: '#000000',
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}>
                  Общий аккаунт Triumph с платной подпиской для всех кураторов.
                </p>
              </div>

              <div style={{ marginBottom: 0 }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#000000',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Рекомендация
                </h3>
                <p style={{
                  marginBottom: 0,
                  marginTop: 0,
                  color: '#000000',
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                  paddingTop: '4px',
                  paddingBottom: '4px'
                }}>
                  Художник = генератор промпта, Whisk AI = генератор изображения.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : id === 'gpt5' ? (
        <div style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)',
          marginTop: '24px',
          width: '100%'
        }}>
          <div style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#000000'
          }}>
            {/* Для чего */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '12px',
                marginTop: 0
              }}>
                Для чего
              </h3>
              <p style={{
                marginBottom: 0,
                marginTop: 0,
                color: '#000000',
                paddingLeft: '24px',
                borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                paddingTop: '4px',
                paddingBottom: '4px'
              }}>
                Техническая модель без базы знаний Триумфа и предустановленных инструкций. Используется только для создания и настройки новых моделей.
              </p>
            </div>

            {/* Рекомендация */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '12px',
                marginTop: 0
              }}>
                Рекомендация
              </h3>
              <p style={{
                marginBottom: 0,
                marginTop: 0,
                color: '#000000',
                paddingLeft: '24px',
                borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                paddingTop: '4px',
                paddingBottom: '4px'
              }}>
                Не использовать для рабочих задач. Для всех кураторских задач используй специализированные модели - Ассистент, Писатель или Художник, Экспериментатор.
              </p>
            </div>

            {/* База знаний */}
            <div style={{ marginBottom: 0 }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#000000',
                marginBottom: '12px',
                marginTop: 0
              }}>
                База знаний
              </h3>
              <p style={{
                marginBottom: 0,
                marginTop: 0,
                color: '#000000',
                paddingLeft: '24px',
                borderLeft: '2px solid rgba(0, 0, 0, 0.08)',
                paddingTop: '4px',
                paddingBottom: '4px'
              }}>
                Отсутствует - модель не имеет доступа к данным Триумфа.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
          marginTop: '24px',
          width: '100%'
        }}>
          <div style={{
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#000000'
          }}>
            <p style={{ marginBottom: '20px', marginTop: 0 }}>
              Описание модели <strong>{model.name}</strong> будет добавлено в следующих обновлениях.
            </p>
            <p style={{ marginBottom: '20px', marginTop: 0 }}>
            Здесь будет подробная информация о возможностях, настройках и примерах использования данной модели.
          </p>
        </div>
      </div>
      )}
    </div>
  )
}