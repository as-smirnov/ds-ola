import styled from "styled-components";

interface IButtonProps {
    size?: "300" | "400";
    variant?: "Primary" | "Secondary" | "Outline" | "Ghost";
    tone?: "Neutral" | "Brand" | "Positive" | "Warning" | "Negative" | "Inverse";
    loading?: boolean;
    disabled?: boolean;

    startIcon?: React.ReactNode;
    label: string;
    endIcon?: React.ReactNode;
}

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    /* 1. РАЗМЕРЫ ИЗ ТЕМЫ */
    border-style: solid;
    gap: none;

`;

export const Button = () => {
    return <StyledButton>Button</StyledButton>;
};



















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
