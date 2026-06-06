import { semanticLight } from "../semantic";

type SemanticTemplate = typeof semanticLight;

export const createButtonTokens = (semantic: SemanticTemplate) => {
  return {
    typography: {
      "300": { label: semantic.typography.label[137].medium },
      "400": { label: semantic.typography.label["162"].medium },
    },
    primary: {
      brand: {
        bg: {
          color: {
            default: semantic.colors.bg.brand.loud.default,
            hover: semantic.colors.bg.brand.loud.hover,
            press: semantic.colors.bg.brand.loud.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.brand.onLoud,
            hover: semantic.colors.text.brand.onLoud,
            press: semantic.colors.text.brand.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.brand.onLoud,
            hover: semantic.colors.icon.brand.onLoud,
            press: semantic.colors.icon.brand.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.brand.onLoud,
          },
        },
      },
      positive: {
        bg: {
          color: {
            default: semantic.colors.bg.positive.loud.default,
            hover: semantic.colors.bg.positive.loud.hover,
            press: semantic.colors.bg.positive.loud.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.positive.onLoud,
            hover: semantic.colors.text.positive.onLoud,
            press: semantic.colors.text.positive.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.positive.onLoud,
            hover: semantic.colors.icon.positive.onLoud,
            press: semantic.colors.icon.positive.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.positive.onLoud,
          },
        },
      },
      warning: {
        bg: {
          color: {
            default: semantic.colors.bg.warning.loud.default,
            hover: semantic.colors.bg.warning.loud.hover,
            press: semantic.colors.bg.warning.loud.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.warning.onLoud,
            hover: semantic.colors.text.warning.onLoud,
            press: semantic.colors.text.warning.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.onLoud,
            hover: semantic.colors.icon.warning.onLoud,
            press: semantic.colors.icon.warning.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.warning.onLoud,
          },
        },
      },
      negative: {
        bg: {
          color: {
            default: semantic.colors.bg.negative.loud.default,
            hover: semantic.colors.bg.negative.loud.hover,
            press: semantic.colors.bg.negative.loud.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.negative.onLoud,
            hover: semantic.colors.text.negative.onLoud,
            press: semantic.colors.text.negative.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.negative.onLoud,
            hover: semantic.colors.icon.negative.onLoud,
            press: semantic.colors.icon.negative.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.negative.onLoud,
          },
        },
      },
      inverse: {
        bg: {
          color: {
            default: semantic.colors.bg.inverse.loud.default,
            hover: semantic.colors.bg.inverse.loud.hover,
            press: semantic.colors.bg.inverse.loud.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.inverse.onLoud,
            hover: semantic.colors.text.inverse.onLoud,
            press: semantic.colors.text.inverse.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.inverse.onLoud,
            hover: semantic.colors.icon.inverse.onLoud,
            press: semantic.colors.icon.inverse.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.inverse.onLoud,
          },
        },
      },
    },
    secondary: {
      neutral: {
        bg: {
          color: {
            default: semantic.colors.bg.neutral.calm.default,
            hover: semantic.colors.bg.neutral.calm.hover,
            press: semantic.colors.bg.neutral.calm.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.neutral.onCalm,
            hover: semantic.colors.text.neutral.onCalm,
            press: semantic.colors.text.neutral.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
            hover: semantic.colors.icon.neutral.onCalm,
            press: semantic.colors.icon.neutral.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
          },
        },
      },
      brand: {
        bg: {
          color: {
            default: semantic.colors.bg.brand.calm.default,
            hover: semantic.colors.bg.brand.calm.hover,
            press: semantic.colors.bg.brand.calm.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.brand.onCalm,
            hover: semantic.colors.text.brand.onCalm,
            press: semantic.colors.text.brand.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
            hover: semantic.colors.icon.brand.onCalm,
            press: semantic.colors.icon.brand.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
          },
        },
      },
      positive: {
        bg: {
          color: {
            default: semantic.colors.bg.positive.calm.default,
            hover: semantic.colors.bg.positive.calm.hover,
            press: semantic.colors.bg.positive.calm.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.positive.onCalm,
            hover: semantic.colors.text.positive.onCalm,
            press: semantic.colors.text.positive.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
            hover: semantic.colors.icon.positive.onCalm,
            press: semantic.colors.icon.positive.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
          },
        },
      },
      warning: {
        bg: {
          color: {
            default: semantic.colors.bg.warning.calm.default,
            hover: semantic.colors.bg.warning.calm.hover,
            press: semantic.colors.bg.warning.calm.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.warning.onCalm,
            hover: semantic.colors.text.warning.onCalm,
            press: semantic.colors.text.warning.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
            hover: semantic.colors.icon.warning.onCalm,
            press: semantic.colors.icon.warning.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
          },
        },
      },
      negative: {
        bg: {
          color: {
            default: semantic.colors.bg.negative.calm.default,
            hover: semantic.colors.bg.negative.calm.hover,
            press: semantic.colors.bg.negative.calm.press,
            disabled: semantic.colors.bg.disabled.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.negative.onCalm,
            hover: semantic.colors.text.negative.onCalm,
            press: semantic.colors.text.negative.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
            hover: semantic.colors.icon.negative.onCalm,
            press: semantic.colors.icon.negative.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
          },
        },
      },
    },
    outline: {
      neutral: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.neutral.calm.default,
            press: semantic.colors.bg.neutral.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.neutral.calm.medium,
            hover: semantic.colors.border.neutral.calm.medium,
            press: semantic.colors.border.neutral.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.neutral.onCalm,
            hover: semantic.colors.text.neutral.onCalm,
            press: semantic.colors.text.neutral.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
            hover: semantic.colors.icon.neutral.onCalm,
            press: semantic.colors.icon.neutral.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
          },
        },
      },
      brand: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.brand.calm.default,
            press: semantic.colors.bg.brand.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.brand.calm.medium,
            hover: semantic.colors.border.brand.calm.medium,
            press: semantic.colors.border.brand.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.brand.onCalm,
            hover: semantic.colors.text.brand.onCalm,
            press: semantic.colors.text.brand.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
            hover: semantic.colors.icon.brand.onCalm,
            press: semantic.colors.icon.brand.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
          },
        },
      },
      positive: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.positive.calm.default,
            press: semantic.colors.bg.positive.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.positive.calm.medium,
            hover: semantic.colors.border.positive.calm.medium,
            press: semantic.colors.border.positive.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.positive.onCalm,
            hover: semantic.colors.text.positive.onCalm,
            press: semantic.colors.text.positive.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
            hover: semantic.colors.icon.positive.onCalm,
            press: semantic.colors.icon.positive.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
          },
        },
      },
      warning: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.warning.calm.default,
            press: semantic.colors.bg.warning.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.warning.calm.medium,
            hover: semantic.colors.border.warning.calm.medium,
            press: semantic.colors.border.warning.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.warning.onCalm,
            hover: semantic.colors.text.warning.onCalm,
            press: semantic.colors.text.warning.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
            hover: semantic.colors.icon.warning.onCalm,
            press: semantic.colors.icon.warning.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
          },
        },
      },
      negative: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.negative.calm.default,
            press: semantic.colors.bg.negative.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.negative.calm.medium,
            hover: semantic.colors.border.negative.calm.medium,
            press: semantic.colors.border.negative.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.negative.onCalm,
            hover: semantic.colors.text.negative.onCalm,
            press: semantic.colors.text.negative.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
            hover: semantic.colors.icon.negative.onCalm,
            press: semantic.colors.icon.negative.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
          },
        },
      },
    },
    ghost: {
      neutral: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.neutral.calm.default,
            press: semantic.colors.bg.neutral.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.neutral.onCalm,
            hover: semantic.colors.text.neutral.onCalm,
            press: semantic.colors.text.neutral.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
            hover: semantic.colors.icon.neutral.onCalm,
            press: semantic.colors.icon.neutral.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
          },
        },
      },
      brand: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.brand.calm.default,
            press: semantic.colors.bg.brand.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.brand.onCalm,
            hover: semantic.colors.text.brand.onCalm,
            press: semantic.colors.text.brand.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
            hover: semantic.colors.icon.brand.onCalm,
            press: semantic.colors.icon.brand.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
          },
        },
      },
      positive: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.positive.calm.default,
            press: semantic.colors.bg.positive.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.positive.onCalm,
            hover: semantic.colors.text.positive.onCalm,
            press: semantic.colors.text.positive.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
            hover: semantic.colors.icon.positive.onCalm,
            press: semantic.colors.icon.positive.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
          },
        },
      },
      warning: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.warning.calm.default,
            press: semantic.colors.bg.warning.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.warning.onCalm,
            hover: semantic.colors.text.warning.onCalm,
            press: semantic.colors.text.warning.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
            hover: semantic.colors.icon.warning.onCalm,
            press: semantic.colors.icon.warning.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
          },
        },
      },
      negative: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.negative.calm.default,
            press: semantic.colors.bg.negative.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.other.none,
            press: semantic.colors.other.none,
            disabled: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.negative.onCalm,
            hover: semantic.colors.text.negative.onCalm,
            press: semantic.colors.text.negative.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
            hover: semantic.colors.icon.negative.onCalm,
            press: semantic.colors.icon.negative.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
          },
        },
      },
    },
    300: {
      iconSize: semantic.sizes[200],
      height: semantic.sizes[300],
      paddingX: semantic.spaces[62],
      paddingY: semantic.spaces[37],
      borderRadius: semantic.radius[75],
      borderWidth: semantic.strokes[12],
      label: {
        paddingX: semantic.spaces[25],
      },
    },
    400: {
      iconSize: semantic.sizes[200],
      height: semantic.sizes[400],
      paddingX: semantic.spaces[87],
      paddingY: semantic.spaces[87],
      borderRadius: semantic.radius[100],
      borderWidth: semantic.strokes[12],
      label: {
        paddingX: semantic.spaces[50],
      },
    },
  } as const;
};
