import Link from "next/link";
import { Brain, MessageSquare, Zap } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div>
        <h1>
          Triumph Explained
        </h1>
        <p>
          Создавайте, управляйте и оптимизируйте AI решения
        </p>
      </div>

      <div>
        <Link href="/models">
          <Brain />
          <h2>Модели</h2>
          <p>
            Управление и настройка AI моделей для ваших задач
          </p>
        </Link>

        <Link href="/prompts">
          <MessageSquare />
          <h2>Промпты</h2>
          <p>
            Библиотека эффективных промптов для различных сценариев
          </p>
        </Link>

        <Link href="/functions">
          <Zap />
          <h2>Функции</h2>
          <p>
            Расширенные функции и инструменты для работы с AI
          </p>
        </Link>
      </div>

      <div>
        <h3>Начните работу прямо сейчас</h3>
        <p>
          Выберите раздел выше и начните исследовать возможности платформы
        </p>
        <div>
          <Link href="/models">
            Перейти к моделям
          </Link>
          <Link href="/prompts">
            Смотреть промпты
          </Link>
        </div>
      </div>
    </div>
  );
}

