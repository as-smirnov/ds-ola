import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/icon";

// =1==========================================================================
// ШАГ 1: ТИПЫ И ИНТЕРФЕЙСЫ (Панель свойств компонента в Figma)
// ============================================================================

export type BadgeSize = "200" | "250" | "300";
export type BadgeVariant = "primary" | "secondary";
export type BadgeTone = "neutral" | "brand" | "positive" | "warning" | "negative" | "inverse" | "added01" | "added02" | "added03" | "added04" | "added05" | "added06" | "added07" | "added08" | "added09" | "added10" | "added11";

export interface IBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  label: string;
  startIcon?: string;
  endIcon?: string;
}

// =2==========================================================================
// ШАГ 2: СТИЛИЗАЦИЯ КОМПОНЕНТА
// ============================================================================

export const StyledBadge = styled.span<{
  $size: BadgeSize;
  $variant: BadgeVariant;
  $tone: BadgeTone;
}>`
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  position: relative;

  height: ${({ theme, $size }) => theme.components.badge[$size].height};
  gap: 0px;
  padding-inline: ${({ theme, $size }) => theme.components.badge[$size].paddingX};
  padding-block: ${({ theme, $size }) => theme.components.badge[$size].paddingY};
  border-radius: ${({ theme, $size }) => theme.components.badge[$size].borderRadius};
  border-width: ${({ theme, $size }) => theme.components.badge[$size].borderWidth};
  
  background-color: ${({ theme, $variant, $tone }) => {
  const themeColor = (theme.components.badge as any)[$variant]?.[$tone]?.bg?.color?.default
  return themeColor || "inherit";
  }};
  border-color: ${({ theme, $variant, $tone }) => {
  const themeColor = (theme.components.badge as any)[$variant]?.[$tone]?.border?.color?.default
  return themeColor || "inherit";
  }};
`;

// =3==========================================================================
// ШАГ 3: ВСПОМОГАТЕЛЬНЫЕ СТИЛИ И АНИМАЦИИ
// ============================================================================

const BadgeContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0px;
`;

const BadgeLabel = styled.span<{ $size: BadgeSize; $variant: BadgeVariant; $tone: BadgeTone; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  gap: 0px;
  padding-inline: ${({ theme, $size }) => (theme.components.badge[$size].label.paddingX)};
  padding-block: 0px;

  ${({ theme, $size }) => theme.components.badge.typography[$size].label}

  ${StyledBadge} & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.badge as any)[$variant]?.[$tone]?.label?.color?.default
      return themeColor || "inherit";
    }};
  }
`;

const BadgeIcon = styled.span<{ $size: BadgeSize; $variant: BadgeVariant; $tone: BadgeTone; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${({ theme, $size }) => (theme.components.badge[$size].iconSize)};
  height: ${({ theme, $size }) => (theme.components.badge[$size].iconSize)};

  svg {
    width: 100%;
    height: 100%;
  }

  ${StyledBadge} & {
    color: ${({ theme, $variant, $tone }) => {
      const themeColor = (theme.components.badge as any)[$variant]?.[$tone]?.icon?.color?.default
      return themeColor || "inherit";
    }};
  }
`;

// =4==========================================================================
// ШАГ 4: ЛОГИКА И РЕНДЕР КОМПОНЕНТА
// ============================================================================

export const Badge: React.FC<IBadgeProps> = ({
  size = "300",            // Поменяли дефолтный размер на актуальный "300"
  variant = "primary",
  tone = "brand",
  startIcon,
  label = "Badge",
  endIcon,
  ...props
}) => {
  
  /**
   * 📐 НАШ УМНЫЙ ПЕРЕВОДЧИК РАЗМЕРОВ (Mapping)
   * На входе: размер бейджа (size).
   * На выходе: точный системный размер для компонента <Icon />.
   */
  const getIconSize = (badgeSize: typeof size): "12.Base" | "16.Small" => {
    if (badgeSize === "200") return "12.Base";
    return "16.Small"; // Для размеров "300" и "250", а также как безопасный фоллбек
  };

  // Записываем вычисленный размер в переменную
  const iconSize = getIconSize(size);

  return (
    <StyledBadge
      $size={size}
      $variant={variant}
      $tone={tone}
      {...props}
    >
      {/* Внешний контейнер (фрейм) самого бейджа */}
      <BadgeContent>
        
        {/* ИКОНКА СЛЕВА */}
        {startIcon && (
          <BadgeIcon $size={size} $variant={variant} $tone={tone}>
            <Icon 
              name={startIcon as any} 
              size={iconSize} 
            />
          </BadgeIcon>
        )}
        
        {/* ТЕКСТ БЕЙДЖА */}
        <BadgeLabel $size={size} $variant={variant} $tone={tone}>
          {label}
        </BadgeLabel>
        
        {/* ИКОНКА СПРАВА */}
        {endIcon && (
          <BadgeIcon $size={size} $variant={variant} $tone={tone}>
            <Icon 
              name={endIcon as any} 
              size={iconSize} 
            />
          </BadgeIcon>
        )}
        
      </BadgeContent>
    </StyledBadge>
  );
};
