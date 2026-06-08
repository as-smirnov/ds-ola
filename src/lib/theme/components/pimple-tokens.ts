import { semanticLight } from "../semantic";

type SemanticTemplate = typeof semanticLight;

export const createButtonTokens = (semantic: SemanticTemplate) => {
  return {
    typography: {
      "200": { label: semantic.typography.label[137].medium },
      "250": { label: semantic.typography.label[137].medium },
      "300": { label: semantic.typography.label[162].medium },
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
      added01: {
        bg: {
          color: {
            default: semantic.colors.bg.added01.loud.default,
            hover: semantic.colors.bg.added01.loud.hover,
            press: semantic.colors.bg.added01.loud.press,
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
            default: semantic.colors.text.added01.onLoud,
            hover: semantic.colors.text.added01.onLoud,
            press: semantic.colors.text.added01.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added01.onLoud,
            hover: semantic.colors.icon.added01.onLoud,
            press: semantic.colors.icon.added01.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added01.onLoud,
          },
        },
      },
      added02: {
        bg: {
          color: {
            default: semantic.colors.bg.added02.loud.default,
            hover: semantic.colors.bg.added02.loud.hover,
            press: semantic.colors.bg.added02.loud.press,
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
            default: semantic.colors.text.added02.onLoud,
            hover: semantic.colors.text.added02.onLoud,
            press: semantic.colors.text.added02.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added02.onLoud,
            hover: semantic.colors.icon.added02.onLoud,
            press: semantic.colors.icon.added02.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added02.onLoud,
          },
        },
      },
      added03: {
        bg: {
          color: {
            default: semantic.colors.bg.added03.loud.default,
            hover: semantic.colors.bg.added03.loud.hover,
            press: semantic.colors.bg.added03.loud.press,
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
            default: semantic.colors.text.added03.onLoud,
            hover: semantic.colors.text.added03.onLoud,
            press: semantic.colors.text.added03.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added03.onLoud,
            hover: semantic.colors.icon.added03.onLoud,
            press: semantic.colors.icon.added03.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added03.onLoud,
          },
        },
      },
      added04: {
        bg: {
          color: {
            default: semantic.colors.bg.added04.loud.default,
            hover: semantic.colors.bg.added04.loud.hover,
            press: semantic.colors.bg.added04.loud.press,
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
            default: semantic.colors.text.added04.onLoud,
            hover: semantic.colors.text.added04.onLoud,
            press: semantic.colors.text.added04.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added04.onLoud,
            hover: semantic.colors.icon.added04.onLoud,
            press: semantic.colors.icon.added04.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added04.onLoud,
          },
        },
      },
      added05: {
        bg: {
          color: {
            default: semantic.colors.bg.added05.loud.default,
            hover: semantic.colors.bg.added05.loud.hover,
            press: semantic.colors.bg.added05.loud.press,
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
            default: semantic.colors.text.added05.onLoud,
            hover: semantic.colors.text.added05.onLoud,
            press: semantic.colors.text.added05.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added05.onLoud,
            hover: semantic.colors.icon.added05.onLoud,
            press: semantic.colors.icon.added05.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added05.onLoud,
          },
        },
      },
      added06: {
        bg: {
          color: {
            default: semantic.colors.bg.added06.loud.default,
            hover: semantic.colors.bg.added06.loud.hover,
            press: semantic.colors.bg.added06.loud.press,
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
            default: semantic.colors.text.added06.onLoud,
            hover: semantic.colors.text.added06.onLoud,
            press: semantic.colors.text.added06.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added06.onLoud,
            hover: semantic.colors.icon.added06.onLoud,
            press: semantic.colors.icon.added06.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added06.onLoud,
          },
        },
      },
      added07: {
        bg: {
          color: {
            default: semantic.colors.bg.added07.loud.default,
            hover: semantic.colors.bg.added07.loud.hover,
            press: semantic.colors.bg.added07.loud.press,
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
            default: semantic.colors.text.added07.onLoud,
            hover: semantic.colors.text.added07.onLoud,
            press: semantic.colors.text.added07.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added07.onLoud,
            hover: semantic.colors.icon.added07.onLoud,
            press: semantic.colors.icon.added07.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added07.onLoud,
          },
        },
      },
      added08: {
        bg: {
          color: {
            default: semantic.colors.bg.added08.loud.default,
            hover: semantic.colors.bg.added08.loud.hover,
            press: semantic.colors.bg.added08.loud.press,
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
            default: semantic.colors.text.added08.onLoud,
            hover: semantic.colors.text.added08.onLoud,
            press: semantic.colors.text.added08.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added08.onLoud,
            hover: semantic.colors.icon.added08.onLoud,
            press: semantic.colors.icon.added08.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added08.onLoud,
          },
        },
      },
      added09: {
        bg: {
          color: {
            default: semantic.colors.bg.added09.loud.default,
            hover: semantic.colors.bg.added09.loud.hover,
            press: semantic.colors.bg.added09.loud.press,
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
            default: semantic.colors.text.added09.onLoud,
            hover: semantic.colors.text.added09.onLoud,
            press: semantic.colors.text.added09.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added09.onLoud,
            hover: semantic.colors.icon.added09.onLoud,
            press: semantic.colors.icon.added09.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added09.onLoud,
          },
        },
      },
      added10: {
        bg: {
          color: {
            default: semantic.colors.bg.added10.loud.default,
            hover: semantic.colors.bg.added10.loud.hover,
            press: semantic.colors.bg.added10.loud.press,
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
            default: semantic.colors.text.added10.onLoud,
            hover: semantic.colors.text.added10.onLoud,
            press: semantic.colors.text.added10.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added10.onLoud,
            hover: semantic.colors.icon.added10.onLoud,
            press: semantic.colors.icon.added10.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added10.onLoud,
          },
        },
      },
      added11: {
        bg: {
          color: {
            default: semantic.colors.bg.added11.loud.default,
            hover: semantic.colors.bg.added11.loud.hover,
            press: semantic.colors.bg.added11.loud.press,
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
            default: semantic.colors.text.added11.onLoud,
            hover: semantic.colors.text.added11.onLoud,
            press: semantic.colors.text.added11.onLoud,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added11.onLoud,
            hover: semantic.colors.icon.added11.onLoud,
            press: semantic.colors.icon.added11.onLoud,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added11.onLoud,
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
      added01: {
        bg: {
          color: {
            default: semantic.colors.bg.added01.calm.default,
            hover: semantic.colors.bg.added01.calm.hover,
            press: semantic.colors.bg.added01.calm.press,
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
            default: semantic.colors.text.added01.onCalm,
            hover: semantic.colors.text.added01.onCalm,
            press: semantic.colors.text.added01.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
            hover: semantic.colors.icon.added01.onCalm,
            press: semantic.colors.icon.added01.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
          },
        },
      },
      added02: {
        bg: {
          color: {
            default: semantic.colors.bg.added02.calm.default,
            hover: semantic.colors.bg.added02.calm.hover,
            press: semantic.colors.bg.added02.calm.press,
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
            default: semantic.colors.text.added02.onCalm,
            hover: semantic.colors.text.added02.onCalm,
            press: semantic.colors.text.added02.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
            hover: semantic.colors.icon.added02.onCalm,
            press: semantic.colors.icon.added02.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
          },
        },
      },
      added03: {
        bg: {
          color: {
            default: semantic.colors.bg.added03.calm.default,
            hover: semantic.colors.bg.added03.calm.hover,
            press: semantic.colors.bg.added03.calm.press,
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
            default: semantic.colors.text.added03.onCalm,
            hover: semantic.colors.text.added03.onCalm,
            press: semantic.colors.text.added03.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added03.onCalm,
            hover: semantic.colors.icon.added03.onCalm,
            press: semantic.colors.icon.added03.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added03.onCalm,
          },
        },
      },
      added04: {
        bg: {
          color: {
            default: semantic.colors.bg.added04.calm.default,
            hover: semantic.colors.bg.added04.calm.hover,
            press: semantic.colors.bg.added04.calm.press,
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
            default: semantic.colors.text.added04.onCalm,
            hover: semantic.colors.text.added04.onCalm,
            press: semantic.colors.text.added04.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added04.onCalm,
            hover: semantic.colors.icon.added04.onCalm,
            press: semantic.colors.icon.added04.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added04.onCalm,
          },
        },
      },
      added05: {
        bg: {
          color: {
            default: semantic.colors.bg.added05.calm.default,
            hover: semantic.colors.bg.added05.calm.hover,
            press: semantic.colors.bg.added05.calm.press,
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
            default: semantic.colors.text.added05.onCalm,
            hover: semantic.colors.text.added05.onCalm,
            press: semantic.colors.text.added05.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
            hover: semantic.colors.icon.added05.onCalm,
            press: semantic.colors.icon.added05.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
          },
        },
      },
      added06: {
        bg: {
          color: {
            default: semantic.colors.bg.added06.calm.default,
            hover: semantic.colors.bg.added06.calm.hover,
            press: semantic.colors.bg.added06.calm.press,
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
            default: semantic.colors.text.added06.onCalm,
            hover: semantic.colors.text.added06.onCalm,
            press: semantic.colors.text.added06.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
            hover: semantic.colors.icon.added06.onCalm,
            press: semantic.colors.icon.added06.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
          },
        },
      },
      added07: {
        bg: {
          color: {
            default: semantic.colors.bg.added07.calm.default,
            hover: semantic.colors.bg.added07.calm.hover,
            press: semantic.colors.bg.added07.calm.press,
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
            default: semantic.colors.text.added07.onCalm,
            hover: semantic.colors.text.added07.onCalm,
            press: semantic.colors.text.added07.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
            hover: semantic.colors.icon.added07.onCalm,
            press: semantic.colors.icon.added07.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
          },
        },
      },
      added08: {
        bg: {
          color: {
            default: semantic.colors.bg.added08.calm.default,
            hover: semantic.colors.bg.added08.calm.hover,
            press: semantic.colors.bg.added08.calm.press,
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
            default: semantic.colors.text.added08.onCalm,
            hover: semantic.colors.text.added08.onCalm,
            press: semantic.colors.text.added08.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
            hover: semantic.colors.icon.added08.onCalm,
            press: semantic.colors.icon.added08.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
          },
        },
      },
      added09: {
        bg: {
          color: {
            default: semantic.colors.bg.added09.calm.default,
            hover: semantic.colors.bg.added09.calm.hover,
            press: semantic.colors.bg.added09.calm.press,
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
            default: semantic.colors.text.added09.onCalm,
            hover: semantic.colors.text.added09.onCalm,
            press: semantic.colors.text.added09.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
            hover: semantic.colors.icon.added09.onCalm,
            press: semantic.colors.icon.added09.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
          },
        },
      },
      added10: {
        bg: {
          color: {
            default: semantic.colors.bg.added10.calm.default,
            hover: semantic.colors.bg.added10.calm.hover,
            press: semantic.colors.bg.added10.calm.press,
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
            default: semantic.colors.text.added10.onCalm,
            hover: semantic.colors.text.added10.onCalm,
            press: semantic.colors.text.added10.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
            hover: semantic.colors.icon.added10.onCalm,
            press: semantic.colors.icon.added10.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
          },
        },
      },
      added11: {
        bg: {
          color: {
            default: semantic.colors.bg.added11.calm.default,
            hover: semantic.colors.bg.added11.calm.hover,
            press: semantic.colors.bg.added11.calm.press,
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
            default: semantic.colors.text.added11.onCalm,
            hover: semantic.colors.text.added11.onCalm,
            press: semantic.colors.text.added11.onCalm,
            disabled: semantic.colors.text.disabled.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
            hover: semantic.colors.icon.added11.onCalm,
            press: semantic.colors.icon.added11.onCalm,
            disabled: semantic.colors.icon.disabled.onCalm,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
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
            default: semantic.colors.text.warning.medium,
            hover: semantic.colors.text.warning.onCalm,
            press: semantic.colors.text.warning.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.medium,
            hover: semantic.colors.icon.warning.onCalm,
            press: semantic.colors.icon.warning.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.warning.medium,
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
      added01: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added01.calm.default,
            press: semantic.colors.bg.added01.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added01.calm.medium,
            hover: semantic.colors.border.added01.calm.medium,
            press: semantic.colors.border.added01.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added01.onCalm,
            hover: semantic.colors.text.added01.onCalm,
            press: semantic.colors.text.added01.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
            hover: semantic.colors.icon.added01.onCalm,
            press: semantic.colors.icon.added01.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
          },
        },
      },
      added02: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added02.calm.default,
            press: semantic.colors.bg.added02.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added02.calm.medium,
            hover: semantic.colors.border.added02.calm.medium,
            press: semantic.colors.border.added02.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added02.onCalm,
            hover: semantic.colors.text.added02.onCalm,
            press: semantic.colors.text.added02.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
            hover: semantic.colors.icon.added02.onCalm,
            press: semantic.colors.icon.added02.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
          },
        },
      },
      added03: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added03.calm.default,
            press: semantic.colors.bg.added03.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added03.calm.medium,
            hover: semantic.colors.border.added03.calm.medium,
            press: semantic.colors.border.added03.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added03.medium,
            hover: semantic.colors.text.added03.onCalm,
            press: semantic.colors.text.added03.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added03.medium,
            hover: semantic.colors.icon.added03.onCalm,
            press: semantic.colors.icon.added03.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added03.medium,
          },
        },
      },
      added04: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added04.calm.default,
            press: semantic.colors.bg.added04.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added04.calm.medium,
            hover: semantic.colors.border.added04.calm.medium,
            press: semantic.colors.border.added04.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added04.medium,
            hover: semantic.colors.text.added04.onCalm,
            press: semantic.colors.text.added04.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added04.medium,
            hover: semantic.colors.icon.added04.onCalm,
            press: semantic.colors.icon.added04.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added04.medium,
          },
        },
      },
      added05: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added05.calm.default,
            press: semantic.colors.bg.added05.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added05.calm.medium,
            hover: semantic.colors.border.added05.calm.medium,
            press: semantic.colors.border.added05.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added05.onCalm,
            hover: semantic.colors.text.added05.onCalm,
            press: semantic.colors.text.added05.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
            hover: semantic.colors.icon.added05.onCalm,
            press: semantic.colors.icon.added05.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
          },
        },
      },
      added06: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added06.calm.default,
            press: semantic.colors.bg.added06.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added06.calm.medium,
            hover: semantic.colors.border.added06.calm.medium,
            press: semantic.colors.border.added06.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added06.onCalm,
            hover: semantic.colors.text.added06.onCalm,
            press: semantic.colors.text.added06.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
            hover: semantic.colors.icon.added06.onCalm,
            press: semantic.colors.icon.added06.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
          },
        },
      },
      added07: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added07.calm.default,
            press: semantic.colors.bg.added07.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added07.calm.medium,
            hover: semantic.colors.border.added07.calm.medium,
            press: semantic.colors.border.added07.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added07.onCalm,
            hover: semantic.colors.text.added07.onCalm,
            press: semantic.colors.text.added07.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
            hover: semantic.colors.icon.added07.onCalm,
            press: semantic.colors.icon.added07.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
          },
        },
      },
      added08: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added08.calm.default,
            press: semantic.colors.bg.added08.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added08.calm.medium,
            hover: semantic.colors.border.added08.calm.medium,
            press: semantic.colors.border.added08.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added08.onCalm,
            hover: semantic.colors.text.added08.onCalm,
            press: semantic.colors.text.added08.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
            hover: semantic.colors.icon.added08.onCalm,
            press: semantic.colors.icon.added08.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
          },
        },
      },
      added09: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added09.calm.default,
            press: semantic.colors.bg.added09.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added09.calm.medium,
            hover: semantic.colors.border.added09.calm.medium,
            press: semantic.colors.border.added09.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added09.onCalm,
            hover: semantic.colors.text.added09.onCalm,
            press: semantic.colors.text.added09.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
            hover: semantic.colors.icon.added09.onCalm,
            press: semantic.colors.icon.added09.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
          },
        },
      },
      added10: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added10.calm.default,
            press: semantic.colors.bg.added10.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added10.calm.medium,
            hover: semantic.colors.border.added10.calm.medium,
            press: semantic.colors.border.added10.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added10.onCalm,
            hover: semantic.colors.text.added10.onCalm,
            press: semantic.colors.text.added10.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
            hover: semantic.colors.icon.added10.onCalm,
            press: semantic.colors.icon.added10.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
          },
        },
      },
      added11: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added11.calm.default,
            press: semantic.colors.bg.added11.calm.hover,
            disabled: semantic.colors.other.none,
          },
        },
        border: {
          color: {
            default: semantic.colors.border.added11.calm.medium,
            hover: semantic.colors.border.added11.calm.medium,
            press: semantic.colors.border.added11.calm.medium,
            disabled: semantic.colors.border.neutral.calm.medium,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added11.onCalm,
            hover: semantic.colors.text.added11.onCalm,
            press: semantic.colors.text.added11.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
            hover: semantic.colors.icon.added11.onCalm,
            press: semantic.colors.icon.added11.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
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
            default: semantic.colors.text.warning.medium,
            hover: semantic.colors.text.warning.onCalm,
            press: semantic.colors.text.warning.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.medium,
            hover: semantic.colors.icon.warning.onCalm,
            press: semantic.colors.icon.warning.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.warning.medium,
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
      added01: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added01.calm.default,
            press: semantic.colors.bg.added01.calm.hover,
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
            default: semantic.colors.text.added01.onCalm,
            hover: semantic.colors.text.added01.onCalm,
            press: semantic.colors.text.added01.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
            hover: semantic.colors.icon.added01.onCalm,
            press: semantic.colors.icon.added01.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
          },
        },
      },
      added02: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added02.calm.default,
            press: semantic.colors.bg.added02.calm.hover,
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
            default: semantic.colors.text.added02.onCalm,
            hover: semantic.colors.text.added02.onCalm,
            press: semantic.colors.text.added02.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
            hover: semantic.colors.icon.added02.onCalm,
            press: semantic.colors.icon.added02.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
          },
        },
      },
      added03: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added03.calm.default,
            press: semantic.colors.bg.added03.calm.hover,
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
            default: semantic.colors.text.added03.medium,
            hover: semantic.colors.text.added03.onCalm,
            press: semantic.colors.text.added03.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added03.medium,
            hover: semantic.colors.icon.added03.onCalm,
            press: semantic.colors.icon.added03.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added03.medium,
          },
        },
      },
      added04: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added04.calm.default,
            press: semantic.colors.bg.added04.calm.hover,
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
            default: semantic.colors.text.added04.medium,
            hover: semantic.colors.text.added04.onCalm,
            press: semantic.colors.text.added04.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added04.medium,
            hover: semantic.colors.icon.added04.onCalm,
            press: semantic.colors.icon.added04.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added04.medium,
          },
        },
      },
      added05: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added05.calm.default,
            press: semantic.colors.bg.added05.calm.hover,
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
            default: semantic.colors.text.added05.onCalm,
            hover: semantic.colors.text.added05.onCalm,
            press: semantic.colors.text.added05.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
            hover: semantic.colors.icon.added05.onCalm,
            press: semantic.colors.icon.added05.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
          },
        },
      },
      added06: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added06.calm.default,
            press: semantic.colors.bg.added06.calm.hover,
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
            default: semantic.colors.text.added06.onCalm,
            hover: semantic.colors.text.added06.onCalm,
            press: semantic.colors.text.added06.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
            hover: semantic.colors.icon.added06.onCalm,
            press: semantic.colors.icon.added06.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
          },
        },
      },
      added07: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added07.calm.default,
            press: semantic.colors.bg.added07.calm.hover,
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
            default: semantic.colors.text.added07.onCalm,
            hover: semantic.colors.text.added07.onCalm,
            press: semantic.colors.text.added07.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
            hover: semantic.colors.icon.added07.onCalm,
            press: semantic.colors.icon.added07.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
          },
        },
      },
      added08: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added08.calm.default,
            press: semantic.colors.bg.added08.calm.hover,
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
            default: semantic.colors.text.added08.onCalm,
            hover: semantic.colors.text.added08.onCalm,
            press: semantic.colors.text.added08.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
            hover: semantic.colors.icon.added08.onCalm,
            press: semantic.colors.icon.added08.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
          },
        },
      },
      added09: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added09.calm.default,
            press: semantic.colors.bg.added09.calm.hover,
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
            default: semantic.colors.text.added09.onCalm,
            hover: semantic.colors.text.added09.onCalm,
            press: semantic.colors.text.added09.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
            hover: semantic.colors.icon.added09.onCalm,
            press: semantic.colors.icon.added09.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
          },
        },
      },
      added10: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added10.calm.default,
            press: semantic.colors.bg.added10.calm.hover,
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
            default: semantic.colors.text.added10.onCalm,
            hover: semantic.colors.text.added10.onCalm,
            press: semantic.colors.text.added10.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
            hover: semantic.colors.icon.added10.onCalm,
            press: semantic.colors.icon.added10.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
          },
        },
      },
      added11: {
        bg: {
          color: {
            default: semantic.colors.other.none,
            hover: semantic.colors.bg.added11.calm.default,
            press: semantic.colors.bg.added11.calm.hover,
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
            default: semantic.colors.text.added11.onCalm,
            hover: semantic.colors.text.added11.onCalm,
            press: semantic.colors.text.added11.onCalm,
            disabled: semantic.colors.text.disabled.default,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
            hover: semantic.colors.icon.added11.onCalm,
            press: semantic.colors.icon.added11.onCalm,
            disabled: semantic.colors.icon.disabled.default,
          },
        },
        loadingIcon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
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
