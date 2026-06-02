import React from "react";
import styled from "styled-components";
import { buttonTypography } from "../../theme/tokens/typography";
import { Icon } from "../icon/icon"; // Подтягиваем наш умный компонент иконок
import { Loader } from "../loader/loader";

// =1==========================================================================
// ШАГ 1: ТИПЫ И ИНТЕРФЕЙСЫ (Панель свойств компонента в Figma)
// ============================================================================


// Ограничиваем списки значений (как выпадающие списки / Variants в Figma).
// Названия строго с большой буквы, так как в файле theme.ts они написаны так же.
export type ButtonSize = "300" | "400";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonTone = "neutral" | "brand" | "positive" | "warning" | "negative" | "inverse";

// Описываем, какие пропсы (свойства) внешние разработчики могут передать в кнопку.
// `extends` автоматически добавляет сюда все стандартные свойства HTML-кнопки (например, disabled, onClick).
export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;          // Необязательный размер кнопки (дефолт зададим ниже)
  variant?: ButtonVariant;    // Необязательный вариант стиля (дефолт зададим ниже)
  tone?: ButtonTone;          // Необязательный цветовой тон (дефолт зададим ниже)
  loading?: boolean;          // Включает состояние загрузки (true / false)
  label: string;              // Текст внутри кнопки
                              // Заметка: Если в будущем нужна будет супер-гибкость (сложная разметка внутри текста), 
                              // нужно будет заменить `label: string` на встроенное свойство `children`.
  startIcon?: string;         // Строковое имя иконки слева (например, "Trash"). Безопасно, без лишней разметки.
  endIcon?: string;           // Строковое имя иконки справа (например, "ArrowRight").
}

// =3==========================================================================
// ШАГ 3: СТИЛИЗАЦИЯ КНОПКИ (Связь с Дизайн-Токенами)
// ============================================================================

// Стилизируем саму HTML-кнопку. Знак доллара `$` перед пропсами (например, $size)
// нужен для styled-components, чтобы эти свойства оставались внутри CSS и не улетали в HTML-код.
export const StyledButton = styled.button<{
  $size: ButtonSize;
  $variant: ButtonVariant;
  $tone: ButtonTone;
  $loading: boolean;
}>`
  /* Базовые сбросы браузера и позиционирование (Auto Layout в Figma) */
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  cursor: pointer;
  position: relative; /* Чтобы иконка лоадера могла встать абсолютно по центру */
  
  /* 👈 ИСПРАВИЛИ ТУТ: Плавность фона и рамок из глобальной темы */
  transition: ${({ theme }) => theme.transitionFast(['background-color', 'border-color'])};

  /* 1. РАЗМЕРЫ И ВНЕШНИЕ ПАДИНГИ ИЗ ТЕМЫ */
  height: ${({ theme, $size }) => theme.components.button[$size].height};
  gap: 0px;
  padding-inline: ${({ theme, $size }) => theme.components.button[$size].paddingX};
  padding-block: ${({ theme, $size }) => theme.components.button[$size].paddingY};
  border-radius: ${({ theme, $size }) => theme.components.button[$size].borderRadius};
  border-width: ${({ theme, $size }) => theme.components.button[$size].borderWidth};

  /* 3. ЦВЕТА ИЗ ТЕМЫ (Зависят от комбинации Варианта + Тона + Состояния) */
  &:enabled {
    background-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.bg?.color?.default
    return themeColor || "inherit";
    }};
    border-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.border?.color?.default
    return themeColor || "inherit";
    }};
  }
  &:hover:not(:disabled) {
    background-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.bg?.color?.hover
    return themeColor || "inherit";
    }};
    border-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.border?.color?.hover
    return themeColor || "inherit";
    }};
  }
  &:active:not(:disabled) {
    background-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.bg?.color?.press
    return themeColor || "inherit";
    }};
    border-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.border?.color?.press
    return themeColor || "inherit";
    }};
  }
  &:disabled {
    /* Курсор "not-allowed" оставляем в любом случае — это технический сигнал блокировки */
    cursor: not-allowed;

    /* ФОН КНОПКИ: Если идет загрузка — берем яркий default цвет. Если чистый дизейбл — серый disabled */
    background-color: ${({ theme, $variant, $tone, $loading }) => 
      $loading 
        ? (theme.components.button.base as any)[$variant]?.[$tone]?.bg?.color?.default || "transparent"
        : (theme.components.button.base as any)[$variant]?.[$tone]?.bg?.color?.disabled || "transparent"
    };

    /* БОРДЕР КНОПКИ: Точно так же разделяем логику загрузки и дизейбла */
    border-color: ${({ theme, $variant, $tone, $loading }) => 
      $loading 
        ? (theme.components.button.base as any)[$variant]?.[$tone]?.border?.color?.default || "transparent"
        : (theme.components.button.base as any)[$variant]?.[$tone]?.border?.color?.disabled || "transparent"
    };
  }

`;

