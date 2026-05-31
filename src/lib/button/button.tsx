import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Loader } from "../loader/loader";


// ============================================================================
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


// ============================================================================
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
  gap: inherit; /* Наследует gap от родительской кнопки StyledButton */
  
  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
  visibility: ${({ $loading }) => ($loading ? "hidden" : "visible")};
  transition: opacity 0.2s ease-in-out;
`;

// Обертка для текста (Label) с внутренними боковыми отступами в 4px по твоему ТЗ
const ButtonLabel = styled.span`
  padding-left: 4px;
  padding-right: 4px;
  display: inline-block;
`;

// Стили для иконки. Компонент кнопки сам жестко контролирует размер иконки
// в зависимости от выбранного размера кнопки ($size).
const ButtonIcon = styled.span<{ $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    /* Если размер кнопки 400 — иконка 16px. Если 300 — иконка 12px. */
    width: ${({ $size }) => ($size === "400" ? "16px" : "12px")};
    height: ${({ $size }) => ($size === "400" ? "16px" : "12px")};
  }
`;



























// // import styled from "styled-components";
// import styled, { css } from "styled-components";
// import { buttonTypography } from "../theme/tokens";

// interface IButtonProps {
//     size?: "300" | "400";
//     /* Q. Как правильно тут писать с маленькой или большой буквы? */
//     variant?: "Primary" | "Secondary" | "Outline" | "Ghost";
//     tone?: "Neutral" | "Brand" | "Positive" | "Warning" | "Negative" | "Inverse";
//     loading?: boolean;
//     disabled?: boolean;

//     startIcon?: React.ReactNode;
//     label: string;
//     endIcon?: React.ReactNode;
// }

// const StyledButton = styled.button<IButtonProps>`
    
//     /* 0. ГЛОБАЛЬНЫЕ СТИЛИ */
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
    
//     /* 1. СКВОЗНЫЕ СТИЛИ */
//     /* font: */
//     gap: none;
//     border-style: solid;

//     ${props => props.size === "400" && css`
//         height: ${props => props.theme.components.button[400].height};
//         padding-inline: ${props => props.theme.components.button[400].paddingX};
//         padding-block: ${props => props.theme.components.button[400].paddingY};
//         border-radius: ${props => props.theme.components.button[400].borderRadius};
//         border-width: ${props => props.theme.components.button[400].borderWidth};
//     `}
//     ${props => props.size === "300" && css`
//         height: ${props => props.theme.components.button[300].height};
//         padding-inline: ${props => props.theme.components.button[300].paddingX};
//         padding-block: ${props => props.theme.components.button[300].paddingY};
//         border-radius: ${props => props.theme.components.button[300].borderRadius};
//         border-width: ${props => props.theme.components.button[300].borderWidth};
//     `}

//     /* 2. СОСТОЯНИЯ СТИЛИ */
//     ${props => props.variant === "Primary" && css`
//         &:enabled {
//             color: ${props => props.theme.components.button.base.primary.brand.label.color.default};
//             background: ${props => props.theme.components.button.base.primary.brand.bg.color.default};
//             border-color: ${props => props.theme.components.button.base.primary.brand.border.color.default};
//         }
//         &:hover {
//             color: ${props => props.theme.components.button.base.primary.brand.label.color.hover};
//             background: ${props => props.theme.components.button.base.primary.brand.bg.color.hover};
//             border-color: ${props => props.theme.components.button.base.primary.brand.border.color.hover};
//         }
//         &:active {
//             color: ${props => props.theme.components.button.base.primary.brand.label.color.press};
//             background: ${props => props.theme.components.button.base.primary.brand.bg.color.press};
//             border-color: ${props => props.theme.components.button.base.primary.brand.border.color.press};
//         }
//         &:disabled {
//             cursor: not-allowed;

//             color: ${props => props.theme.components.button.base.primary.brand.label.color.disabled};
//             background: ${props => props.theme.components.button.base.primary.brand.bg.color.disabled};
//             border-color: ${props => props.theme.components.button.base.primary.brand.border.color.disabled};
//         }
//     `}
//     ${props => props.variant === "Secondary" && css`
//         &:enabled {
//             color: ${props => props.theme.components.button.base.secondary.brand.label.color.default};
//             background: ${props => props.theme.components.button.base.secondary.brand.bg.color.default};
//             border-color: ${props => props.theme.components.button.base.secondary.brand.border.color.default};
//         }
//         &:hover {
//             color: ${props => props.theme.components.button.base.secondary.brand.label.color.hover};
//             background: ${props => props.theme.components.button.base.secondary.brand.bg.color.hover};
//             border-color: ${props => props.theme.components.button.base.secondary.brand.border.color.hover};
//         }
//         &:active {
//             color: ${props => props.theme.components.button.base.secondary.brand.label.color.press};
//             background: ${props => props.theme.components.button.base.secondary.brand.bg.color.press};
//             border-color: ${props => props.theme.components.button.base.secondary.brand.border.color.press};
//         }
//         &:disabled {
//             cursor: not-allowed;
            
