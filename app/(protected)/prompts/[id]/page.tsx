'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Package, Flame, Square, Ruler, Copy } from 'lucide-react'

const promptData: Record<string, { name: string; icon: any }> = {
  artifacts: { name: 'Артефакты', icon: Package },
  ceremonies: { name: 'Церемонии', icon: Flame },
  objects: { name: 'Объекты', icon: Square },
  schema: { name: 'Схема', icon: Ruler },
}

export default function PromptDetailPage() {
  const params = useParams()
  const id = params.id as string
  const prompt = promptData[id]

  if (!prompt) {
    return (
      <div>
        <div style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)'
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: '#000000',
            marginBottom: '24px'
          }}>
            Промпт не найден
          </h2>
          <Link href="/prompts" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.2s ease-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#D1D5DB'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
          >
            <ArrowLeft size={18} />
            Вернуться к промптам
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
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F8FB 100%)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)',
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

      {/* Content Cards */}
      {id === 'schema' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Что делает + Как вызвать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что делает</h2>
            <p style={{ marginTop: 0, marginBottom: '20px', color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Создает детальные ASCII-схемы для залов, планов расположения артефактов, маршрутов движения зрителей и структуры выставок. Визуализирует пространственную организацию экспозиции в текстовом формате.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: '24px' }}>Как вызвать</h3>
            <p style={{ margin: 0, color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Просто напиши команду в чате с описанием что нужно визуализировать (без копирования промпта).
            </p>
          </div>

          {/* С какими моделями использовать / НЕ использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>С какими моделями использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Ассистент 🧠 - основная модель, понимает кураторскую логику пространства и маршрутов</li>
              <li style={{ marginBottom: 0 }}>Экспериментатор 🧪 - подходит если нужна нестандартная визуализация или специфический формат</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>С какими моделями НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Писатель 💬 - не создает схемы, только тексты</li>
              <li style={{ marginBottom: '8px' }}>Художник ✨ - создает изображения, не ASCII-схемы</li>
              <li style={{ marginBottom: 0 }}>GPT5 - нет понимания контекста выставки</li>
            </ul>
          </div>

          {/* Когда использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Когда использовать</h2>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000000', marginBottom: '8px', marginTop: 0 }}>Планирование зала</h3>
            <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Расположение секций и артефактов</li>
              <li style={{ marginBottom: '8px' }}>Маршрут движения зрителя</li>
              <li style={{ marginBottom: 0 }}>Зонирование пространства</li>
            </ul>
            <p style={{ margin: 0, color: '#000000', marginBottom: '16px', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Визуализация концепции для команды</p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000000', marginBottom: '8px', marginTop: '16px' }}>Структурирование выставки</h3>
            <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Общая схема всех залов</li>
              <li style={{ marginBottom: '8px' }}>Последовательность станций</li>
              <li style={{ marginBottom: 0 }}>Связи между элементами экспозиции и планирование переходов</li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000000', marginBottom: '8px', marginTop: '16px' }}>Коммуникация с командой</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Быстрая визуализация идеи</li>
              <li style={{ marginBottom: '8px' }}>Обсуждение расположения элементов</li>
              <li style={{ marginBottom: 0 }}>Документация структуры зала и инструкции для монтажа</li>
            </ul>
          </div>

          {/* Примеры запросов */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Примеры запросов</h2>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '24px', listStyle: 'none', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>"Сделай схему зала с тремя секциями, расположи их последовательно слева направо"</li>
              <li style={{ marginBottom: '8px' }}>"Визуализируй маршрут зрителя через 5 станций с указанием времени на каждой"</li>
              <li style={{ marginBottom: '8px' }}>"Создай план зала: центральная инсталляция, вокруг 4 артефакта по углам"</li>
              <li style={{ marginBottom: 0 }}>"Схема выставки из 7 залов, покажи логику перехода между ними"</li>
            </ul>
          </div>

          {/* Что получишь / Как использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что получишь на выходе</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>ASCII-схема с визуальным представлением пространства</li>
              <li style={{ marginBottom: '8px' }}>Обозначение секций/артефактов и направлений движения (если нужно)</li>
              <li style={{ marginBottom: '8px' }}>Подписи элементов и легенда (если требуется)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Как использовать в работе</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Быстрое планирование — визуализируешь идею за минуту, обсуждаешь с командой</li>
              <li style={{ marginBottom: '8px' }}>Итерация — меняешь расположение, сразу видишь как это выглядит</li>
              <li style={{ marginBottom: 0 }}>Документация и инструкции — передаешь схему монтажной команде</li>
            </ul>
          </div>
        </div>
      ) : id === 'objects' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Что делает + Важно */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что делает</h2>
            <p style={{ marginTop: 0, marginBottom: '20px', color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Автоматически находит и структурирует объекты из книг Пелевина: таблицы, графики, карты/схемы, макеты, артворки, ритуалы, музыку и описания внешности персонажей. Создает детальное описание каждого объекта с визуальными характеристиками.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: '24px' }}>Важно</h3>
            <p style={{ margin: 0, color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Все объекты уже есть в базе знаний Ассистента и Экспериментатора. Ты можешь просто запросить объекты обычным запросом типа "покажи таблицы из главы 5" или "найди описания персонажей из Generation П" без использования этого промпта. Промпт нужен только если требуется специфическая структура вывода или более детальная категоризация.
            </p>
          </div>

          {/* С какими моделями использовать / НЕ использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>С какими моделями использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Ассистент 🧠 - основная модель для работы с объектами, понимает контекст выставки</li>
              <li style={{ marginBottom: 0 }}>Экспериментатор 🧪 - подходит если нужна нестандартная обработка или специфические инструкции</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>С какими моделями НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Писатель 💬 - не для извлечения объектов, только для текстов</li>
              <li style={{ marginBottom: '8px' }}>Художник ✨ - не работает с анализом текстов</li>
              <li style={{ marginBottom: 0 }}>GPT5 - нет базы знаний Триумфа</li>
            </ul>
          </div>

          {/* Типы объектов */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Типы объектов, которые извлекаются</h2>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>table</code> - таблицы с колонками/строками</li>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>chart</code> - графики и диаграммы</li>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>map_or_scheme</code> - карты пространств или логические схемы</li>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>layout_mockup</code> - макеты расположения элементов</li>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>artwork</code> - картины, портреты, скульптуры</li>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>ritual</code> - церемонии и обряды</li>
              <li style={{ marginBottom: '8px' }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>music</code> - музыкальные произведения</li>
              <li style={{ marginBottom: 0 }}><code style={{ background:'#F9FAFB', padding:'2px 6px', borderRadius:'6px' }}>character_appearance</code> - описания внешности персонажей</li>
            </ul>
          </div>

          {/* Что получишь + Для чего использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что получишь на выходе</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Тип объекта</li>
              <li style={{ marginBottom: '8px' }}>Название</li>
              <li style={{ marginBottom: '8px' }}>Описание (что это, роль, смысл)</li>
              <li style={{ marginBottom: '8px' }}>Визуальное описание (детальное, для художника/дизайнера)</li>
              <li style={{ marginBottom: 0 }}>Цитаты из текста (подтверждения)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Для чего использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Когда нужна строгая структура вывода объектов</li>
              <li style={{ marginBottom: '8px' }}>Детальная категоризация для планирования экспозиции</li>
              <li style={{ marginBottom: '8px' }}>Готовое визуальное описание для Художника</li>
              <li style={{ marginBottom: '8px' }}>Систематический анализ всех объектов из конкретной книги/главы</li>
              <li style={{ marginBottom: 0 }}>Поиск конкретных типов объектов (например, только артворки или только таблицы)</li>
            </ul>
          </div>
        </div>
      ) : id === 'ceremonies' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Что делает + Важно */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что делает</h2>
            <p style={{ marginTop: 0, marginBottom: '20px', color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Автоматически находит и структурирует церемонии и мистерии (ритуализованные события с символикой и целью) из книг Пелевина. Создает детальное описание каждого обряда с категоризацией, визуальными и звуковыми характеристиками.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: '24px' }}>Важно</h3>
            <p style={{ margin: 0, color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Все церемонии уже есть в базе знаний Ассистента и Экспериментатора. Ты можешь просто запросить церемонии обычным запросом типа "покажи церемонии из S.N.U.F.F." без использования этого промпта. Промпт нужен только если требуется специфическая структура вывода или более детальная категоризация.
            </p>
          </div>

          {/* Модели для использования/не использования */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>С какими моделями использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Ассистент 🧠 - основная модель для работы с церемониями, понимает контекст выставки</li>
              <li style={{ marginBottom: 0 }}>Экспериментатор 🧪 - подходит если нужна нестандартная обработка или специфические инструкции</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>С какими моделями НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Писатель 💬 - не для извлечения церемоний, только для текстов</li>
              <li style={{ marginBottom: '8px' }}>Художник ✨ - не работает с анализом текстов</li>
              <li style={{ marginBottom: 0 }}>GPT5 - нет базы знаний Триумфа</li>
            </ul>
          </div>

          {/* Что получишь + Для чего использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что получишь на выходе</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Название и локация</li>
              <li style={{ marginBottom: '8px' }}>Объекты и атрибуты</li>
              <li style={{ marginBottom: '8px' }}>Последовательность действий (шаги)</li>
              <li style={{ marginBottom: '8px' }}>Смысл и цель обряда</li>
              <li style={{ marginBottom: '8px' }}>Визуальное описание (атмосфера, цвета, фактура)</li>
              <li style={{ marginBottom: '8px' }}>Звуковое оформление</li>
              <li style={{ marginBottom: '8px' }}>Участники и их роли</li>
              <li style={{ marginBottom: '8px' }}>Категоризация (цель, тип, масштаб, пространство, время, модальность, символика, интенсивность)</li>
              <li style={{ marginBottom: 0 }}>Цитаты из текста (подтверждения)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Для чего использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Когда нужна строгая структура вывода церемоний</li>
              <li style={{ marginBottom: '8px' }}>Детальная категоризация для планирования залов</li>
              <li style={{ marginBottom: '8px' }}>Готовое визуальное и звуковое описание для экспозиции</li>
              <li style={{ marginBottom: '8px' }}>Систематический анализ ритуалов из конкретной книги</li>
              <li style={{ marginBottom: 0 }}>Понимание структуры обряда (шаги, роли, символика)</li>
            </ul>
          </div>
        </div>
      ) : id === 'artifacts' ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginTop: '24px',
          width: '100%'
        }}>
          {/* Описание + Важно */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что делает</h2>
            <p style={{ marginTop: 0, marginBottom: '20px', color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Автоматически находит и структурирует артефакты (физические предметы с культурной/символической ролью) из глав книг Пелевина. Создает детальное описание каждого артефакта с категоризацией и визуальными характеристиками.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: '24px' }}>Важно</h3>
            <p style={{ margin: 0, color: '#000000', lineHeight: '1.7', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>
              Все артефакты уже есть в базе знаний Ассистента и Экспериментатора. Ты можешь просто запросить артефакты обычным запросом типа "покажи артефакты из главы 3 S.N.U.F.F." без использования этого промпта. Промпт нужен только если требуется специфическая структура вывода или более детальная категоризация.
            </p>
          </div>

          {/* Модели для использования/не использования */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>С какими моделями использовать</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Ассистент 🧠 - основная модель для работы с артефактами, понимает контекст выставки</li>
              <li style={{ marginBottom: 0 }}>Экспериментатор 🧪 - подходит если нужна нестандартная обработка или специфические инструкции</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>С какими моделями НЕ использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Писатель 💬 - не для извлечения артефактов, только для текстов</li>
              <li style={{ marginBottom: '8px' }}>Художник ✨ - не работает с анализом текстов</li>
              <li style={{ marginBottom: 0 }}>GPT5 - нет базы знаний Триумфа</li>
            </ul>
          </div>

          {/* Что получишь + Для чего использовать */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '48px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Что получишь на выходе</h2>
            <ul style={{ marginTop: 0, marginBottom: '24px', paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Название и описание</li>
              <li style={{ marginBottom: '8px' }}>Визуальное описание</li>
              <li style={{ marginBottom: '8px' }}>Категоризация (происхождение, роль в тексте, структура)</li>
              <li style={{ marginBottom: '8px' }}>Подкатегории (роль, тип, масштаб)</li>
              <li style={{ marginBottom: '8px' }}>Теги (эпоха, культура, функция)</li>
              <li style={{ marginBottom: 0 }}>Примеры использования из текста (цитаты)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#000000', marginBottom: '12px', marginTop: 0 }}>Для чего использовать</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '48px', listStyle: 'disc', color: '#000000' }}>
              <li style={{ marginBottom: '8px' }}>Когда нужна строгая структура вывода артефактов</li>
              <li style={{ marginBottom: '8px' }}>Детальная категоризация для документации</li>
              <li style={{ marginBottom: '8px' }}>Готовое визуальное описание для передачи Художнику</li>
              <li style={{ marginBottom: 0 }}>Систематический анализ предметов из конкретной главы</li>
            </ul>
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
          maxWidth: '800px'
        }}>
          <div style={{ fontSize: '17px', lineHeight: '1.7', color: '#000000' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Описание</h2>
            <p style={{ marginBottom: '20px', marginTop: 0 }}>
              Описание промпта <strong>{prompt.name}</strong> будет добавлено в следующих обновлениях. Здесь будет детальное описание, примеры использования и рекомендации по применению данного промпта.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}