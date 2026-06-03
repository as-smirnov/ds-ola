import { semanticLight } from "../semantic";

type SemanticTemplate = typeof semanticLight;

export const createLoaderTokens = (semantic: SemanticTemplate) => {
  return {
    base: {
      primary: {
        brand: {
          icon: {
            color: {
              default: semantic.colors.icon.brand.onLoud,
            },
          },
        },
        positive: {
          icon: {
            color: {
              default: semantic.colors.icon.positive.onLoud,
            },
          },
        },
        warning: {
          icon: {
            color: {
              default: semantic.colors.icon.warning.onLoud,
            },
          },
        },
        negative: {
          icon: {
            color: {
              default: semantic.colors.icon.negative.onLoud,
            },
          },
        },
        inverse: {
          icon: {
            color: {
              default: semantic.colors.icon.inverse.onLoud,
            },
          },
        },
      },
      secondary: {
        neutral: {
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
            },
          },
        },
        brand: {
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
            },
          },
        },
        positive: {
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
            },
          },
        },
        warning: {
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
            },
          },
        },
        negative: {
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
            },
          },
        },
      },
      ghost: {
        neutral: {
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
            },
          },
        },
        brand: {
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
            },
          },
        },
        positive: {
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
            },
          },
        },
        warning: {
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
            },
          },
        },
        negative: {
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
            },
          },
        },
      },
    },
  } as const;
};