//             color: ${props => props.theme.components.button.base.secondary.brand.label.color.disabled};
//             background: ${props => props.theme.components.button.base.secondary.brand.bg.color.disabled};
//             border-color: ${props => props.theme.components.button.base.secondary.brand.border.color.disabled};
//         }
//     `}
//     ${props => props.variant === "Outline" && css`
//         &:enabled {
//             color: ${props => props.theme.components.button.base.outline.brand.label.color.default};
//             background: ${props => props.theme.components.button.base.outline.brand.bg.color.default};
//             border-color: ${props => props.theme.components.button.base.outline.brand.border.color.default};
//         }
//         &:hover {
//             color: ${props => props.theme.components.button.base.outline.brand.label.color.hover};
//             background: ${props => props.theme.components.button.base.outline.brand.bg.color.hover};
//             border-color: ${props => props.theme.components.button.base.outline.brand.border.color.hover};
//         }
//         &:active {
//             color: ${props => props.theme.components.button.base.outline.brand.label.color.press};
//             background: ${props => props.theme.components.button.base.outline.brand.bg.color.press};
//             border-color: ${props => props.theme.components.button.base.outline.brand.border.color.press};
//         }
//         &:disabled {
//             cursor: not-allowed;
            
//             color: ${props => props.theme.components.button.base.outline.brand.label.color.disabled};
//             background: ${props => props.theme.components.button.base.outline.brand.bg.color.disabled};
//             border-color: ${props => props.theme.components.button.base.outline.brand.border.color.disabled};
//         }
//     `}
// `;

// // const StyledWrapper = styled.span<{ 
// //     $size: "300" | "400";
// //     $variant: ThemeVariant;
// //     $tone: ThemeTone;
// //     $loading: boolean;
// //     $disabled: boolean;
// // }>`
// //     flex-grow: 1;
// //     display: inline-flex;
// //     align-items: center;
// //     justify-content: center;
// //     text-align: center;

// export const Button: React.FC<IButtonProps> = ({
//     size="400",
//     variant="Primary",
//     tone="Brand",
//     loading,
//     disabled,
//     startIcon,
//     label = "Button",
//     endIcon
// }) => {
//     return <StyledButton 
//                 size={size}
//                 variant={variant}
//                 tone={tone}
//                 loading={loading}
//                 disabled={disabled}
//                 label={label}
//             >
//                 {startIcon}
//                 {label}
//                 {endIcon}
//             </StyledButton>;
// };



















// import React from "react";
// import styled from "styled-components";
// import { buttonTypography } from "../theme/tokens"; 

// interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     size?: "300" | "400";
//     variant?: "Primary" | "Secondary" | "Outline" | "Ghost";
//     tone?: "Neutral" | "Brand" | "Positive" | "Warning" | "Negative" | "Inverse";
//     loading?: boolean;
//     disabled?: boolean;
//     startIcon?: React.ReactNode;
//     endIcon?: React.ReactNode;
//     label: string;
// }

// type ThemeVariant = "primary" | "secondary" | "outline" | "ghost";
// type ThemeTone = "neutral" | "brand" | "positive" | "warning" | "negative" | "inverse";

// const StyledButton = styled.button<{ 
//     $size: "300" | "400"; 
//     $variant: ThemeVariant; 
//     $tone: ThemeTone;
//     $loading: boolean;
// }>`
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     border-style: solid;
//     padding-inline: 0;

//     /* 1. РАЗМЕРЫ ИЗ ТЕМЫ */
//     height: ${({ theme, $size }) => theme.components.button[$size].height};
//     border-radius: ${({ theme, $size }) => theme.components.button[$size].borderRadius};
//     border-width: ${({ theme, $size }) => theme.components.button[$size].borderWidth};
//     padding-block: ${({ theme, $size }) => theme.components.button[$size].paddingY};

//     /* 2. ДИНАМИЧЕСКИЙ ФОН С ФОЛБЕКОМ */
//     background-color: ${({ theme, $variant, $tone, $loading, disabled }) => {
//         const variantGroup = theme.components.button.base[$variant];
//         // Явно проверяем наличие ключа и приводим к типу ключей этого конкретного объекта
//         const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//         const config = variantGroup[targetTone];

