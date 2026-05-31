import React from "react";
import styled, { keyframes } from "styled-components";
import { icons } from "../icon/icons-set";

export type LoaderSize = "16.Base" | "16.Small";
export type LoaderVariant = "primary" | "secondary" | "ghost";
export type LoaderTone = "neutral" | "brand" | "positive" | "warning" | "negative" | "inverse";

// 2. КАРТА РАЗМЕРОВ (Словарь)
// Чтобы не писать пиксели руками в стилях, создаем объект-переводчик.
// Он переводит название сетки в реальные пиксели для браузера.
const loaderSizes: Record<LoaderSize, string> = {
  "16.Base": "16px", // Базовая сетка
  "16.Small": "16px", // Меньшая сетка
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

  /* ДИНАМИЧЕСКИЕ РАЗМЕРЫ БЕЗ ЖЕСТКОГО КОДА */
  // Код берет $size (например "16.Small") и заглядывает в наш словарь loaderSizes выше.
  // На выходе получается чистый CSS -> width: 16px;
  width: ${({ $size }) => loaderSizes[$size]};
  height: ${({ $size }) => loaderSizes[$size]};

  svg {
    width: 100%;
    height: 100%;
  }

/* ЦВЕТ С ЗАЩИТОЙ И ОБХОДОМ СТРОГОГО TYPESCRIPT */
color: ${({ theme, $variant, $tone }) => {
  // Мы добавляем (as any), чтобы TypeScript разрешил нам искать любые ключи в этой ветке темы
  const themeColor = (theme.components.loader.base as any)[$variant]?.[$tone]?.icon?.color?.default;
  
  // Если цвет в теме не найден (например, для neutral), лоадер просто возьмет цвет текста кнопки
  return themeColor || "inherit";
}};
`;

// 5. Интерфейс свойств
interface ILoaderProps {
  size: LoaderSize;
  variant: LoaderVariant;
  tone: LoaderTone;
}

// 6. Сам компонент
export const Loader: React.FC<ILoaderProps> = ({ 
  size = "16.Base", 
  variant, 
  tone 
}) => {

  /**
   * Исправили путь: теперь мы четко заходим в ключ `16` внутри твоего объекта `icons`.
   * Если size равен "16.Base", берем: icons[16].base.loader
   * Если size равен "16.Small", берем: icons[16].small.loader
   */
  const currentPath = size === "16.Base" ? icons[16].base.loader : icons[16].small.loader;

  return (
    <StyledLoader $size={size} $variant={variant} $tone={tone}>
      {/* Обе иконки спроектированы на сетке 16, поэтому viewBox всегда "0 0 16 16" */}
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://w3.org">
        {/* Рисуем правильный векторный контур по координатам из currentPath */}
        <path d={currentPath} fill="currentColor" />
      </svg>
    </StyledLoader>
  );
};