# TypeScript Next.js 15 Starter Template

Готовый шаблон для быстрого старта проектов на Next.js 15 с поддержкой React 19, TypeScript и архитектуры Feature-Sliced Design (FSD).

**Ключевые особенности** стартового шаблона для Next.js-приложения:

---

### **Технический стек**

- **Next.js 15.1.0** с поддержкой **Turbopack** (ускоренная разработка)
- **React 19** и **TypeScript**
- Используется `App Router` (судя по `page.tsx`, `layout.tsx`)
- **Полная типизация** благодаря `@types` и `typescript` последней версии

---

### **Скрипты**

- `dev`, `build`, `start` — стандартные команды Next.js
- `lint`, `lint:fix`, `lint:styles`, `lint:styles:fix` — проверка и автофиксация кода и стилей
- `prepare` — инициализация **Husky** (для Git-хуков)

---

### **Архитектурные и организационные особенности**

- Используется **Feature-Sliced Design** (FSD)

  - Специальные правила ESLint: `@feature-sliced/eslint-config`
  - Запреты на использование `index.ts` как публичного API в слоях (`app`, `widgets`, `features`, `entities`, `shared`)
  - Ограничение на глубину импорта в `shared`

---

### **ESLint и правила качества кода**

- Основные расширения:

  - `next/core-web-vitals`, `plugin:react/recommended`, `@typescript-eslint`, `jsx-a11y`, `jsdoc`, `prettier`

- **Обязательные правила именования**:

  - Типы — `PascalCase` + `Type`-постфикс
  - Интерфейсы — `I`-префикс или `Props`-постфикс
  - Перечисления — `E`-префикс

- Запрет:

  - `default exports`
  - `dangerouslySetInnerHTML`
  - использования `children` как пропса

- Предпочтения:

  - Компоненты как стрелочные функции
  - Условный рендеринг только через тернарные операторы

- Продвинутая сортировка импортов с `simple-import-sort`
- Запрет магических чисел (с исключениями)

---

### **Доступность и документация**

- Включены правила `jsx-a11y` (доступность JSX)
- Обязательные JSDoc комментарии и типы (`jsdoc/recommended-typescript`)

---

### **Stylelint и стили**

- Проверка CSS/SCSS с использованием:

  - `stylelint`, `stylelint-config-standard`, `stylelint-order`, `stylelint-config-recess-order`, `stylelint-prettier`

- Внедрение `stylelint-webpack-plugin` через `next.config.ts`

---

### **Дополнительные настройки**

- Используется `husky` для pre-commit хуков
- ESLint работает в режиме `FlatConfig` через `FlatCompat`
- Отключение `react/react-in-jsx-scope` — как рекомендовано с React 17+

---

### **Планы по развитию (TODO)**

- Добавить:

  - Интеграцию **Sentry**
  - Поддержку **Storybook**
  - Настройку **git-коммитов** (например, с Commitlint или Conventional Commits)

---

### **Расширяемость**

- Хорошая база для масштабируемого монолита или микро-фронтов
- Строгий контроль архитектуры (особенно в рамках FSD)
- Подготовка к строгим DevOps процессам (через линтинг, husky, TODO на Sentry/Storybook)
