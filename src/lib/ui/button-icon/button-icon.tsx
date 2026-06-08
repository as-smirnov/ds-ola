import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/icon";
import { Loader } from "../loader/loader";

// =1==========================================================================
// ШАГ 1: ТИПЫ И ИНТЕРФЕЙСЫ (Панель свойств компонента в Figma)
// ============================================================================

export type ButtonIconSize = "300" | "400";
export type ButtonIconVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonIconTone = "neutral" | "brand" | "positive" | "warning" | "negative" | "inverse" | "added01" | "added02" | "added03" | "added04" | "added05" | "added06" | "added07" | "added08" | "added09" | "added10" | "added11";

export interface IButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonIconSize;
  variant?: ButtonIconVariant;
  tone?: ButtonIconTone;
  loading?: boolean;
  icon: string;
}

// =2==========================================================================
// ШАГ 2: СТИЛИЗАЦИЯ КНОПКИ (Связь с Дизайн-Токенами)
// ============================================================================

export const StyledButtonIcon = styled.button<{
  $size: ButtonIconSize;
  $variant: ButtonIconVariant;
  $tone: ButtonIconTone;
  $loading: boolean;
}>`
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  cursor: pointer;
  position: relative;
  
  transition: ${({ theme }) => theme.transitionFast(['background-color', 'border-color'])};

  width: ${({ theme, $size }) => theme.components.buttonIcon[$size].minSize};
  height: ${({ theme, $size }) => theme.components.buttonIcon[$size].minSize};
  gap: 0px;
  padding-inline: ${({ theme, $size }) => theme.components.buttonIcon[$size].paddingX};
  padding-block: ${({ theme, $size }) => theme.components.buttonIcon[$size].paddingY};
  border-radius: ${({ theme, $size }) => theme.components.buttonIcon[$size].borderRadius};
  border-width: ${({ theme, $size }) => theme.components.buttonIcon[$size].borderWidth};

  &:enabled {
    background-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.bg?.color?.default
    return themeColor || "inherit";
    }};
    border-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.border?.color?.default
    return themeColor || "inherit";
    }};
  }
  &:hover:not(:disabled) {
    background-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.bg?.color?.hover
    return themeColor || "inherit";
    }};
    border-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.border?.color?.hover
    return themeColor || "inherit";
    }};
  }
  &:active:not(:disabled) {
    background-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.bg?.color?.press
    return themeColor || "inherit";
    }};
    border-color: ${({ theme, $variant, $tone }) => {
    const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.border?.color?.press
    return themeColor || "inherit";
    }};
  }
  &:disabled {
    cursor: not-allowed;

    background-color: ${({ theme, $variant, $tone, $loading }) => 
      $loading 
        ? (theme.components.buttonIcon as any)[$variant]?.[$tone]?.bg?.color?.default || "transparent"
        : (theme.components.buttonIcon as any)[$variant]?.[$tone]?.bg?.color?.disabled || "transparent"
    };

    border-color: ${({ theme, $variant, $tone, $loading }) => 
      $loading 
        ? (theme.components.buttonIcon as any)[$variant]?.[$tone]?.border?.color?.default || "transparent"
        : (theme.components.buttonIcon as any)[$variant]?.[$tone]?.border?.color?.disabled || "transparent"
    };
  }

`;

// =3==========================================================================
// ШАГ 3: ВСПОМОГАТЕЛЬНЫЕ СТИЛИ И АНИМАЦИИ
// ============================================================================

const ButtonIconContent = styled.span<{ $loading: boolean }>`
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

// Стили для иконки. Компонент кнопки сам жестко контролирует размер иконки
// в зависимости от выбранного размера кнопки ($size).
const ButtonIconIcon = styled.span<{ $size: ButtonIconSize; $variant: ButtonIconVariant; $tone: ButtonIconTone; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${({ theme, $size }) => (theme.components.buttonIcon[$size].iconSize)};
  height: ${({ theme, $size }) => (theme.components.buttonIcon[$size].iconSize)};

  svg {
    width: 100%;
    height: 100%;
  }
  ${StyledButtonIcon}:enabled & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.icon?.color?.default
      return themeColor || "inherit";
    }};
  }
  ${StyledButtonIcon}:hover:not(:disabled) & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.icon?.color?.hover
      return themeColor || "inherit";
    }};
  }
  ${StyledButtonIcon}:active:not(:disabled) & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.icon?.color?.press
      return themeColor || "inherit";
    }};
  }
  ${StyledButtonIcon}:disabled & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.buttonIcon as any)[$variant]?.[$tone]?.icon?.color?.disabled
      return themeColor || "inherit";
    }};
  }

  transition: ${({ theme }) => theme.transitionFast(['color'])};
`;
// Контейнер, который центрирует лоадер ровно по центру кнопки
const ButtonIconLoaderPosition = styled.div`
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

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  size = "400",
  variant = "primary",
  tone = "brand",
  loading = false,
  disabled = false,
  icon,
  ...props
}) => {
  
  const isDisabled = disabled || loading;
  const loaderVariant = variant === "outline" ? "ghost" : variant;

  return (
    <StyledButtonIcon
      $size={size}
      $variant={variant}
      $tone={tone}
      $loading={loading}
      disabled={isDisabled}
      {...props}
    >
      {/* 1. ЕСЛИ ИДЕТ ЗАГРУЗКА: отображаем лоадер строго по центру */}
      {loading && (
        <ButtonIconLoaderPosition>
          <Loader
            size={size === "400" ? "16.Base" : "16.Small"}
            variant={loaderVariant} 
            tone={tone} 
          />
        </ButtonIconLoaderPosition>
      )}

      {/* 2. ОСНОВНОЙ КОНТЕНТ КНОПКИ-ИКОНКИ */}
      <ButtonIconContent $loading={loading}>
        
        {/* Исправлено: убрали дублирующую внутреннюю матрешку условий и тегов */}
        {icon && (
          <ButtonIconIcon $size={size} $variant={variant} $tone={tone}>
            <Icon 
              name={icon as any} 
              /* Наш привычный переводчик размеров: кнопка 400 -> 16.Base, кнопка 300 -> 16.Small */
              size={size === "400" ? "16.Base" : "16.Small"} 
            />
          </ButtonIconIcon>
        )}
        
      </ButtonIconContent>
    </StyledButtonIcon>
  );
};
