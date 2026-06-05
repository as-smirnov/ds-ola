import type { Meta, StoryObj } from "@storybook/react";
// 🎯 Финальный корректный импорт для Storybook 8+. Позволяет программно управлять контролами (панелью параметров).
import { useArgs } from "storybook/internal/preview-api"; 
import { Button } from "./button";

// 📦 1. СЕКЦИЯ КОНФИГУРАЦИИ META
// Это главный управляющий объект для текущей страницы компонента.
// Настройки внутри meta определяют, как компонент будет отображаться глобально 
// во всех вкладках (Docs, Canvas) и какие контролы будут доступны пользователю.

const meta: Meta<typeof Button> = {
  title: "UI/Button", // Раздел и название компонента в левом сайдбаре Storybook
  component: Button,  // Ссылка на сам React-компонент
  parameters: {
    layout: "centered", // Центрирует компонент на холсте Canvas для удобства тестирования
  },
  tags: ["autodocs"], // Автоматически генерирует вкладку документации "Docs" на основе типов и javadoc
  
  
  // 🧭 1.1 СЕКЦИЯ ARGTYPES (Контролы панели управления)
  // Строго описывает типы данных, интерфейс UI-элементов в панели Storybook (radio, select, boolean)
  // и их текстовое описание для разработчиков. Свойства выстроены плоско, без масок и функций.
  
  argTypes: {
    size: {
      control: "radio",
      options: ["300", "400"],
      description: "Задает размер компонента",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline", "ghost"],
      description: "Задает визуальный тип/стиль отображения компонента",
    },
    tone: {
      control: "select",
      options: ["neutral", "brand", "positive", "warning", "negative", "inverse"],
      description: "Цветовая схема компонента",
    },
    loading: {
      control: "boolean",
      description: "Переводит кнопку в состояние загрузки и блокирует клики",
    },
    disabled: {
      control: "boolean",
      description: "Устанавливает стандартный HTML-атрибут disabled",
    },
    startIcon: {
      control: {
        type: "select",
        labels: { check: "check", undefined: "No icon" },
      },
      options: ["check", undefined],
      description: "Иконка, отображаемая перед текстовым лейблом кнопки",
    },
    label: {
      control: "text",
      description: "Задает текстовое содержимое для кнопки",
    },
    endIcon: {
      control: {
        type: "select",
        labels: { check: "check", check3: "check2", undefined: "No icon" },
      },
      options: ["check", "check3", undefined],
      description: "Иконка, отображаемая после текстового лейбла кнопки",
    },
  },

  
  // 🧠 1.2 СЕКЦИЯ ДЕКОРАТОРОВ (Глобальный рантайм-валидатор «как в Figma»)
  // Декоратор — это функция-обертка. Она перехватывает `context.args` (то, что выбрал пользователь на панели)
  // ПЕРЕД тем, как отрендерить любую историю (Playground, Variants или Sizes), и на лету корректирует их.
  
  decorators: [
    (Story, context) => {
      // updateArgs — метод ядра Storybook, который перезаписывает состояние панели управления
      const [, updateArgs] = useArgs();

      // --- ПРАВИЛО №1: Запрет tone="inverse" для всех, кроме primary ---
      // Если вариант кнопки НЕ primary, но выбран inverse -> это ошибка спецификации.
      const isInverseInvalid =
        context.args.variant !== "primary" && context.args.tone === "inverse";

      // --- ПРАВИЛО №2: Запрет tone="neutral" конкретно для варианта primary ---
      // Если выбран вариант primary, но выбран neutral -> у нас его нет по дизайну.
      const isNeutralInvalidForPrimary =
        context.args.variant === "primary" && context.args.tone === "neutral";

      /**
       * 💡 ШАБЛОН ДЛЯ ДОБАВЛЕНИЯ НОВЫХ ПРАВИЛ:
       * Если в будущем вам потребуется запретить, например, тон "warning" для варианта "ghost":
       * 
       * const isGhostWarningInvalid = 
       *   context.args.variant === "ghost" && context.args.tone === "warning";
       */

      // Обработка конфликтов и автосброс значений
      if (isInverseInvalid || isNeutralInvalidForPrimary) {
        // Использование setTimeout(..., 0) переносит обновление в макрозадачи.
        // Это предотвращает конфликт рендеринга React (ошибку одновременного изменения стейта разных компонентов).
        setTimeout(() => {
          // Безопасно сбрасываем тон на базовый синий "brand" прямо в интерфейсе Storybook
          updateArgs({ tone: "brand" });
        }, 0);
      }

      // Возвращаем саму историю (кнопку), которая будет отрендерена уже с правильными и валидными аргументами
      return <Story />;
    },
  ],
};

export default meta;

// Определение внутреннего типа для краткой записи историй
type Story = StoryObj<typeof Button>;


// 🎮 2. СЕКЦИЯ ИСТОРИЙ (STORIES)

// 2.1 Главная интерактивная песочница на Docs. 
// Позволяет пользователю крутить любые ручки в панели управления.
export const Playground: Story = {
  args: {
    size: "400",
    variant: "primary",
    tone: "brand", // При старте страницы железно выбран валидный синий тон!
    loading: false,
    disabled: false,
    startIcon: undefined,
    label: "Button",
    endIcon: undefined,
  },
};

// 2.2 Полуинтерактивная матрица вариантов
// Показывает разработчикам сразу все типы кнопок в ряд для визуального сравнения.
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="outline" label="Outline" />
      <Button {...args} variant="ghost" label="Ghost" />
    </div>
  ),
  args: {
    size: "400",
    tone: "brand",
    loading: false,
    disabled: false,
    startIcon: undefined,
    endIcon: undefined,
  },
  parameters: {
    // Исключаем из панели управления поля "variant" и "label", так как они жестко зашиты в матрице выше
    controls: {
      exclude: ["variant", "label"],
    },
  },
};

// 2.3 Полуинтерактивная матрица размеров
// Демонстрирует масштабирование кнопки по сетке (300 и 400 размеры).
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button {...args} size="400" label="Size 400" />
      <Button {...args} size="300" label="Size 300" />
    </div>
  ),
  args: {
    variant: "primary",
    tone: "brand",
    loading: false,
    disabled: false,
    startIcon: undefined,
    endIcon: undefined,
  },
  parameters: {
    // Исключаем размер и текст из управления, чтобы пользователь управлял только общими параметрами (цвет, иконки)
    controls: {
      exclude: ["size", "label"],
    },
  },
};
