import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";
import { icons } from "./icons-set"; // Импортируем объект из вашей карты иконок

// 🧠 Хелпер: собирает все уникальные имена иконок из вашей вложенной структуры 16-й сетки
const getAllIconNames = (): string[] => {
  const namesSet = new Set<string>();

  if (icons && icons[16]) {
    if (icons[16].base) {
      Object.keys(icons[16].base).forEach((name) => namesSet.add(name));
    }
    if (icons[16].small) {
      Object.keys(icons[16].small).forEach((name) => namesSet.add(name));
    }
  }

  return Array.from(namesSet);
};

const allIconNames = getAllIconNames();

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered", // Центрирование по умолчанию для базовой одиночной песочницы Playground
  },
  tags: ["autodocs"],

  // 🧭 Свойства выстроены строго по спецификации вашего файла icon.tsx
  argTypes: {
    name: {
      control: "select",
      options: allIconNames, // Автоматически подставляем собранные имена иконок в выпадающий список
      description: "Уникальное имя иконки из зарегистрированного набора в icons-set.ts",
    },
    size: {
      control: "radio",
      options: ["16.Base", "16.Small"],
      description: "Задает размер контейнера",
    },
    color: {
      control: "color", // Storybook выведет удобную палитру (Color Picker)
      description: "Задает цвет заливки (fill) для SVG пасса",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 🎮 1. Интерактивная песочница (Вкладка Docs / Canvas)
export const Playground: Story = {
  args: {
    name: "check", // Дефолтная иконка при старте
    size: "16.Base" as any, // Приведение к any защищает от строгих проверок компилятора
    color: "#1a1a1a",
  },
};

// 🗺️ 2. Полноценная интерактивная иконотека (Галерея со змейкой на весь экран)
export const Gallery: Story = {
  // 🎯 УДАЛЕНО ОТСЮДА: здесь больше нет дубликата parameters! Сразу переходим к render.
  render: (args) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredIcons = allIconNames.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div style={{ padding: "24px", boxSizing: "border-box", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
            <label style={{ fontSize: "12px", fontWeight: "bold", color: "#8c8c8c" }}>
              Поиск по названию ({filteredIcons.length} из {allIconNames.length}):
            </label>
            <input
              type="text"
              placeholder="Введите название (например, check)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: "6px",
                border: "1px solid #d9d9d9",
                fontSize: "14px",
                width: "100%",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
              gap: "8px",
              width: "100%",
            }}
          >
            {filteredIcons.map((iconName) => (
              <div
                key={iconName}
                title="Нажмите, чтобы скопировать название"
                onClick={() => {
                  navigator.clipboard.writeText(iconName);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 6px",
                  borderRadius: "8px",
                  border: "1px solid #f0f0f0",
                  background: "#fafafa",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid #brand";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid #f0f0f0";
                  e.currentTarget.style.background = "#fafafa";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon name={iconName as any} size={"16.Small"} color={args.color} />
                <span style={{ fontSize: "11px", color: "#595959", textAlign: "center", wordBreak: "break-all" }}>
                  {iconName}
                </span>
              </div>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div style={{ textAlign: "center", color: "#8c8c8c", fontStyle: "italic", padding: "40px 0" }}>
              Иконка с названием "{searchTerm}" не найдена в файле icons-set.ts
            </div>
          )}
        </div>
      </div>
    );
  },
  args: {
    size: "16.Base",
    color: "#1a1a1a",
  },
  parameters: {
    // 🎯 Идеальный объединенный блок параметров на своем законном месте
    layout: "fullscreen", 
    controls: {
      exclude: ["name"], 
    },
  },
};

