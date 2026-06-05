import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";
import { Loader } from "./loader";

const meta: Meta<typeof Loader> = {
  title: "UI/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  
  // 🧭 Свойства выстроены строго по спецификации вашего файла loader.tsx
  argTypes: {
    size: {
      control: "radio",
      options: ["16.Base", "16.Small"],
      description: "Задает размер компонента согласно маппингу loaderSizes",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "ghost"],
      description: "Задает variant для компонента",
    },
    tone: {
      control: "select",
      options: ["neutral", "brand", "positive", "warning", "negative", "inverse"],
      description: "Цветовая схема компонента из матрицы семантических токенов",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

// 🎮 Главная интерактивная песочница на Docs
export const Playground: Story = {
  args: {
    size: "16.Base",
    variant: "primary",
    tone: "brand",
  },
  // 🧠 Умный рантайм-валидатор с авто-обновлением интерфейса Storybook (один в один как у Button)
  decorators: [
    (Story, context) => {
      // useArgs() позволяет программно изменять значения в панели управления (Controls)
      const [, updateArgs] = useArgs();

      // Условие №1: Если вариант лоадера НЕ primary, но выбран инверсивный тон -> это ошибка спецификации
      const isInverseInvalid =
        context.args.variant !== "primary" && context.args.tone === "inverse";

      // Условие №2: Если выбран вариант primary, но выбран нейтральный тон -> у нас его нет по дизайну
      const isNeutralInvalidForPrimary =
        context.args.variant === "primary" && context.args.tone === "neutral";

      // Отлавливаем невалидные комбинации и сбрасываем их на дефолтный brand
      if (isInverseInvalid || isNeutralInvalidForPrimary) {
        // Шаг А: Принудительно очищаем значение в undefined для сброса внутреннего кэша Storybook
        updateArgs({ tone: undefined });
        
        // Шаг Б: Мгновенно прописываем валидный базовый "brand" через макрозадачу
        setTimeout(() => {
          updateArgs({ tone: "brand" });
        }, 0);
      }

      return <Story />;
    },
  ],
};

// 半 Интерактивная матрица вариантов (Скрывает отсутствующие в дизайне лоадеры)
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
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {/* Компоненты рендерятся строго по условию валидности: невалидные красиво скрываются из DOM */}
        {isValidCombo("primary", args.tone) && (
          <Loader {...args} variant="primary" />
        )}
        {isValidCombo("secondary", args.tone) && (
          <Loader {...args} variant="secondary" />
        )}
        {isValidCombo("ghost", args.tone) && (
          <Loader {...args} variant="ghost" />
        )}
      </div>
    );
  },
  args: {
    size: "16.Base",
    tone: "brand",
  },
  parameters: {
    controls: {
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

    // Если комбинация, выбранная пользователем на панели, недопустима — выводим инфо-заглушку
    if (!isValidCombo(args.variant, args.tone)) {
      return (
        <div style={{ color: "#8c8c8c", fontStyle: "italic", fontSize: "14px" }}>
          Комбинация {args.variant} + {args.tone} недоступна в дизайне
        </div>
      );
    }

    return (
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Loader {...args} size="16.Base" />
        <Loader {...args} size="16.Small" />
      </div>
    );
  },
  args: {
    variant: "primary",
    tone: "brand",
  },
  parameters: {
    controls: {
      exclude: ["size"],
    },
  },
};
