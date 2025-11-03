'use client'

export default function FunctionsPage() {
  return (
    <div>
      <h1 style={{
        fontSize: '48px',
        fontWeight: 800,
        color: '#000000',
        marginBottom: '48px',
        lineHeight: '1.2'
      }}>
        Функции
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Вызов специальных промптов */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Вызов специальных промптов</h2>
          <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Команда: / в чате</li>
            <li style={{ marginBottom: '8px' }}>Отображаются все 4 промпта: Артефакты, Церемонии, Объекты, Схема</li>
            <li style={{ marginBottom: '8px' }}>Выбираешь нужный → автоматически запускается без копирования</li>
          </ul>
          <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Когда использовать: Быстрый доступ к инструментам извлечения материала из книг</p>
        </div>

        {/* Голосовые функции */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Голосовые функции</h2>

          <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: 0, marginBottom: '8px', color: '#000000' }}>Режим голоса (Voice Mode)</h3>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Задаешь вопрос голосом → получаешь голосовой ответ</li>
            <li style={{ marginBottom: '8px' }}>Полностью голосовое взаимодействие с моделью</li>
          </ul>
          <p style={{ marginTop: 0, marginBottom: '16px', color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Когда использовать: Работа без рук, быстрые консультации, мобильная работа</p>

          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Голосовой ввод (Voice Input)</h3>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Надиктовываешь сообщение голосом → система переводит в текст</li>
            <li style={{ marginBottom: '8px' }}>Ответ приходит текстом (не голосом)</li>
          </ul>
          <p style={{ marginTop: 0, marginBottom: '16px', color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Когда использовать: Быстрый ввод длинных запросов, работа на ходу</p>

          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Прочитать вслух (Read Aloud)</h3>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Любой текстовый ответ можно прослушать</li>
            <li style={{ marginBottom: '8px' }}>Кнопка под каждым ответом модели</li>
          </ul>
          <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Когда использовать: Прослушивание длинных текстов, многозадачность</p>
        </div>

        {/* Работа с изображениями */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Работа с изображениями</h2>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Генерация изображения из ответа</li>
            <li style={{ marginBottom: '8px' }}>Кнопка "Сгенерировать изображение" под любым текстом</li>
            <li style={{ marginBottom: '8px' }}>Важно: Качественные изображения только из промптов модели Художник</li>
            <li style={{ marginBottom: '8px' }}>Все остальные модели дадут плохой результат</li>
          </ul>
          <p style={{ marginTop: 0, marginBottom: '12px', color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Когда использовать: Только после создания промпта в модели Художник. Для остальных задач используй Whisk AI.</p>
          <p style={{ margin: 0, color: '#000000' }}>Ограничение: Формат только 1:1 (квадрат)</p>
        </div>

        {/* Редактирование */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Редактирование</h2>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: 0, marginBottom: '8px', color: '#000000' }}>Редактировать ответ (Edit)</h3>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Возможность редактировать текст ответа модели прямо в интерфейсе</li>
            <li style={{ marginBottom: '8px' }}>Сохраняется отредактированная версия</li>
          </ul>
          <p style={{ margin: 0, color: '#000000', paddingLeft: '24px', borderLeft: '2px solid rgba(0,0,0,0.08)', paddingTop: '4px', paddingBottom: '4px' }}>Когда использовать: Доработка текстов от Писателя, корректировки описаний артефактов, правка схем</p>
        </div>

        {/* Интерпретатор кода */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Интерпретатор кода</h2>
          <p style={{ marginTop: 0, marginBottom: '12px', color: '#000000', lineHeight: '1.7' }}>Что делает: Модель может писать Python-код и автоматически его выполнять для решения задач, требующих вычислений, сортировки или обработки данных.</p>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Как работает:</h3>
          <ol style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Даешь задачу с расчетами/обработкой данных</li>
            <li style={{ marginBottom: '8px' }}>Модель пишет код для решения</li>
            <li style={{ marginBottom: '8px' }}>Код запускается автоматически</li>
            <li style={{ marginBottom: 0 }}>Получаешь результат</li>
          </ol>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Когда использовать:</h3>
          <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: '#000000' }}>Работа с данными:</h4>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Подсчет количества артефактов по категориям</li>
            <li style={{ marginBottom: '8px' }}>Фильтрация списков по параметрам</li>
            <li style={{ marginBottom: '8px' }}>Сортировка и группировка материалов</li>
            <li style={{ marginBottom: 0 }}>Создание сводных таблиц</li>
          </ul>
          <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: '#000000' }}>Вычисления:</h4>
          <ul style={{ marginTop: 0, marginBottom: '12px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Распределение времени между станциями</li>
            <li style={{ marginBottom: '8px' }}>Расчет пропорций и соотношений</li>
            <li style={{ marginBottom: 0 }}>Статистика по артефактам/церемониям</li>
          </ul>
          <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px', color: '#000000' }}>Комбинаторика:</h4>
          <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Варианты распределения артефактов по залам</li>
            <li style={{ marginBottom: 0 }}>Комбинации элементов для выставки</li>
          </ul>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Примеры запросов:</h3>
          <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>"Посчитай сколько артефактов в каждой эпохе и покажи в процентах"</li>
            <li style={{ marginBottom: '8px' }}>"Отсортируй список артефактов по книгам и главам"</li>
            <li style={{ marginBottom: '8px' }}>"Найди все технологические артефакты с сюжетной функцией"</li>
            <li style={{ marginBottom: 0 }}>"Распредели 45 минут между 7 станциями: первая и последняя по 5 минут, остальные пропорционально"</li>
          </ul>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Когда НЕ использовать:</h3>
          <ul style={{ marginTop: 0, marginBottom: '16px', paddingLeft: '48px', listStyle: 'disc', color: '#000000', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '8px' }}>Обычные вопросы про артефакты без расчетов</li>
            <li style={{ marginBottom: '8px' }}>Создание текстов</li>
            <li style={{ marginBottom: '8px' }}>Генерация промптов для изображений</li>
            <li style={{ marginBottom: 0 }}>Аналитика без вычислений</li>
          </ul>
          <p style={{ margin: 0, color: '#000000' }}>Итог: Калькулятор на стероидах. Модель автоматически использует код когда видит, что задачу проще решить вычислениями, чем текстом.</p>
        </div>

        {/* Функции значка + */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#000000', marginBottom: '16px', marginTop: 0 }}>Функции значка + </h2>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Attach Knowledge</h3>
          <p style={{ marginTop: 0, marginBottom: '8px', color: '#000000' }}>Что делает: Подключение базы знаний к текущему чату.</p>
          <p style={{ marginTop: 0, marginBottom: '16px', color: '#000000' }}>Когда использовать: Подключить отдельный документ из базы данных, конкретную главу</p>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px', color: '#000000' }}>Reference Chats</h3>
          <p style={{ marginTop: 0, marginBottom: '8px', color: '#000000' }}>Что делает: Ссылка на другие чаты для использования их контекста в текущей беседе.</p>
          <p style={{ marginTop: 0, marginBottom: 0, color: '#000000' }}>Когда использовать: Продолжить обсуждение из прошлого чата, Связать несколько проектов, Использовать результаты из предыдущей работы, Объединить контекст нескольких бесед</p>
        </div>
      </div>
    </div>
  )
}