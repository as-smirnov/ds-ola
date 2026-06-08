import { semanticLight } from "../semantic";

type SemanticTemplate = typeof semanticLight;

export const createBadgeTokens = (semantic: SemanticTemplate) => {
  return {
    typography: {
      "200": { label: semantic.typography.label[137].medium },
      "250": { label: semantic.typography.label[137].medium },
      "300": { label: semantic.typography.label[137].medium },
    },
    primary: {
      brand: {
        bg: {
          color: {
            default: semantic.colors.bg.brand.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.brand.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.brand.onLoud,
          },
        },
      },
      positive: {
        bg: {
          color: {
            default: semantic.colors.bg.positive.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.positive.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.positive.onLoud,
          },
        },
      },
      warning: {
        bg: {
          color: {
            default: semantic.colors.bg.warning.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.warning.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.onLoud,
          },
        },
      },
      negative: {
        bg: {
          color: {
            default: semantic.colors.bg.negative.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.negative.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.negative.onLoud,
          },
        },
      },
      inverse: {
        bg: {
          color: {
            default: semantic.colors.bg.inverse.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.inverse.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.inverse.onLoud,
          },
        },
      },
      added01: {
        bg: {
          color: {
            default: semantic.colors.bg.added01.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added01.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added01.onLoud,
          },
        },
      },
      added02: {
        bg: {
          color: {
            default: semantic.colors.bg.added02.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added02.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added02.onLoud,
          },
        },
      },
      added03: {
        bg: {
          color: {
            default: semantic.colors.bg.added03.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added03.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added03.onLoud,
          },
        },
      },
      added04: {
        bg: {
          color: {
            default: semantic.colors.bg.added04.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added04.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added04.onLoud,
          },
        },
      },
      added05: {
        bg: {
          color: {
            default: semantic.colors.bg.added05.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added05.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added05.onLoud,
          },
        },
      },
      added06: {
        bg: {
          color: {
            default: semantic.colors.bg.added06.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added06.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added06.onLoud,
          },
        },
      },
      added07: {
        bg: {
          color: {
            default: semantic.colors.bg.added07.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added07.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added07.onLoud,
          },
        },
      },
      added08: {
        bg: {
          color: {
            default: semantic.colors.bg.added08.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added08.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added08.onLoud,
          },
        },
      },
      added09: {
        bg: {
          color: {
            default: semantic.colors.bg.added09.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added09.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added09.onLoud,
          },
        },
      },
      added10: {
        bg: {
          color: {
            default: semantic.colors.bg.added10.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added10.onLoud,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added10.onLoud,
          },
        },
      },
      added11: {
        bg: {
          color: {
            default: semantic.colors.bg.added11.loud.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added11.onLoud,
          },
        },
        icon: {
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
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.neutral.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.neutral.onCalm,
          },
        },
      },
      brand: {
        bg: {
          color: {
            default: semantic.colors.bg.brand.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.brand.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.brand.onCalm,
          },
        },
      },
      positive: {
        bg: {
          color: {
            default: semantic.colors.bg.positive.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.positive.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.positive.onCalm,
          },
        },
      },
      warning: {
        bg: {
          color: {
            default: semantic.colors.bg.warning.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.warning.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.warning.onCalm,
          },
        },
      },
      negative: {
        bg: {
          color: {
            default: semantic.colors.bg.negative.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.negative.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.negative.onCalm,
          },
        },
      },
      added01: {
        bg: {
          color: {
            default: semantic.colors.bg.added01.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added01.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added01.onCalm,
          },
        },
      },
      added02: {
        bg: {
          color: {
            default: semantic.colors.bg.added02.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added02.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added02.onCalm,
          },
        },
      },
      added03: {
        bg: {
          color: {
            default: semantic.colors.bg.added03.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added03.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added03.onCalm,
          },
        },
      },
      added04: {
        bg: {
          color: {
            default: semantic.colors.bg.added04.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added04.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added04.onCalm,
          },
        },
      },
      added05: {
        bg: {
          color: {
            default: semantic.colors.bg.added05.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added05.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added05.onCalm,
          },
        },
      },
      added06: {
        bg: {
          color: {
            default: semantic.colors.bg.added06.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added06.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added06.onCalm,
          },
        },
      },
      added07: {
        bg: {
          color: {
            default: semantic.colors.bg.added07.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added07.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added07.onCalm,
          },
        },
      },
      added08: {
        bg: {
          color: {
            default: semantic.colors.bg.added08.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added08.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added08.onCalm,
          },
        },
      },
      added09: {
        bg: {
          color: {
            default: semantic.colors.bg.added09.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added09.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added09.onCalm,
          },
        },
      },
      added10: {
        bg: {
          color: {
            default: semantic.colors.bg.added10.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added10.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added10.onCalm,
          },
        },
      },
      added11: {
        bg: {
          color: {
            default: semantic.colors.bg.added11.calm.default,
          },
        },
        border: {
          color: {
            default: semantic.colors.other.none,
          },
        },
        label: {
          color: {
            default: semantic.colors.text.added11.onCalm,
          },
        },
        icon: {
          color: {
            default: semantic.colors.icon.added11.onCalm,
          },
        },
      },
    },
    200: {
      iconSize: semantic.sizes[150],
      height: semantic.sizes[200],
      paddingX: semantic.spaces[37],
      paddingY: semantic.spaces[0],
      borderRadius: semantic.radius[50],
      borderWidth: semantic.strokes[12],
      label: {
        paddingX: semantic.spaces[25],
      },
    },
    250: {
      iconSize: semantic.sizes[200],
      height: semantic.sizes[250],
      paddingX: semantic.spaces[37],
      paddingY: semantic.spaces[12],
      borderRadius: semantic.radius[62],
      borderWidth: semantic.strokes[12],
      label: {
        paddingX: semantic.spaces[25],
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
  } as const;
};
