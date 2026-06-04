import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// Убираем явный тип Meta<typeof Button> у константы meta, чтобы TypeScript разрешил виртуальное поле
const meta = {
  title: "UI/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    // 1. Стандартный тон: показывается для всех вариантов, КРОМЕ ghost
    tone: {
      control: "select",
      options: ["neutral", "brand", "positive", "warning", "negative", "inverse"],
      if: { arg: "variant", neq: "ghost" },
    },
    // 2. Тон для ghost: показывается ТОЛЬКО когда выбран вариант ghost
    // Поле связано с пропсом "tone" через свойство name
    toneForGhost: {
      name: "tone",
      control: "select",
      options: ["neutral", "brand", "positive", "warning", "negative"],
      if: { arg: "variant", eq: "ghost" },
    },
    size: {
      control: "radio",
      options: ["300", "400"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
        startIcon: {
      control: {
        type: "select",
        labels: {
          check: "check",
          undefined: "No icon",
        },
      },
      options: ["check", undefined],
      mapping: {
        check: "check",
        undefined: undefined,
      },
    },
    endIcon: {
      control: {
        type: "select",
        labels: {
          check: "check",
          check3: "check2",
          undefined: "No icon",
        },
      },
      options: ["check", "check3", undefined],
      mapping: {
        check: "check",
        check3: "check2",
        undefined: undefined,
      },
    },
  },
} as Meta<typeof Button>; // Переносим приведение типа в конец через 'as'

export default meta;
type Story = StoryObj<typeof Button>;

export const Variant: Story = {
  args: {
    variant: "primary",
    tone: "brand",
    size: "400",
    loading: false,
    disabled: false,
    startIcon: "check",
    label: "Button",
    endIcon: "check",
  },
};

// 1. Твоя стандартная история для управления через интерактивные Controls
export const Playground: Story = {
  args: {
    variant: "primary",
    tone: "brand",
    size: "400",
    loading: false,
    disabled: false,
    children: "Button", // Используем children вместо виртуального label, если в компоненте завязан children
  },
};

// 2. МАТРИЧНАЯ ИСТОРИЯ: Показывает все варианты (Variants) в один ряд
// Мы берем текущие args (размер, тон, загрузку) из панели управления и прокидываем их во все кнопки
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
  args: {
    tone: "brand",
    size: "400",
    loading: false,
    disabled: false,
  },
};

// 3. МАТРИЧНАЯ ИСТОРИЯ: Сравнение размеров (Sizes)
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button {...args} size="400">
        Size 400
      </Button>
      <Button {...args} size="300">
        Size 300
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
    tone: "brand",
    loading: false,
    disabled: false,
  },
};