// =2==========================================================================
// ШАГ 2: ВСПОМОГАТЕЛЬНЫЕ СТИЛИ И АНИМАЦИИ
// ============================================================================


// Обертка для контента (Текст + Иконки).
// Когда `loading: true`, мы плавно скрываем весь этот контент через прозрачность (opacity),
// но сама кнопка не схлопывается, сохраняя свои изначальные размеры.
const ButtonContent = styled.span<{ $loading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0px;
  
  opacity: ${({ theme, $loading }) => ($loading ? theme.semantic.opacity.hidden : theme.semantic.opacity.visible)};
  visibility: ${({ $loading }) => ($loading ? "hidden" : "visible")};
  transition: opacity 0.2s ease-in-out;
`;

// Обертка для текста (Label)
const ButtonLabel = styled.span<{ $size: ButtonSize; $variant: ButtonVariant; $tone: ButtonTone; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  gap: 0px;
  padding-inline: ${({ theme, $size }) => (theme.components.button[$size].label.paddingX)};
  padding-block: 0px;

  /* 2. ТИПОГРАФИКА ИЗ ТЕМЫ */
  // Код берет $size (например "400"), заходит в импортированный объект buttonTypography,
  // открывает папку .label и выгружает оттуда весь набор CSS-стилей текста!
  ${({ $size }) => buttonTypography[$size].label}

  ${StyledButton}:enabled & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.label?.color?.default
      return themeColor || "inherit";
    }};
  }
  ${StyledButton}:hover:not(:disabled) & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.label?.color?.hover
      return themeColor || "inherit";
    }};
  }
  ${StyledButton}:active:not(:disabled) & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.label?.color?.press
      return themeColor || "inherit";
    }};
  }
  ${StyledButton}:disabled & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.label?.color?.disabled
      return themeColor || "inherit";
    }};
  }

  transition: ${({ theme }) => theme.transitionFast(['color'])};

`;

// Стили для иконки. Компонент кнопки сам жестко контролирует размер иконки
// в зависимости от выбранного размера кнопки ($size).
const ButtonIcon = styled.span<{ $size: ButtonSize; $variant: ButtonVariant; $tone: ButtonTone; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${({ theme, $size }) => (theme.components.button[$size].iconSize)};
  height: ${({ theme, $size }) => (theme.components.button[$size].iconSize)};

  /* Говорим любому SVG или элементу внутри этой коробочки занять её объём на 100% */
  svg {
    width: 100%;
    height: 100%;
  }
  ${StyledButton}:enabled & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.icon?.color?.default
      return themeColor || "inherit";
    }};
  }
  ${StyledButton}:hover:not(:disabled) & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.icon?.color?.hover
      return themeColor || "inherit";
    }};
  }
  ${StyledButton}:active:not(:disabled) & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.icon?.color?.press
      return themeColor || "inherit";
    }};
  }
  ${StyledButton}:disabled & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.button.base as any)[$variant]?.[$tone]?.icon?.color?.disabled
      return themeColor || "inherit";
    }};
  }

  transition: ${({ theme }) => theme.transitionFast(['color'])};
