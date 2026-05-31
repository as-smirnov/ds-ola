import { css } from 'styled-components'
import { pixels } from './pixels'

// ==========================================
// ГРУППА 1: Global-typography
// ==========================================

export const globalTypography = {
  fontFamily: {
    base: `"Inter"`,
  },
  fontWeight: {
    default: '400',
    medium: '450',
    strong: '550',
  },
  fontSize: {
    100: pixels[100],
    137: pixels[137],
    150: pixels[150],
    162: pixels[162],
    175: pixels[175],
    187: pixels[187],
    200: pixels[200],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
    500: pixels[500],
  },
  lineHeight: {
    150: pixels[150],
    200: pixels[200],
    225: pixels[225],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
  },
}

// ==========================================
// ГРУППА 2: Semantic-typography
// ==========================================

export const semanticTypography = {
  label: {
    '137': {
      default: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.default};
        font-size: ${globalTypography.fontSize[137]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
      medium: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.medium};
        font-size: ${globalTypography.fontSize[137]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
      strong: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.strong};
        font-size: ${globalTypography.fontSize[137]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
    },
    '162': {
      default: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.default};
        font-size: ${globalTypography.fontSize[162]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
      medium: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.medium};
        font-size: ${globalTypography.fontSize[162]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
      strong: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.strong};
        font-size: ${globalTypography.fontSize[162]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
    },
    '187': {
      default: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.default};
        font-size: ${globalTypography.fontSize[187]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
      medium: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.medium};
        font-size: ${globalTypography.fontSize[187]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
      strong: css`
        font-family: ${globalTypography.fontFamily.base};
        font-weight: ${globalTypography.fontWeight.strong};
        font-size: ${globalTypography.fontSize[187]};
        line-height: ${globalTypography.lineHeight[200]};
      `,
    },
  },
}

// ==========================================
// ГРУППА 3: Components-typography
// ==========================================

export const badgeTypography = {
  '200': { label: semanticTypography.label['137'].medium },
  '250': { label: semanticTypography.label['137'].medium },
  '300': { label: semanticTypography.label['137'].medium },
}
export const buttonTypography = {
  '300': { label: semanticTypography.label['137'].medium },
  '400': { label: semanticTypography.label['162'].medium },
}
export const checkboxTypography = {
  '200': { label: semanticTypography.label['162'].default },
  '250': { label: semanticTypography.label['187'].default },
}
export const pimpleTypography = {
  '200': { label: semanticTypography.label['137'].medium },
  '250': { label: semanticTypography.label['137'].medium },
  '300': { label: semanticTypography.label['162'].medium },
}
export const radioButtonTypography = {
  '200': { label: semanticTypography.label['162'].default },
  '250': { label: semanticTypography.label['187'].default },
}
export const switcherTypography = {
  '200': { label: semanticTypography.label['162'].default },
  '250': { label: semanticTypography.label['187'].default },
}
