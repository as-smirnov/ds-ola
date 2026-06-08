import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";
import { ButtonIcon } from "./button-icon";

const meta: Meta<typeof ButtonIcon> = {
  title: "UI/ButtonIcon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  
  argTypes: {
    size: {
      control: "radio",
      options: ["300", "400"],
      description: "Задает размер компонента",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline", "ghost"],
      description: "Задает вариант для компонента",
    },
    tone: {
      control: "select",
      options: ["neutral", "brand", "positive", "warning", "negative", "inverse", "added01", "added02", "added03", "added04", "added05", "added06", "added07", "added08", "added09", "added10", "added11"],
      description: "Цветовая схема компонента",
    },
    loading: {
      control: "boolean",
      description: "Состояние загрузки",
    },
    disabled: {
      control: "boolean",
      description: "Устанавливает атрибут disabled",
    },
    icon: {
      control: {
        type: "select",
        labels: { check: "check", check3: "check2", undefined: "No icon" },
      },
      options: ["check", "check3", undefined],
      description: "Отображаемая иконка",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

// 🎮 Главная интерактивная песочница на Docs
export const Playground: Story = {
  args: {
    size: "400",
    variant: "primary",
    tone: "brand",
    loading: false,
    disabled: false,
    icon: "check",
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
          <ButtonIcon {...args} variant="primary" icon="check" />
        )}
        {isValidCombo("secondary", args.tone) && (
          <ButtonIcon {...args} variant="secondary" icon="check" />
        )}
        {isValidCombo("outline", args.tone) && (
          <ButtonIcon {...args} variant="outline" icon="check" />
        )}
        {isValidCombo("ghost", args.tone) && (
          <ButtonIcon {...args} variant="ghost" icon="check" />
        )}
      </div>
    );
  },
  args: {
    size: "400",
    tone: "brand",
    loading: false,
    disabled: false,
    icon: "check",
  },
  parameters: {
    controls: {
      // Исключаем variant, так как он жестко зафиксированы в этой матрице витрины
      exclude: ["variant"],
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
        <ButtonIcon {...args} size="400" icon="check" />
        <ButtonIcon {...args} size="300" icon="check" />
      </div>
    );
  },
  args: {
    variant: "primary",
    tone: "brand",
    loading: false,
    disabled: false,
    icon: "check",
  },
  parameters: {
    controls: {
      // Исключаем size, так как он жестко зафиксированы в этой матрице витрины
      exclude: ["size"],
    },
  },
};