//         if (disabled) return config.bg.color.disabled;
//         if ($loading) return config.bg.color.loading;
//         return config.bg.color.default;
//     }};

//     /* 3. ДИНАМИЧЕСКАЯ РАМКА С ФОЛБЕКОМ */
//     border-color: ${({ theme, $variant, $tone, disabled }) => {
//         const variantGroup = theme.components.button.base[$variant];
//         const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//         const config = variantGroup[targetTone];

//         return disabled ? config.border.color.disabled : config.border.color.default;
//     }};

//     /* 4. ИНТЕРАКТИВНЫЕ СОСТОЯНИЯ (HOVER И PRESS) */
//     &:hover:not(:disabled) {
//         background-color: ${({ theme, $variant, $tone }) => {
//             const variantGroup = theme.components.button.base[$variant];
//             const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//             return variantGroup[targetTone].bg.color.hover;
//         }};
//         border-color: ${({ theme, $variant, $tone }) => {
//             const variantGroup = theme.components.button.base[$variant];
//             const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//             return variantGroup[targetTone].border.color.hover;
//         }};
        
//         span {
//             color: ${({ theme, $variant, $tone }) => {
//                 const variantGroup = theme.components.button.base[$variant];
//                 const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//                 return variantGroup[targetTone].label.color.hover;
//             }};
//         }
//     }

//     &:active:not(:disabled) {
//         background-color: ${({ theme, $variant, $tone }) => {
//             const variantGroup = theme.components.button.base[$variant];
//             const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//             return variantGroup[targetTone].bg.color.press;
//         }};
//         border-color: ${({ theme, $variant, $tone }) => {
//             const variantGroup = theme.components.button.base[$variant];
//             const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//             return variantGroup[targetTone].border.color.press;
//         }};
        
//         span {
//             color: ${({ theme, $variant, $tone }) => {
//                 const variantGroup = theme.components.button.base[$variant];
//                 const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//                 return variantGroup[targetTone].label.color.press;
//             }};
//         }
//     }

//     &:disabled {
//         cursor: not-allowed;
//     }
// `;

// const StyledWrapper = styled.span<{ 
//     $size: "300" | "400";
//     $variant: ThemeVariant;
//     $tone: ThemeTone;
//     $loading: boolean;
//     $disabled: boolean;
// }>`
//     flex-grow: 1;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
    
//     /* Внутренние боковые отступы из Gist */
//     padding-inline: ${({ theme, $size }) => theme.components.button[$size].label.paddingX};
//     padding-block: 0px;

//     /* ЦВЕТ ТЕКСТА С ФОЛБЕКОМ */
//     color: ${({ theme, $variant, $tone, $loading, $disabled }) => {
//         const variantGroup = theme.components.button.base[$variant];
//         const targetTone = ($tone in variantGroup ? $tone : Object.keys(variantGroup)[0]) as keyof typeof variantGroup;
//         const config = variantGroup[targetTone];

//         if ($disabled) return config.label.color.disabled;
//         if ($loading) return config.label.color.loading;
//         return config.label.color.default;
//     }};

    
//     ${({ $size }) => buttonTypography[$size].label}
// `;

// export const Button: React.FC<IButtonProps> = ({
//     size = "400",
//     variant = "Primary",
//     tone = "Brand",
//     loading = false,
//     disabled = false,
//     startIcon,
//     endIcon,
//     label,
//     ...props
// }) => {
//     const normalizedVariant = variant.toLowerCase() as ThemeVariant;
//     const normalizedTone = tone.toLowerCase() as ThemeTone;

//     return (
//         <StyledButton 
//             $size={size} 
//             $variant={normalizedVariant} 
//             $tone={normalizedTone}
//             $loading={loading}
//             disabled={disabled || loading}
//             {...props}
//         >
//             <StyledWrapper 
//                 $size={size}
//                 $variant={normalizedVariant} 
//                 $tone={normalizedTone}
//                 $loading={loading}
//                 $disabled={disabled}
//             >
//                 {startIcon && <span style={{ marginRight: '8px', display: 'inline-flex' }}>{startIcon}</span>}
//                 {loading ? "Загрузка..." : label}
//                 {endIcon && <span style={{ marginLeft: '8px', display: 'inline-flex' }}>{endIcon}</span>}
//             </StyledWrapper>
//         </StyledButton>
//     );
// };
