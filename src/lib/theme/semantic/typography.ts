import { css } from "styled-components";
import { typography } from "../primitives/typography";

export const typographyLight = {
  typography: {
    label: {
      "137": {
        default: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.default};
          font-size: ${typography.fontSize[137]};
          line-height: ${typography.lineHeight[200]};
        `,
        medium: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.medium};
          font-size: ${typography.fontSize[137]};
          line-height: ${typography.lineHeight[200]};
        `,
        strong: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.strong};
          font-size: ${typography.fontSize[137]};
          line-height: ${typography.lineHeight[200]};
        `,
      },
      "162": {
        default: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.default};
          font-size: ${typography.fontSize[162]};
          line-height: ${typography.lineHeight[200]};
        `,
        medium: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.medium};
          font-size: ${typography.fontSize[162]};
          line-height: ${typography.lineHeight[200]};
        `,
        strong: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.strong};
          font-size: ${typography.fontSize[162]};
          line-height: ${typography.lineHeight[200]};
        `,
      },
      "187": {
        default: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.default};
          font-size: ${typography.fontSize[187]};
          line-height: ${typography.lineHeight[200]};
        `,
        medium: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.medium};
          font-size: ${typography.fontSize[187]};
          line-height: ${typography.lineHeight[200]};
        `,
        strong: css`
          font-family: ${typography.fontFamily.base};
          font-weight: ${typography.fontWeight.strong};
          font-size: ${typography.fontSize[187]};
          line-height: ${typography.lineHeight[200]};
        `,
      },
    },
  },
} as const;

export const typographyDark = {
  ...typographyLight,
} as const;
