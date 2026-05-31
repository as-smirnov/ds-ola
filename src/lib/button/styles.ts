import styled from 'styled-components'
import { ButtonSize, ButtonTone, ButtonVariant } from './types'
import { buttonTypography } from '../theme/tokens'

/**
 * ============================================================================
 * ШАГ 2: ВСПОМОГАТЕЛЬНЫЕ СТИЛИ И АНИМАЦИИ
 * ============================================================================
 */

// Обертка для контента (Текст + Иконки).
// Когда `loading: true`, мы плавно скрываем весь этот контент через прозрачность (opacity),
// но сама кнопка не схлопывается, сохраняя свои изначальные размеры.
export const ButtonContent = styled.span<{ $loading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: inherit; /* Наследует gap от родительской кнопки StyledButton */

  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
  visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
  transition: opacity 0.2s ease-in-out;
`

// Обертка для текста (Label) с внутренними боковыми отступами в 4px по твоему ТЗ
export const ButtonLabel = styled.span`
  padding-left: 4px;
  padding-right: 4px;
  display: inline-block;
`

// Стили для иконки. Компонент кнопки сам жестко контролирует размер иконки
// в зависимости от выбранного размера кнопки ($size).
export const ButtonIcon = styled.span<{ $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    /* Если размер кнопки 400 — иконка 16px. Если 300 — иконка 12px. */
    width: ${({ $size }) => ($size === '400' ? '16px' : '12px')};
    height: ${({ $size }) => ($size === '400' ? '16px' : '12px')};
  }
`
export const StyledButton = styled.button<{
  $size: ButtonSize
  $variant: ButtonVariant
  $tone: ButtonTone
  $loading: boolean
}>`
  /* Базовые сбросы и позиционирование (Auto Layout в Figma) */
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  /* 1. РАЗМЕРЫ И ОТСТУПЫ ИЗ ТЕМЫ */
  // Идем по пути: theme -> components -> button -> [выбранный размер, например "400"] -> значение
  height: ${({ theme, $size }) => theme.components.button[$size].height};
  padding: ${({ theme, $size }) =>
    `${theme.components.button[$size].paddingY} ${theme.components.button[$size].paddingX}`};
  border-radius: ${({ theme, $size }) =>
    theme.components.button[$size].borderRadius};
  border-width: ${({ theme, $size }) =>
    theme.components.button[$size].borderWidth};

  /* Компромисс с разработчиками: так как гэп везде равен 0, пишем его жестко цифрой, */
  /* чтобы не захламлять файл темы пустыми переменными. */
  gap: 0px;
  /* 2. ТИПОГРАФИКА ИЗ ТЕМЫ */
  // Динамически подключаем нужный миксин шрифта для размера 300 или 400
  ${({ theme, $size }) => buttonTypography[$size].label}
  /* 3. ЦВЕТА ИЗ ТЕМЫ (Зависят от комбинации Варианта + Тона + Состояния) */
  // Состояние: DEFAULT
  background-color: ${({ theme, $variant, $tone }) =>
    (theme.components.button as any)[$variant]?.[$tone]?.Default?.background ||
    'inherit'};

  color: ${({ theme, $variant, $tone }) =>
    (theme.components.button as any)[$variant]?.[$tone]?.Default?.color ||
    'inherit'};

  border-color: ${({ theme, $variant, $tone }) =>
    (theme.components.button as any)[$variant]?.[$tone]?.Default?.border ||
    'inherit'};

  // Состояние: HOVER (Наведение мыши). Работает только если кнопка НЕ задизейблена.
  &:hover:not(:disabled) {
    background-color: ${({ theme, $variant, $tone }) =>
      (theme.components.button as any)[$variant]?.[$tone]?.Hover?.background ||
      'inherit'};

    color: ${({ theme, $variant, $tone }) =>
      (theme.components.button as any)[$variant]?.[$tone]?.Hover?.color ||
      'inherit'};

    border-color: ${({ theme, $variant, $tone }) =>
      (theme.components.button as any)[$variant]?.[$tone]?.Hover?.border ||
      'inherit'};
  }
  // Состояние: PRESS / ACTIVE (Клик/Зажатие).
  &:active:not(:disabled) {
    background-color: ${({ theme, $variant, $tone }) =>
      (theme.components.button as any)[$variant]?.[$tone]?.Press?.background ||
      'inherit'};

    color: ${({ theme, $variant, $tone }) =>
      (theme.components.button as any)[$variant]?.[$tone]?.Press?.color ||
      'inherit'};

    border-color: ${({ theme, $variant, $tone }) =>
      (theme.components.button as any)[$variant]?.[$tone]?.Press?.border ||
      'inherit'};
  }
  // Состояние: DISABLED (Отключена)
  &:disabled {
    cursor: not-allowed;
    opacity: ${({ theme }) =>
      theme?.opacity?.disabled ||
      'inherit'}; /* Берем прозрачность дизейбла из общих токенов */
  }
`
// [ДОБАВИЛИ ВЗАМЕН СТАРЫХ КРУТИЛОК]: Невидимый контейнер для позиционирования лоадера.
// Встает абсолютно по центру кнопки поверх прозрачного текста контента.
export const ButtonLoaderPosition = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`
// // Обертка для контента (Текст + Иконки).
// // Когда `loading: true`, мы плавно скрываем весь этот контент через прозрачность (opacity),
// // но сама кнопка не схлопывается, сохраняя свои изначальные размеры.
// export const ButtonContent = styled.span<{ $loading: boolean }>`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   gap: inherit; /* Наследует gap от родительской кнопки StyledButton */

//   opacity: ${({ $loading }) => ($loading ? 0 : 1)};
//   visibility: ${({ $loading }) => ($loading ? 'hidden' : 'visible')};
//   transition: opacity 0.2s ease-in-out;
// `

// // Обертка для текста (Label) с внутренними боковыми отступами в 4px по твоему ТЗ
// export const ButtonLabel = styled.span`
//   padding-left: 4px;
//   padding-right: 4px;
//   display: inline-block;
// `

// // Стили для иконки. Компонент кнопки сам жестко контролирует размер иконки
// // в зависимости от выбранного размера кнопки ($size).
// export const ButtonIcon = styled.span<{ $size: ButtonSize }>`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
//   svg {
//     /* Если размер кнопки 400 — иконка 16px. Если 300 — иконка 12px. */
//     width: ${({ $size }) => ($size === '400' ? '16px' : '12px')};
//     height: ${({ $size }) => ($size === '400' ? '16px' : '12px')};
//   }
// `