`;
// Контейнер, который центрирует лоадер ровно по центру кнопки
const ButtonLoaderPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// =4==========================================================================
// ШАГ 4: СБОРКА ГОТОВОГО КОМПОНЕНТА С ЛОГИКОЙ
// ============================================================================

export const Button: React.FC<IButtonProps> = ({
  size = "400",            // Значение по умолчанию, если разработчик его не передал
  variant = "primary",     // Значение по умолчанию
  tone = "brand",          // Значение по умолчанию
  loading = false,
  disabled = false,
  startIcon = "check",
  label = "Button",
  endIcon  = "check",
  ...props                 // Сюда автоматически собираются все остальные стандартные пропсы (onClick, id и т.д.)
}) => {
  
  // Внутренняя логика безопасности: кнопка технически блокируется для кликов, 
  // если она либо отключена вручную (disabled), либо сейчас крутится загрузка (loading).
  const isDisabled = disabled || loading;

  /**
   * 🛠️ НАШ УМНЫЙ ПЕРЕВОДЧИК ВАРИАНТОВ (Mapping)
   * Код проверяет: если вариант кнопки "outline", мы принудительно переключаем его в "ghost".
   * Для всех остальных вариантов (primary, secondary, ghost) он оставит их имя как есть.
   */
  const loaderVariant = variant === "outline" ? "ghost" : variant;

  return (
    <StyledButton
      $size={size}
      $variant={variant}
      $tone={tone}
      $loading={loading}
      disabled={isDisabled} // Передаем итоговый статус блокировки в HTML-тег
      {...props}            // Прокидываем стандартные атрибуты (например, onClick) на кнопку
    >
      {/* 1. ЕСЛИ ИДЕТ ЗАГРУЗКА: вызываем наш автономный лоадер по центру */}
      {loading && (
        <ButtonLoaderPosition>
          <Loader 
            // Переводчик размеров кнопки в сетки лоадера:
            // Если размер кнопки 400 -> дай лоадеру большую сетку. Если 300 -> маленькую.
            size={size === "400" ? "16.Base" : "16.Small"} 
            // Передаем вариант и тон. Буквы теперь везде маленькие, всё совпадает идеально!
            variant={loaderVariant} 
            tone={tone} 
          />
        </ButtonLoaderPosition>
      )}

      {/* 2. ОСНОВНОЙ КОНТЕНТ КНОПКИ (Твой привычный порядок слоев из Figma) */}
      {/* Обертка автоматически станет прозрачной при загрузке, но сохранит габариты кнопки */}
      <ButtonContent $loading={loading}>
        
        {/* Иконка СЛЕВА. Появится только если передано имя иконки в пропсы */}
        {startIcon && (
          /* Передаем пропсы внутрь коробочки, чтобы она знала, в какой цвет покраситься! */
          <ButtonIcon $size={size} $variant={variant} $tone={tone}>
            {/* Временная заглушка. На следующем этапе мы заменим её на настоящий <IconComponent /> */}
            <Icon 
              name={startIcon as any} 
              // Наш переводчик размеров: кнопка 400 вызывает большую сетку 16.Base, 
              // а кнопка 300 вызывает меньшую сетку 16.Small
              size={size === "400" ? "16.Base" : "16.Small"} 
            />

          </ButtonIcon>
        )}
        
        {/* Текст кнопки, обернутый в правильные падинги и независимые цвета из темы */}
        <ButtonLabel $size={size} $variant={variant} $tone={tone}>
          {label}
        </ButtonLabel>
        
        {/* Иконка СПРАВА */}
        {endIcon && (
          <ButtonIcon $size={size} $variant={variant} $tone={tone}>
            {/* Иконка СПРАВА */}
            {endIcon && (
              <ButtonIcon $size={size} $variant={variant} $tone={tone}>
                <Icon 
                  name={endIcon as any} 
                  size={size === "400" ? "16.Base" : "16.Small"} 
                />
  </ButtonIcon>
)}

          </ButtonIcon>
        )}
        
      </ButtonContent>
    </StyledButton>
  );
};
