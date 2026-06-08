import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  
  // 🧭 Слой описания интерфейса: строго плоская структура свойств
  argTypes: {
    size: {
      control: "radio",
      options: ["200", "250", "300"],
      description: "Задает размер компонента",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "Задает вариант для компонента",
    },
    tone: {
      control: "select",
      options: ["neutral", "brand", "positive", "warning", "negative", "inverse", "added01", "added02", "added03", "added04", "added05", "added06", "added07", "added08", "added09", "added10", "added11"],
      description: "Цветовая схема компонента",
    },
    startIcon: {
      control: {
        type: "select",
        labels: { check: "check", undefined: "No icon" },
      },
      options: ["check", undefined],
      description: "Иконка в начале компонента",
    },
    label: {
      control: "text",
      description: "Задает текст для кнопки",
    },
    endIcon: {
      control: {
        type: "select",
        labels: { check: "check", check3: "check2", undefined: "No icon" },
      },
      options: ["check", "check3", undefined],
      description: "Иконка в конце компонента",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// 🎮 Главная интерактивная песочница на Docs
export const Playground: Story = {
  args: {
    size: "300",
    variant: "primary",
    tone: "brand",
    startIcon: undefined,
    label: "Badge",
    endIcon: undefined,
  },
  // 🧠 Умный валидатор панели Controls (Защита от запрещенных комбинаций)
  decorators: [
    (Story, context) => {
      const [, updateArgs] = useArgs();

      // Правило 1: tone="inverse" разрешен ТОЛЬКО для variant="primary"
      const isInverseInvalid =
        context.args.variant !== "primary" && context.args.tone === "inverse";

      // Правило 2: tone="neutral" ЗАПРЕЩЕН для variant="primary"
      const isNeutralInvalidForPrimary =
        context.args.variant === "primary" && context.args.tone === "neutral";

      // 💡 ШАБЛОН ДЛЯ ДОБАВЛЕНИЯ НОВЫХ ПРАВИЛ В БУДУЩЕМ:
      // const isNewRuleInvalid = context.args.prop === "X" && context.args.otherProp === "Y";

      if (isInverseInvalid || isNeutralInvalidForPrimary) {
        // Шаг А: Сначала принудительно очищаем значение в undefined, чтобы сбросить внутренний кэш Storybook.
        // Это предотвращает баг "залипания" текста в селекторе при переходе с дефолтных значений.
        updateArgs({ tone: undefined });
        
        // Шаг Б: Во втором микро-таймауте жестко прописываем валидный базовый "brand".
        // setTimeout выносит операцию в макрозадачи, предотвращая конфликты одновременного рендера React.
        setTimeout(() => {
          updateArgs({ tone: "brand" });
        }, 0);
      }

      return <Story />;
    },
  ],
};

// 半 Интерактивная матрица вариантов (Скрывает отсутствующие в дизайне кнопки)
export const Variants: Story = {
  render: (args) => {
    // Вспомогательная функция дублирует предикаты валидности из декоратора Playground
    const isValidCombo = (v: string | undefined, t: string | undefined) => {
      const currentVariant = v ?? "primary";
      const currentTone = t ?? "brand";

      if (currentVariant !== "primary" && currentTone === "inverse") return false;
      if (currentVariant === "primary" && currentTone === "neutral") return false;
      return true;
    };

    return (
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {/* Кнопки рендерятся строго по условию валидности: невалидные красиво скрываются из DOM */}
        {isValidCombo("primary", args.tone) && (
          <Badge {...args} variant="primary" label="Primary" />
        )}
        {isValidCombo("secondary", args.tone) && (
          <Badge {...args} variant="secondary" label="Secondary" />
        )}
      </div>
    );
  },
  args: {
    size: "300",
    tone: "brand",
    startIcon: undefined,
    endIcon: undefined,
  },
  parameters: {
    controls: {
      // Исключаем variant и label, так как они жестко зафиксированы в этой матрице витрины
      exclude: ["variant", "label"],
    },
  },
};

// 半 Интерактивная матрица размеров (Показывает текстовую заглушку при невалидном миксе)
export const Sizes: Story = {
  render: (args) => {
    const isValidCombo = (v: string | undefined, t: string | undefined) => {
      const currentVariant = v ?? "primary";
      const currentTone = t ?? "brand";

      if (currentVariant !== "primary" && currentTone === "inverse") return false;
      if (currentVariant === "primary" && currentTone === "neutral") return false;
      return true;
    };

    // Если комбинация, выбранная пользователем на панели, невалидна — выводим инфо-заглушку
    if (!isValidCombo(args.variant, args.tone)) {
      return (
        <div style={{ color: "#8c8c8c", fontStyle: "italic", fontSize: "14px" }}>
          Комбинация {args.variant} + {args.tone} недоступна в дизайне
        </div>
      );
    }

    return (
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Badge {...args} size="300" label="Size 300" />
        <Badge {...args} size="250" label="Size 250" />
        <Badge {...args} size="200" label="Size 200" />
      </div>
    );
  },
  args: {
    variant: "primary",
    tone: "brand",
    startIcon: undefined,
    endIcon: undefined,
  },
  parameters: {
    controls: {
      // Исключаем size и label, так как они жестко зафиксированы в этой матрице витрины
      exclude: ["size", "label"],
    },
  },
};
