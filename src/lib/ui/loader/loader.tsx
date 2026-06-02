import React from "react";
import styled, { keyframes } from "styled-components";
// 1. Подключаем автоматический компонент иконок
import { Icon } from "../icon/icon";

export type LoaderSize = "16.Base" | "16.Small";
export type LoaderVariant = "primary" | "secondary" | "ghost";
export type LoaderTone = "neutral" | "brand" | "positive" | "warning" | "negative" | "inverse";

// 2. КАРТА РАЗМЕРОВ
const loaderSizes: Record<LoaderSize, string> = {
  "16.Base": "16px", 
  "16.Small": "16px", // Размер коробки одинаковый, так как оба SVG холста у тебя 16х16
};

// 3. Анимация вращения
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 4. Стилизованный контейнер лоадера
export const StyledLoader = styled.div<{
  $size: LoaderSize;
  $variant: LoaderVariant;
  $tone: LoaderTone;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 0.8s linear infinite;

  width: ${({ $size }) => loaderSizes[$size]};
  height: ${({ $size }) => loaderSizes[$size]};

  /* ЦВЕТ ИЗ ТЕМЫ НА СВОЕМ МЕСТЕ */
  color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.loader.base as any)[$variant]?.[$tone]?.icon?.color?.default;
    return themeColor || "inherit";
  }};
`;

// 5. Интерфейс свойств
interface ILoaderProps {
  size?: LoaderSize; // Сделали необязательным, так как ниже задан дефолт
  variant: LoaderVariant;
  tone: LoaderTone;
}

// 6. Сам автономный компонент
export const Loader: React.FC<ILoaderProps> = ({ 
  size = "16.Base", 
  variant, 
  tone 
}) => {
  return (
    <StyledLoader $size={size} $variant={variant} $tone={tone}>
      {/* 🎯 ТЕПЕРЬ ТУТ ИДЕАЛЬНАЯ ЧИСТОТА: */}
      {/* Мы просто вызываем файл loader.svg и передаем ему текущий размер. */}
      {/* Разборщик путей внутри иконки сам поймет, в какую папку (base или small) зайти. */}
      <Icon name="loader" size={size} />
    </StyledLoader>
  );
};
