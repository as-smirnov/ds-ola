import { palette, pixels, globalTypography } from "./tokens";
import { hexToRgba } from "./utils/hexToRgba";

// ==========================================
// ГРУППА 1: Semantic-токены
// ==========================================

const semanticTokens = {
  colors: {
    bg: {
      space: palette.neutral["L90"],
      spaceIsland: palette.neutral["L100"],
      page: palette.neutral["L95"],
      layer1: palette.neutral["L100"],
      layer2: palette.neutral["L95"],
      layer2Depth: palette.neutral["L95"],
      layer3: palette.neutral["L90"],
      neutral: {
        calm: {
          default: palette.black["B7"],
          hover: palette.black["B11"],
          press: palette.black["B15"],
          weak: {
            default: palette.black["B3"],
            hover: palette.black["B7"],
            press: palette.black["B11"],
          },
          strong: {
            default: palette.black["B11"],
            hover: palette.black["B15"],
            press: palette.black["B19"],
          },
        },
      },
      brand: {
        loud: {
          default: palette.blue["BASE"],
          hover: palette.blue["D12"],
          press: palette.blue["D25"],
        },
        calm: {
          default: hexToRgba(palette.blue["BASE"], 0.1),
          hover: hexToRgba(palette.blue["BASE"], 0.16),
          press: hexToRgba(palette.blue["BASE"], 0.21),
        },
      },
      accent: {
        loud: {
          default: palette.rose["BASE"],
          hover: palette.rose["D12"],
          press: palette.rose["D25"],
        },
        calm: {
          default: hexToRgba(palette.rose["BASE"], 0.09),
          hover: hexToRgba(palette.rose["BASE"], 0.14),
          press: hexToRgba(palette.rose["BASE"], 0.19),
        },
      },
      positive: {
        loud: {
          default: palette.green["D12"],
          hover: palette.green["D22"],
          press: palette.green["D34"],
        },
        calm: {
          default: hexToRgba(palette.green["D13"], 0.1),
          hover: hexToRgba(palette.green["D13"], 0.16),
          press: hexToRgba(palette.green["D13"], 0.21),
        },
      },
      warning: {
        loud: {
          default: palette.amber["BASE"],
          hover: palette.amber["D10"],
          press: palette.amber["D20"],
        },
        calm: {
          default: hexToRgba(palette.amber["BASE"], 0.14),
          hover: hexToRgba(palette.amber["BASE"], 0.22),
          press: hexToRgba(palette.amber["BASE"], 0.29),
        },
      },
      negative: {
        loud: {
          default: palette.red["L2"],
          hover: palette.red["D11"],
          press: palette.red["D24"],
        },
        calm: {
          default: hexToRgba(palette.red["L2"], 0.09),
          hover: hexToRgba(palette.red["L2"], 0.15),
          press: hexToRgba(palette.red["L2"], 0.2),
        },
      },
      info: {
        loud: {
          default: palette.blue["BASE"],
          hover: palette.blue["D12"],
          press: palette.blue["D25"],
        },
        calm: {
          default: hexToRgba(palette.blue["BASE"], 0.1),
          hover: hexToRgba(palette.blue["BASE"], 0.16),
          press: hexToRgba(palette.blue["BASE"], 0.21),
        },
      },
      inverse: {
        loud: {
          default: palette.neutral["D60"],
          hover: palette.neutral["D40"],
          press: palette.neutral["D20"],
        },
      },
      disabled: {
        calm: {
          default: palette.black["B10"],
        },
      },
      added01: {
        loud: {
          default: palette.sunset["D5"],
          hover: palette.sunset["D17"],
          press: palette.sunset["D29"],
        },
        calm: {
          default: hexToRgba(palette.sunset["D5"], 0.1),
          hover: hexToRgba(palette.sunset["D5"], 0.15),
          press: hexToRgba(palette.sunset["D5"], 0.2),
        },
      },
      added02: {
        loud: {
          default: palette.orange["D8"],
          hover: palette.orange["D20"],
          press: palette.orange["D32"],
        },
        calm: {
          default: hexToRgba(palette.orange["D11"], 0.11),
          hover: hexToRgba(palette.orange["D11"], 0.16),
          press: hexToRgba(palette.orange["D11"], 0.21),
        },
      },
      added03: {
        loud: {
          default: palette.yellow["BASE"],
          hover: palette.yellow["D10"],
          press: palette.yellow["D20"],
        },
        calm: {
          default: hexToRgba(palette.yellow["BASE"], 0.15),
          hover: hexToRgba(palette.yellow["BASE"], 0.23),
          press: hexToRgba(palette.yellow["BASE"], 0.31),
        },
      },
      added04: {
        loud: {
          default: palette.citron["BASE"],
          hover: palette.citron["D10"],
          press: palette.citron["D20"],
        },
        calm: {
          default: hexToRgba(palette.citron["BASE"], 0.15),
          hover: hexToRgba(palette.citron["BASE"], 0.23),
          press: hexToRgba(palette.citron["BASE"], 0.31),
        },
      },
      added05: {
        loud: {
          default: palette.lime["BASE"],
          hover: palette.lime["D8"],
          press: palette.lime["D16"],
        },
        calm: {
          default: hexToRgba(palette.lime["D20"], 0.1),
          hover: hexToRgba(palette.lime["D20"], 0.16),
          press: hexToRgba(palette.lime["D20"], 0.21),
        },
      },
      added06: {
        loud: {
          default: palette.mint["D4"],
          hover: palette.mint["D15"],
          press: palette.mint["D28"],
        },
        calm: {
          default: hexToRgba(palette.mint["D3"], 0.1),
          hover: hexToRgba(palette.mint["D3"], 0.16),
          press: hexToRgba(palette.mint["D3"], 0.21),
        },
      },
      added07: {
        loud: {
          default: palette.teal["D2"],
          hover: palette.teal["D12"],
          press: palette.teal["D26"],
        },
        calm: {
          default: hexToRgba(palette.teal["D3"], 0.1),
          hover: hexToRgba(palette.teal["D3"], 0.16),
          press: hexToRgba(palette.teal["D3"], 0.22),
        },
      },
      added08: {
        loud: {
          default: palette.cyan["BASE"],
          hover: palette.cyan["D12"],
          press: palette.cyan["D25"],
        },
        calm: {
          default: hexToRgba(palette.cyan["BASE"], 0.11),
          hover: hexToRgba(palette.cyan["BASE"], 0.16),
          press: hexToRgba(palette.cyan["BASE"], 0.21),
        },
      },
      added09: {
        loud: {
          default: palette.indigo["L6"],
          hover: palette.indigo["D6"],
          press: palette.indigo["D20"],
        },
        calm: {
          default: hexToRgba(palette.indigo["L5"], 0.11),
          hover: hexToRgba(palette.indigo["L5"], 0.16),
          press: hexToRgba(palette.indigo["L5"], 0.22),
        },
      },
      added10: {
        loud: {
          default: palette.purple["L5"],
          hover: palette.purple["D8"],
          press: palette.purple["D22"],
        },
        calm: {
          default: hexToRgba(palette.purple["L4"], 0.1),
          hover: hexToRgba(palette.purple["L4"], 0.15),
          press: hexToRgba(palette.purple["L4"], 0.2),
        },
      },
      added11: {
        loud: {
          default: palette.pink["BASE"],
          hover: palette.pink["D12"],
          press: palette.pink["D24"],
        },
        calm: {
          default: hexToRgba(palette.pink["BASE"], 0.09),
          hover: hexToRgba(palette.pink["BASE"], 0.14),
          press: hexToRgba(palette.pink["BASE"], 0.19),
        },
      },
    },
    border: {
      onSpaceIsland: palette.neutral["L85"],
      onPage: palette.neutral["L85"],
      onLayer1: palette.neutral["L90"],
      onLayer2: palette.neutral["L85"],
      onLayer2Depth: palette.neutral["L85"],
      onLayer3: palette.neutral["L80"],
      neutral: {
        calm: {
          medium: palette.black["B10"],
          strong: palette.black["B20"],
        },
      },
      brand: {
        calm: {
          medium: hexToRgba(palette.blue["BASE"], 0.16),
        },
      },
      accent: {
        calm: {
          medium: hexToRgba(palette.rose["BASE"], 0.15),
        },
      },
      positive: {
        calm: {
          medium: hexToRgba(palette.green["D13"], 0.17),
        },
      },
      warning: {
        calm: {
          medium: hexToRgba(palette.amber["BASE"], 0.22),
        },
      },
      negative: {
        calm: {
          medium: hexToRgba(palette.red["L2"], 0.15),
        },
      },
      info: {
        calm: {
          medium: hexToRgba(palette.blue["BASE"], 0.16),
        },
      },
      disabled: {
        calm: {
          medium: palette.black["B10"],
        },
      },
      added01: {
        calm: {
          medium: hexToRgba(palette.sunset["D5"], 0.16),
        },
      },
      added02: {
        calm: {
          medium: hexToRgba(palette.orange["D11"], 0.16),
        },
      },
      added03: {
        calm: {
          medium: hexToRgba(palette.yellow["BASE"], 0.24),
        },
      },
      added04: {
        calm: {
          medium: hexToRgba(palette.citron["BASE"], 0.23),
        },
      },
      added05: {
        calm: {
          medium: hexToRgba(palette.lime["D20"], 0.17),
        },
      },
      added06: {
        calm: {
          medium: hexToRgba(palette.mint["D3"], 0.17),
        },
      },
      added07: {
        calm: {
          medium: hexToRgba(palette.teal["D3"], 0.16),
        },
      },
      added08: {
        calm: {
          medium: hexToRgba(palette.cyan["BASE"], 0.16),
        },
      },
      added09: {
        calm: {
          medium: hexToRgba(palette.indigo["L5"], 0.16),
        },
      },
      added10: {
        calm: {
          medium: hexToRgba(palette.purple["L4"], 0.15),
        },
      },
      added11: {
        calm: {
          medium: hexToRgba(palette.pink["BASE"], 0.15),
        },
      },
    },
    text: {
      neutral: {
        strong: palette.black["B90"],
        medium: palette.black["B60"],
        weak: palette.black["B40"],
        onCalm: palette.black["B90"],
      },
      brand: {
        strong: palette.blue["D26"],
        medium: palette.blue["BASE"],
        weak: palette.blue["L31"],
        onLoud: palette.white["W100"],
        onCalm: palette.blue["BASE"],
      },
      accent: {
        strong: palette.rose["D26"],
        medium: palette.rose["BASE"],
        weak: palette.rose["L36"],
        onLoud: palette.white["W100"],
        onCalm: palette.rose["BASE"],
      },
      positive: {
        strong: palette.green["D36"],
        medium: palette.green["D13"],
        weak: palette.green["L22"],
        onLoud: palette.white["W100"],
        onCalm: palette.green["D13"],
      },
      warning: {
        strong: palette.amber["D43"],
        medium: palette.amber["D23"],
        weak: palette.amber["L15"],
        onLoud: palette.black["B100"],
        onCalm: palette.amber["D30"],
      },
      negative: {
        strong: palette.red["D25"],
        medium: palette.red["L2"],
        weak: palette.red["L35"],
        onLoud: palette.white["W100"],
        onCalm: palette.red["L2"],
      },
      info: {
        strong: palette.blue["D26"],
        medium: palette.blue["BASE"],
        weak: palette.blue["L31"],
        onLoud: palette.white["W100"],
        onCalm: palette.blue["BASE"],
      },
      inverse: {
        onLoud: palette.white["W100"],
      },
      disabled: {
        default: palette.black["B25"],
        onCalm: palette.black["B25"],
        brand: palette.blue["L62"],
        accent: palette.rose["L66"],
        positive: palette.green["L57"],
        warning: palette.amber["L49"],
        negative: palette.red["L65"],
        info: palette.blue["L62"],
        added01: palette.sunset["L63"],
        added02: palette.orange["L60"],
        added03: palette.yellow["L45"],
        added04: palette.citron["L49"],
        added05: palette.lime["L53"],
        added06: palette.mint["L60"],
        added07: palette.teal["L61"],
        added08: palette.cyan["L62"],
        added09: palette.indigo["L64"],
        added10: palette.purple["L65"],
        added11: palette.pink["L66"],
      },
      added01: {
        strong: palette.sunset["D30"],
        medium: palette.sunset["D5"],
        weak: palette.sunset["L31"],
        onLoud: palette.white["W100"],
        onCalm: palette.sunset["D5"],
      },
      added02: {
        strong: palette.orange["D34"],
        medium: palette.orange["D11"],
        weak: palette.orange["L25"],
        onLoud: palette.white["W100"],
        onCalm: palette.orange["D11"],
      },
      added03: {
        strong: palette.yellow["D45"],
        medium: palette.yellow["D25"],
        weak: palette.yellow["L9"],
        onLoud: palette.black["B88"],
        onCalm: palette.yellow["D32"],
      },
      added04: {
        strong: palette.citron["D42"],
        medium: palette.citron["D22"],
        weak: palette.citron["L15"],
        onLoud: palette.black["B90"],
        onCalm: palette.citron["D30"],
      },
      added05: {
        strong: palette.lime["D41"],
        medium: palette.lime["D20"],
        weak: palette.lime["L15"],
        onLoud: palette.black["B95"],
        onCalm: palette.lime["D20"],
      },
      added06: {
        strong: palette.mint["D29"],
        medium: palette.mint["D3"],
        weak: palette.mint["L28"],
        onLoud: palette.white["W100"],
        onCalm: palette.mint["D3"],
      },
      added07: {
        strong: palette.teal["D28"],
        medium: palette.teal["D3"],
        weak: palette.teal["L29"],
        onLoud: palette.white["W100"],
        onCalm: palette.teal["D3"],
      },
      added08: {
        strong: palette.cyan["D26"],
        medium: palette.cyan["BASE"],
        weak: palette.cyan["L30"],
        onLoud: palette.white["W100"],
        onCalm: palette.cyan["BASE"],
      },
      added09: {
        strong: palette.indigo["D21"],
        medium: palette.indigo["L5"],
        weak: palette.indigo["L35"],
        onLoud: palette.white["W100"],
        onCalm: palette.indigo["L5"],
      },
      added10: {
        strong: palette.purple["D23"],
        medium: palette.purple["L4"],
        weak: palette.purple["L36"],
        onLoud: palette.white["W100"],
        onCalm: palette.purple["L4"],
      },
      added11: {
        strong: palette.pink["D26"],
        medium: palette.pink["BASE"],
        weak: palette.pink["L36"],
        onLoud: palette.white["W100"],
        onCalm: palette.pink["BASE"],
      },
    },
    icon: {
      neutral: {
        strong: palette.black["B90"],
        medium: palette.black["B60"],
        weak: palette.black["B40"],
        onCalm: palette.black["B90"],
      },
      brand: {
        strong: palette.blue["D26"],
        medium: palette.blue["BASE"],
        weak: palette.blue["L31"],
        onLoud: palette.white["W100"],
        onCalm: palette.blue["BASE"],
      },
      accent: {
        strong: palette.rose["D26"],
        medium: palette.rose["BASE"],
        weak: palette.rose["L36"],
        onLoud: palette.white["W100"],
        onCalm: palette.rose["BASE"],
      },
      positive: {
        strong: palette.green["D36"],
        medium: palette.green["D13"],
        weak: palette.green["L22"],
        onLoud: palette.white["W100"],
        onCalm: palette.green["D13"],
      },
      warning: {
        strong: palette.amber["D43"],
        medium: palette.amber["D23"],
        weak: palette.amber["L15"],
        onLoud: palette.black["B100"],
        onCalm: palette.amber["D30"],
      },
      negative: {
        strong: palette.red["D25"],
        medium: palette.red["L2"],
        weak: palette.red["L35"],
        onLoud: palette.white["W100"],
        onCalm: palette.red["L2"],
      },
      info: {
        strong: palette.blue["D26"],
        medium: palette.blue["BASE"],
        weak: palette.blue["L31"],
        onLoud: palette.white["W100"],
        onCalm: palette.blue["BASE"],
      },
      inverse: {
        onLoud: palette.white["W100"],
      },
      disabled: {
        default: palette.black["B25"],
        onCalm: palette.black["B25"],
        brand: palette.blue["L62"],
        accent: palette.rose["L66"],
        positive: palette.green["L57"],
        warning: palette.amber["L49"],
        negative: palette.red["L65"],
        info: palette.blue["L62"],
        added01: palette.sunset["L63"],
        added02: palette.orange["L60"],
        added03: palette.yellow["L45"],
        added04: palette.citron["L49"],
        added05: palette.lime["L53"],
        added06: palette.mint["L60"],
        added07: palette.teal["L61"],
        added08: palette.cyan["L62"],
        added09: palette.indigo["L64"],
        added10: palette.purple["L65"],
        added11: palette.pink["L66"],
      },
      added01: {
        strong: palette.sunset["D30"],
        medium: palette.sunset["D5"],
        weak: palette.sunset["L31"],
        onLoud: palette.white["W100"],
        onCalm: palette.sunset["D5"],
      },
      added02: {
        strong: palette.orange["D34"],
        medium: palette.orange["D11"],
        weak: palette.orange["L25"],
        onLoud: palette.white["W100"],
        onCalm: palette.orange["D11"],
      },
      added03: {
        strong: palette.yellow["D45"],
        medium: palette.yellow["D25"],
        weak: palette.yellow["L9"],
        onLoud: palette.black["B88"],
        onCalm: palette.yellow["D32"],
      },
      added04: {
        strong: palette.citron["D42"],
        medium: palette.citron["D22"],
        weak: palette.citron["L15"],
        onLoud: palette.black["B90"],
        onCalm: palette.citron["D30"],
      },
      added05: {
        strong: palette.lime["D41"],
        medium: palette.lime["D20"],
        weak: palette.lime["L15"],
        onLoud: palette.black["B95"],
        onCalm: palette.lime["D20"],
      },
      added06: {
        strong: palette.mint["D29"],
        medium: palette.mint["D3"],
        weak: palette.mint["L28"],
        onLoud: palette.white["W100"],
        onCalm: palette.mint["D3"],
      },
      added07: {
        strong: palette.teal["D28"],
        medium: palette.teal["D3"],
        weak: palette.teal["L29"],
        onLoud: palette.white["W100"],
        onCalm: palette.teal["D3"],
      },
      added08: {
        strong: palette.cyan["D26"],
        medium: palette.cyan["BASE"],
        weak: palette.cyan["L30"],
        onLoud: palette.white["W100"],
        onCalm: palette.cyan["BASE"],
      },
      added09: {
        strong: palette.indigo["D21"],
        medium: palette.indigo["L5"],
        weak: palette.indigo["L35"],
        onLoud: palette.white["W100"],
        onCalm: palette.indigo["L5"],
      },
      added10: {
        strong: palette.purple["D23"],
        medium: palette.purple["L4"],
        weak: palette.purple["L36"],
        onLoud: palette.white["W100"],
        onCalm: palette.purple["L4"],
      },
      added11: {
        strong: palette.pink["D26"],
        medium: palette.pink["BASE"],
        weak: palette.pink["L36"],
        onLoud: palette.white["W100"],
        onCalm: palette.pink["BASE"],
      },
    },
    other: {
      none: palette.white["W0"],
    },
  },
  sizes: {
    0: pixels[0],
    50: pixels[100],
    100: pixels[100],
    125: pixels[125],
    150: pixels[150],
    200: pixels[200],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
    500: pixels[500],
  },
  spaces: {
    0: pixels[0],
    12: pixels[12],
    25: pixels[25],
    37: pixels[37],
    50: pixels[50],
    62: pixels[62],
    75: pixels[75],
    87: pixels[87],
    100: pixels[100],
    125: pixels[125],
    150: pixels[150],
    200: pixels[200],
    250: pixels[250],
    300: pixels[300],
    400: pixels[400],
    500: pixels[500],
  },
  radius: {
    0: pixels[0],
    50: pixels[50],
    62: pixels[62],
    75: pixels[75],
    100: pixels[100],
    150: pixels[150],
    200: pixels[200],
    300: pixels[300],
    400: pixels[400],
    round: pixels[12000],
  },
  strokes: {
    0: pixels[0],
    12: pixels[12],
    25: pixels[25],
  },
  typography: {
    fontFamily: {
      base: `"Inter Variable", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    },
    fontWeight: {
      default: globalTypography.fontWeight.default,
      medium: globalTypography.fontWeight.medium,
      strong: globalTypography.fontWeight.strong,
    },
    fontSize: {
      100: globalTypography.fontSize[100],
      137: globalTypography.fontSize[137],
      150: globalTypography.fontSize[150],
      162: globalTypography.fontSize[162],
      175: globalTypography.fontSize[175],
      187: globalTypography.fontSize[187],
      200: globalTypography.fontSize[200],
      250: globalTypography.fontSize[250],
      300: globalTypography.fontSize[300],
      400: globalTypography.fontSize[400],
      500: globalTypography.fontSize[500],
    },
    lineHeight: {
      150: globalTypography.lineHeight[150],
      200: globalTypography.lineHeight[200],
      225: globalTypography.lineHeight[225],
      250: globalTypography.lineHeight[250],
      300: globalTypography.lineHeight[300],
      400: globalTypography.lineHeight[400],
    },
  },
};

// ==========================================
// ГРУППА 2: Component-токены
// ==========================================

const getComponentTokens = (semantic: typeof semanticTokens) => ({
  badge: {
    base: {
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
  },
  button: {
    base: {
      primary: {
        brand: {
          bg: {
            color: {
              default: semantic.colors.bg.brand.loud.default,
              hover: semantic.colors.bg.brand.loud.hover,
              press: semantic.colors.bg.brand.loud.press,
              loading: semantic.colors.bg.brand.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.brand.onLoud,
              hover: semantic.colors.text.brand.onLoud,
              press: semantic.colors.text.brand.onLoud,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onLoud,
              hover: semantic.colors.icon.brand.onLoud,
              press: semantic.colors.icon.brand.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.positive.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.positive.onLoud,
              hover: semantic.colors.text.positive.onLoud,
              press: semantic.colors.text.positive.onLoud,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onLoud,
              hover: semantic.colors.icon.positive.onLoud,
              press: semantic.colors.icon.positive.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.warning.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.warning.onLoud,
              hover: semantic.colors.text.warning.onLoud,
              press: semantic.colors.text.warning.onLoud,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onLoud,
              hover: semantic.colors.icon.warning.onLoud,
              press: semantic.colors.icon.warning.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.negative.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.negative.onLoud,
              hover: semantic.colors.text.negative.onLoud,
              press: semantic.colors.text.negative.onLoud,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onLoud,
              hover: semantic.colors.icon.negative.onLoud,
              press: semantic.colors.icon.negative.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.inverse.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.inverse.onLoud,
              hover: semantic.colors.text.inverse.onLoud,
              press: semantic.colors.text.inverse.onLoud,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.inverse.onLoud,
              hover: semantic.colors.icon.inverse.onLoud,
              press: semantic.colors.icon.inverse.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.neutral.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.neutral.onCalm,
              hover: semantic.colors.text.neutral.onCalm,
              press: semantic.colors.text.neutral.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.brand.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.brand.onCalm,
              hover: semantic.colors.text.brand.onCalm,
              press: semantic.colors.text.brand.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
              hover: semantic.colors.icon.brand.onCalm,
              press: semantic.colors.icon.brand.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.positive.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.positive.onCalm,
              hover: semantic.colors.text.positive.onCalm,
              press: semantic.colors.text.positive.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
              hover: semantic.colors.icon.positive.onCalm,
              press: semantic.colors.icon.positive.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.warning.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.warning.onCalm,
              hover: semantic.colors.text.warning.onCalm,
              press: semantic.colors.text.warning.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
              hover: semantic.colors.icon.warning.onCalm,
              press: semantic.colors.icon.warning.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.negative.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.negative.onCalm,
              hover: semantic.colors.text.negative.onCalm,
              press: semantic.colors.text.negative.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.onCalm,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
              hover: semantic.colors.icon.negative.onCalm,
              press: semantic.colors.icon.negative.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.neutral.calm.medium,
              hover: semantic.colors.border.neutral.calm.medium,
              press: semantic.colors.border.neutral.calm.medium,
              loading: semantic.colors.border.neutral.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.neutral.onCalm,
              hover: semantic.colors.text.neutral.onCalm,
              press: semantic.colors.text.neutral.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.brand.calm.medium,
              hover: semantic.colors.border.brand.calm.medium,
              press: semantic.colors.border.brand.calm.medium,
              loading: semantic.colors.border.brand.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.brand.onCalm,
              hover: semantic.colors.text.brand.onCalm,
              press: semantic.colors.text.brand.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
              hover: semantic.colors.icon.brand.onCalm,
              press: semantic.colors.icon.brand.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.positive.calm.medium,
              hover: semantic.colors.border.positive.calm.medium,
              press: semantic.colors.border.positive.calm.medium,
              loading: semantic.colors.border.positive.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.positive.onCalm,
              hover: semantic.colors.text.positive.onCalm,
              press: semantic.colors.text.positive.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
              hover: semantic.colors.icon.positive.onCalm,
              press: semantic.colors.icon.positive.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.warning.calm.medium,
              hover: semantic.colors.border.warning.calm.medium,
              press: semantic.colors.border.warning.calm.medium,
              loading: semantic.colors.border.warning.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.warning.onCalm,
              hover: semantic.colors.text.warning.onCalm,
              press: semantic.colors.text.warning.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
              hover: semantic.colors.icon.warning.onCalm,
              press: semantic.colors.icon.warning.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.negative.calm.medium,
              hover: semantic.colors.border.negative.calm.medium,
              press: semantic.colors.border.negative.calm.medium,
              loading: semantic.colors.border.negative.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.negative.onCalm,
              hover: semantic.colors.text.negative.onCalm,
              press: semantic.colors.text.negative.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
              hover: semantic.colors.icon.negative.onCalm,
              press: semantic.colors.icon.negative.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.neutral.onCalm,
              hover: semantic.colors.text.neutral.onCalm,
              press: semantic.colors.text.neutral.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.brand.onCalm,
              hover: semantic.colors.text.brand.onCalm,
              press: semantic.colors.text.brand.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
              hover: semantic.colors.icon.brand.onCalm,
              press: semantic.colors.icon.brand.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.positive.onCalm,
              hover: semantic.colors.text.positive.onCalm,
              press: semantic.colors.text.positive.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
              hover: semantic.colors.icon.positive.onCalm,
              press: semantic.colors.icon.positive.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.warning.onCalm,
              hover: semantic.colors.text.warning.onCalm,
              press: semantic.colors.text.warning.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
              hover: semantic.colors.icon.warning.onCalm,
              press: semantic.colors.icon.warning.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.negative.onCalm,
              hover: semantic.colors.text.negative.onCalm,
              press: semantic.colors.text.negative.onCalm,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.text.disabled.default,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
              hover: semantic.colors.icon.negative.onCalm,
              press: semantic.colors.icon.negative.onCalm,
              loading: semantic.colors.other.none,
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
  },
  checkbox: {
    base: {
      primary: {
        brand: {
          check: {
            bg: {
              color: {
                default: semantic.colors.bg.neutral.calm.weak.default,
                hover: semantic.colors.bg.neutral.calm.weak.hover,
                press: semantic.colors.bg.neutral.calm.weak.press,
                disabled: semantic.colors.bg.disabled.calm.default,
                selected: {
                  default: semantic.colors.bg.brand.loud.default,
                  hover: semantic.colors.bg.brand.loud.hover,
                  press: semantic.colors.bg.brand.loud.press,
                  disabled: semantic.colors.bg.disabled.calm.default,
                },
              },
            },
            border: {
              color: {
                default: semantic.colors.border.neutral.calm.medium,
                hover: semantic.colors.border.neutral.calm.medium,
                press: semantic.colors.border.neutral.calm.medium,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.other.none,
                  hover: semantic.colors.other.none,
                  press: semantic.colors.other.none,
                  disabled: semantic.colors.other.none,
                },
              },
            },
            icon: {
              color: {
                default: semantic.colors.other.none,
                hover: semantic.colors.other.none,
                press: semantic.colors.other.none,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.icon.brand.onLoud,
                  hover: semantic.colors.icon.brand.onLoud,
                  press: semantic.colors.icon.brand.onLoud,
                  disabled: semantic.colors.icon.disabled.onCalm,
                },
              },
            },
          },
          label: {
            bg: {
              color: {
                default: semantic.colors.text.neutral.strong,
                hover: semantic.colors.text.neutral.strong,
                press: semantic.colors.text.neutral.strong,
                disabled: semantic.colors.text.disabled.default,
                selected: {
                  default: semantic.colors.text.neutral.strong,
                  hover: semantic.colors.text.neutral.strong,
                  press: semantic.colors.text.neutral.strong,
                  disabled: semantic.colors.text.disabled.default,
                },
              },
            },
          },
        },
        inverse: {
          check: {
            bg: {
              color: {
                default: semantic.colors.bg.neutral.calm.weak.default,
                hover: semantic.colors.bg.neutral.calm.weak.hover,
                press: semantic.colors.bg.neutral.calm.weak.press,
                disabled: semantic.colors.bg.disabled.calm.default,
                selected: {
                  default: semantic.colors.bg.inverse.loud.default,
                  hover: semantic.colors.bg.inverse.loud.hover,
                  press: semantic.colors.bg.inverse.loud.press,
                  disabled: semantic.colors.bg.disabled.calm.default,
                },
              },
            },
            border: {
              color: {
                default: semantic.colors.border.neutral.calm.medium,
                hover: semantic.colors.border.neutral.calm.medium,
                press: semantic.colors.border.neutral.calm.medium,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.other.none,
                  hover: semantic.colors.other.none,
                  press: semantic.colors.other.none,
                  disabled: semantic.colors.other.none,
                },
              },
            },
            icon: {
              color: {
                default: semantic.colors.other.none,
                hover: semantic.colors.other.none,
                press: semantic.colors.other.none,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.icon.inverse.onLoud,
                  hover: semantic.colors.icon.inverse.onLoud,
                  press: semantic.colors.icon.inverse.onLoud,
                  disabled: semantic.colors.icon.disabled.onCalm,
                },
              },
            },
          },
          label: {
            bg: {
              color: {
                default: semantic.colors.text.neutral.strong,
                hover: semantic.colors.text.neutral.strong,
                press: semantic.colors.text.neutral.strong,
                disabled: semantic.colors.text.disabled.default,
                selected: {
                  default: semantic.colors.text.neutral.strong,
                  hover: semantic.colors.text.neutral.strong,
                  press: semantic.colors.text.neutral.strong,
                  disabled: semantic.colors.text.disabled.default,
                },
              },
            },
          },
        },
      },
    },
    200: {
      gap: semantic.spaces[100],
      check: {
        iconSize: semantic.sizes[200],
        height: semantic.sizes[200],
        borderRadius: semantic.radius[50],
        borderWidth: semantic.strokes[12],
      },
    },
    250: {
      gap: semantic.spaces[100],
      check: {
        iconSize: semantic.sizes[200],
        height: semantic.sizes[250],
        borderRadius: semantic.radius[62],
        borderWidth: semantic.strokes[12],
      },
    },
  },
  iconButton: {
    base: {
      primary: {
        brand: {
          bg: {
            color: {
              default: semantic.colors.bg.brand.loud.default,
              hover: semantic.colors.bg.brand.loud.hover,
              press: semantic.colors.bg.brand.loud.press,
              loading: semantic.colors.bg.brand.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onLoud,
              hover: semantic.colors.icon.brand.onLoud,
              press: semantic.colors.icon.brand.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.positive.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onLoud,
              hover: semantic.colors.icon.positive.onLoud,
              press: semantic.colors.icon.positive.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.warning.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onLoud,
              hover: semantic.colors.icon.warning.onLoud,
              press: semantic.colors.icon.warning.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.negative.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onLoud,
              hover: semantic.colors.icon.negative.onLoud,
              press: semantic.colors.icon.negative.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.inverse.loud.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.inverse.onLoud,
              hover: semantic.colors.icon.inverse.onLoud,
              press: semantic.colors.icon.inverse.onLoud,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.neutral.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.brand.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
              hover: semantic.colors.icon.brand.onCalm,
              press: semantic.colors.icon.brand.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.positive.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
              hover: semantic.colors.icon.positive.onCalm,
              press: semantic.colors.icon.positive.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.warning.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
              hover: semantic.colors.icon.warning.onCalm,
              press: semantic.colors.icon.warning.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.bg.negative.calm.default,
              disabled: semantic.colors.bg.disabled.calm.default,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
              hover: semantic.colors.icon.negative.onCalm,
              press: semantic.colors.icon.negative.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.neutral.calm.medium,
              hover: semantic.colors.border.neutral.calm.medium,
              press: semantic.colors.border.neutral.calm.medium,
              loading: semantic.colors.border.neutral.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.brand.calm.medium,
              hover: semantic.colors.border.brand.calm.medium,
              press: semantic.colors.border.brand.calm.medium,
              loading: semantic.colors.border.brand.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
              hover: semantic.colors.icon.brand.onCalm,
              press: semantic.colors.icon.brand.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.positive.calm.medium,
              hover: semantic.colors.border.positive.calm.medium,
              press: semantic.colors.border.positive.calm.medium,
              loading: semantic.colors.border.positive.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
              hover: semantic.colors.icon.positive.onCalm,
              press: semantic.colors.icon.positive.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.warning.calm.medium,
              hover: semantic.colors.border.warning.calm.medium,
              press: semantic.colors.border.warning.calm.medium,
              loading: semantic.colors.border.warning.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
              hover: semantic.colors.icon.warning.onCalm,
              press: semantic.colors.icon.warning.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.border.negative.calm.medium,
              hover: semantic.colors.border.negative.calm.medium,
              press: semantic.colors.border.negative.calm.medium,
              loading: semantic.colors.border.negative.calm.medium,
              disabled: semantic.colors.border.neutral.calm.medium,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
              hover: semantic.colors.icon.negative.onCalm,
              press: semantic.colors.icon.negative.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.brand.onCalm,
              hover: semantic.colors.icon.brand.onCalm,
              press: semantic.colors.icon.brand.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.positive.onCalm,
              hover: semantic.colors.icon.positive.onCalm,
              press: semantic.colors.icon.positive.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.warning.onCalm,
              hover: semantic.colors.icon.warning.onCalm,
              press: semantic.colors.icon.warning.onCalm,
              loading: semantic.colors.other.none,
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
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              loading: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.negative.onCalm,
              hover: semantic.colors.icon.negative.onCalm,
              press: semantic.colors.icon.negative.onCalm,
              loading: semantic.colors.other.none,
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
    },
    toggle: {
      ghost: {
        brand: {
          bg: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.bg.neutral.calm.default,
              press: semantic.colors.bg.neutral.calm.hover,
              disabled: semantic.colors.other.none,
              selected: {
                default: semantic.colors.bg.brand.calm.default,
                hover: semantic.colors.bg.brand.calm.hover,
                press: semantic.colors.bg.brand.calm.press,
                disabled: semantic.colors.bg.disabled.calm.default,
              },
            },
          },
          border: {
            color: {
              default: semantic.colors.other.none,
              hover: semantic.colors.other.none,
              press: semantic.colors.other.none,
              disabled: semantic.colors.other.none,
              selected: {
                default: semantic.colors.other.none,
                hover: semantic.colors.other.none,
                press: semantic.colors.other.none,
                disabled: semantic.colors.other.none,
              },
            },
          },
          icon: {
            color: {
              default: semantic.colors.icon.neutral.onCalm,
              hover: semantic.colors.icon.neutral.onCalm,
              press: semantic.colors.icon.neutral.onCalm,
              disabled: semantic.colors.icon.disabled.default,
              selected: {
                default: semantic.colors.icon.brand.onCalm,
                hover: semantic.colors.icon.brand.onCalm,
                press: semantic.colors.icon.brand.onCalm,
                disabled: semantic.colors.icon.disabled.onCalm,
              },
            },
          },
        },
      },
    },
    300: {
      iconSize: semantic.sizes[200],
      minSize: semantic.sizes[300],
      paddingX: semantic.spaces[37],
      paddingY: semantic.spaces[37],
      borderRadius: semantic.radius[75],
      borderWidth: semantic.strokes[12],
    },
    400: {
      iconSize: semantic.sizes[200],
      minSize: semantic.sizes[400],
      paddingX: semantic.spaces[87],
      paddingY: semantic.spaces[87],
      borderRadius: semantic.radius[100],
      borderWidth: semantic.strokes[12],
      label: {
        paddingX: semantic.spaces[50],
      },
    },
  },
  pimple: {
    base: {
      primary: {
        brand: {
          bg: {
            color: {
              default: semantic.colors.bg.brand.loud.default,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.brand.onLoud,
            },
          },
        },
        accent: {
          bg: {
            color: {
              default: semantic.colors.bg.accent.loud.default,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.accent.onLoud,
            },
          },
        },
        inverse: {
          bg: {
            color: {
              default: semantic.colors.bg.inverse.loud.default,
            },
          },
          label: {
            color: {
              default: semantic.colors.text.inverse.onLoud,
            },
          },
        },
      },
    },
    200: {
      height: semantic.sizes[200],
      paddingX: semantic.spaces[25],
      paddingY: semantic.spaces[0],
      borderRadius: semantic.radius.round,
      label: {
        paddingX: semantic.spaces[25],
      },
    },
    250: {
      height: semantic.sizes[250],
      paddingX: semantic.spaces[50],
      paddingY: semantic.spaces[25],
      borderRadius: semantic.radius.round,
      label: {
        paddingX: semantic.spaces[25],
      },
    },
    300: {
      height: semantic.sizes[300],
      paddingX: semantic.spaces[50],
      paddingY: semantic.spaces[50],
      borderRadius: semantic.radius.round,
      label: {
        paddingX: semantic.spaces[25],
      },
    },
  },
  radioButton: {
    base: {
      primary: {
        brand: {
          radio: {
            bg: {
              color: {
                default: semantic.colors.bg.neutral.calm.weak.default,
                hover: semantic.colors.bg.neutral.calm.weak.hover,
                press: semantic.colors.bg.neutral.calm.weak.press,
                disabled: semantic.colors.bg.disabled.calm.default,
                selected: {
                  default: semantic.colors.bg.brand.loud.default,
                  hover: semantic.colors.bg.brand.loud.hover,
                  press: semantic.colors.bg.brand.loud.press,
                  disabled: semantic.colors.bg.disabled.calm.default,
                },
              },
            },
            border: {
              color: {
                default: semantic.colors.border.neutral.calm.medium,
                hover: semantic.colors.border.neutral.calm.medium,
                press: semantic.colors.border.neutral.calm.medium,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.other.none,
                  hover: semantic.colors.other.none,
                  press: semantic.colors.other.none,
                  disabled: semantic.colors.other.none,
                },
              },
            },
            icon: {
              color: {
                default: semantic.colors.other.none,
                hover: semantic.colors.other.none,
                press: semantic.colors.other.none,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.icon.brand.onLoud,
                  hover: semantic.colors.icon.brand.onLoud,
                  press: semantic.colors.icon.brand.onLoud,
                  disabled: semantic.colors.icon.disabled.onCalm,
                },
              },
            },
          },
          label: {
            bg: {
              color: {
                default: semantic.colors.text.neutral.strong,
                hover: semantic.colors.text.neutral.strong,
                press: semantic.colors.text.neutral.strong,
                disabled: semantic.colors.text.disabled.default,
                selected: {
                  default: semantic.colors.text.neutral.strong,
                  hover: semantic.colors.text.neutral.strong,
                  press: semantic.colors.text.neutral.strong,
                  disabled: semantic.colors.text.disabled.default,
                },
              },
            },
          },
        },
        inverse: {
          check: {
            bg: {
              color: {
                default: semantic.colors.bg.neutral.calm.weak.default,
                hover: semantic.colors.bg.neutral.calm.weak.hover,
                press: semantic.colors.bg.neutral.calm.weak.press,
                disabled: semantic.colors.bg.disabled.calm.default,
                selected: {
                  default: semantic.colors.bg.inverse.loud.default,
                  hover: semantic.colors.bg.inverse.loud.hover,
                  press: semantic.colors.bg.inverse.loud.press,
                  disabled: semantic.colors.bg.disabled.calm.default,
                },
              },
            },
            border: {
              color: {
                default: semantic.colors.border.neutral.calm.medium,
                hover: semantic.colors.border.neutral.calm.medium,
                press: semantic.colors.border.neutral.calm.medium,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.other.none,
                  hover: semantic.colors.other.none,
                  press: semantic.colors.other.none,
                  disabled: semantic.colors.other.none,
                },
              },
            },
            icon: {
              color: {
                default: semantic.colors.other.none,
                hover: semantic.colors.other.none,
                press: semantic.colors.other.none,
                disabled: semantic.colors.other.none,
                selected: {
                  default: semantic.colors.icon.inverse.onLoud,
                  hover: semantic.colors.icon.inverse.onLoud,
                  press: semantic.colors.icon.inverse.onLoud,
                  disabled: semantic.colors.icon.disabled.onCalm,
                },
              },
            },
          },
          label: {
            bg: {
              color: {
                default: semantic.colors.text.neutral.strong,
                hover: semantic.colors.text.neutral.strong,
                press: semantic.colors.text.neutral.strong,
                disabled: semantic.colors.text.disabled.default,
                selected: {
                  default: semantic.colors.text.neutral.strong,
                  hover: semantic.colors.text.neutral.strong,
                  press: semantic.colors.text.neutral.strong,
                  disabled: semantic.colors.text.disabled.default,
                },
              },
            },
          },
        },
      },
    },
    200: {
      gap: semantic.spaces[100],
      radio: {
        iconSize: semantic.sizes[200],
        height: semantic.sizes[200],
        borderRadius: semantic.radius.round,
        borderWidth: semantic.strokes[12],
      },
    },
    250: {
      gap: semantic.spaces[100],
      radio: {
        iconSize: semantic.sizes[200],
        height: semantic.sizes[250],
        borderRadius: semantic.radius.round,
        borderWidth: semantic.strokes[12],
      },
    },
  },
  switcher: {
    base: {
      primary: {
        brand: {
          switch: {
            track: {
              bg: {
                color: {
                  default: semantic.colors.bg.neutral.calm.weak.default,
                  hover: semantic.colors.bg.neutral.calm.weak.hover,
                  press: semantic.colors.bg.neutral.calm.weak.press,
                  disabled: semantic.colors.bg.disabled.calm.default,
                  selected: {
                    default: semantic.colors.bg.brand.loud.default,
                    hover: semantic.colors.bg.brand.loud.hover,
                    press: semantic.colors.bg.brand.loud.press,
                    disabled: semantic.colors.bg.disabled.calm.default,
                  },
                },
              },
              border: {
                color: {
                  default: semantic.colors.border.neutral.calm.strong,
                  hover: semantic.colors.border.neutral.calm.strong,
                  press: semantic.colors.border.neutral.calm.strong,
                  disabled: semantic.colors.other.none,
                  selected: {
                    default: semantic.colors.other.none,
                    hover: semantic.colors.other.none,
                    press: semantic.colors.other.none,
                    disabled: semantic.colors.other.none,
                  },
                },
              },
              knob: {
                bg: {
                  color: {
                    default: semantic.colors.icon.brand.onLoud,
                    hover: semantic.colors.icon.brand.onLoud,
                    press: semantic.colors.icon.brand.onLoud,
                    disabled: semantic.colors.icon.brand.onLoud,
                    selected: {
                      default: semantic.colors.icon.brand.onLoud,
                      hover: semantic.colors.icon.brand.onLoud,
                      press: semantic.colors.icon.brand.onLoud,
                      disabled: semantic.colors.icon.brand.onLoud,
                    },
                  },
                },
                border: {
                  color: {
                    default: semantic.colors.border.neutral.calm.strong,
                    hover: semantic.colors.border.neutral.calm.strong,
                    press: semantic.colors.border.neutral.calm.strong,
                    disabled: semantic.colors.other.none,
                    selected: {
                      default: semantic.colors.other.none,
                      hover: semantic.colors.other.none,
                      press: semantic.colors.other.none,
                      disabled: semantic.colors.other.none,
                    },
                  },
                },
              },
            },
          },
          label: {
            bg: {
              color: {
                default: semantic.colors.text.neutral.strong,
                hover: semantic.colors.text.neutral.strong,
                press: semantic.colors.text.neutral.strong,
                disabled: semantic.colors.text.disabled.default,
                selected: {
                  default: semantic.colors.text.neutral.strong,
                  hover: semantic.colors.text.neutral.strong,
                  press: semantic.colors.text.neutral.strong,
                  disabled: semantic.colors.text.disabled.default,
                },
              },
            },
          },
        },
      },
    },
    200: {
      gap: semantic.spaces[100],
      switch: {
        track: {
          width: semantic.sizes[400],
          height: semantic.sizes[200],
          paddingX: semantic.spaces[50],
          paddingY: semantic.spaces[0],
          borderRadius: semantic.radius.round,
          borderWidth: semantic.strokes[12],
          knob: {
            width: semantic.sizes[150],
            height: semantic.sizes[100],
            borderRadius: semantic.radius.round,
            borderWidth: semantic.strokes[12],
          },
        },
      },
    },
    250: {
      gap: semantic.spaces[100],
      switch: {
        track: {
          width: semantic.sizes[500],
          height: semantic.sizes[250],
          paddingX: semantic.spaces[62],
          paddingY: semantic.spaces[0],
          borderRadius: semantic.radius.round,
          borderWidth: semantic.strokes[12],
          knob: {
            width: semantic.sizes[200],
            height: semantic.sizes[125],
            borderRadius: semantic.radius.round,
            borderWidth: semantic.strokes[12],
          },
        },
      },
    },
  },
});

// ==========================================
// ГРУППА 3: Экспорт темы
// ==========================================

const lightSemantic = semanticTokens;
export const lightTheme = {
  semantic: lightSemantic,
  components: getComponentTokens(lightSemantic),
};
const darkSemantic = {
  ...semanticTokens,
  colors: {
    ...semanticTokens.colors,
    bg: {
      space: palette.neutral["D90"],
      spaceIsland: palette.neutral["D70"],
      page: palette.neutral["D80"],
      layer1: palette.neutral["D70"],
      layer2: palette.neutral["D60"],
      layer2Depth: palette.neutral["D76"],
      layer3: palette.neutral["D50"],
      neutral: {
        calm: {
          default: palette.white["W8"],
          hover: palette.white["W12"],
          press: palette.white["W16"],
          weak: {
            default: palette.white["W4"],
            hover: palette.white["W8"],
            press: palette.white["W12"],
          },
          strong: {
            default: palette.white["W12"],
            hover: palette.white["W16"],
            press: palette.white["W20"],
          },
        },
      },
      brand: {
        loud: {
          default: palette.mutedBlue["BASE"],
          hover: palette.mutedBlue["D12"],
          press: palette.mutedBlue["D25"],
        },
        calm: {
          default: hexToRgba(palette.paleBlue["BASE"], 0.14),
          hover: hexToRgba(palette.paleBlue["BASE"], 0.21),
          press: hexToRgba(palette.paleBlue["BASE"], 0.28),
        },
      },
      accent: {
        loud: {
          default: palette.mutedRose["BASE"],
          hover: palette.mutedRose["D11"],
          press: palette.mutedRose["D24"],
        },
        calm: {
          default: hexToRgba(palette.paleRose["BASE"], 0.15),
          hover: hexToRgba(palette.paleRose["BASE"], 0.23),
          press: hexToRgba(palette.paleRose["BASE"], 0.3),
        },
      },
      positive: {
        loud: {
          default: palette.mutedGreen["D12"],
          hover: palette.mutedGreen["D22"],
          press: palette.mutedGreen["D34"],
        },
        calm: {
          default: hexToRgba(palette.paleGreen["BASE"], 0.13),
          hover: hexToRgba(palette.paleGreen["BASE"], 0.2),
          press: hexToRgba(palette.paleGreen["BASE"], 0.26),
        },
      },
      warning: {
        loud: {
          default: palette.mutedAmber["BASE"],
          hover: palette.mutedAmber["D10"],
          press: palette.mutedAmber["D20"],
        },
        calm: {
          default: hexToRgba(palette.paleAmber["BASE"], 0.11),
          hover: hexToRgba(palette.paleAmber["BASE"], 0.17),
          press: hexToRgba(palette.paleAmber["BASE"], 0.23),
        },
      },
      negative: {
        loud: {
          default: palette.mutedRed["L2"],
          hover: palette.mutedRed["D10"],
          press: palette.mutedRed["D23"],
        },
        calm: {
          default: hexToRgba(palette.paleRed["BASE"], 0.15),
          hover: hexToRgba(palette.paleRed["BASE"], 0.23),
          press: hexToRgba(palette.paleRed["BASE"], 0.3),
        },
      },
      info: {
        loud: {
          default: palette.mutedBlue["BASE"],
          hover: palette.mutedBlue["D12"],
          press: palette.mutedBlue["D25"],
        },
        calm: {
          default: hexToRgba(palette.paleBlue["BASE"], 0.14),
          hover: hexToRgba(palette.paleBlue["BASE"], 0.21),
          press: hexToRgba(palette.paleBlue["BASE"], 0.28),
        },
      },
      inverse: {
        loud: {
          default: palette.neutral["L90"],
          hover: palette.neutral["L75"],
          press: palette.neutral["L60"],
        },
      },
      disabled: {
        calm: {
          default: palette.white["W10"],
        },
      },
      added01: {
        loud: {
          default: palette.mutedSunset["D5"],
          hover: palette.mutedSunset["D16"],
          press: palette.mutedSunset["D28"],
        },
        calm: {
          default: hexToRgba(palette.paleSunset["BASE"], 0.14),
          hover: hexToRgba(palette.paleSunset["BASE"], 0.21),
          press: hexToRgba(palette.paleSunset["BASE"], 0.28),
        },
      },
      added02: {
        loud: {
          default: palette.mutedOrange["D10"],
          hover: palette.mutedOrange["D20"],
          press: palette.mutedOrange["D32"],
        },
        calm: {
          default: hexToRgba(palette.paleOrange["BASE"], 0.13),
          hover: hexToRgba(palette.paleOrange["BASE"], 0.2),
          press: hexToRgba(palette.paleOrange["BASE"], 0.26),
        },
      },
      added03: {
        loud: {
          default: palette.mutedYellow["BASE"],
          hover: palette.mutedYellow["D10"],
          press: palette.mutedYellow["D20"],
        },
        calm: {
          default: hexToRgba(palette.paleYellow["BASE"], 0.11),
          hover: hexToRgba(palette.paleYellow["BASE"], 0.17),
          press: hexToRgba(palette.paleYellow["BASE"], 0.22),
        },
      },
      added04: {
        loud: {
          default: palette.mutedCitron["D4"],
          hover: palette.mutedCitron["D12"],
          press: palette.mutedCitron["D24"],
        },
        calm: {
          default: hexToRgba(palette.paleCitron["BASE"], 0.11),
          hover: hexToRgba(palette.paleCitron["BASE"], 0.17),
          press: hexToRgba(palette.paleCitron["BASE"], 0.22),
        },
      },
      added05: {
        loud: {
          default: palette.mutedLime["L8"],
          hover: palette.mutedLime["D4"],
          press: palette.mutedLime["D16"],
        },
        calm: {
          default: hexToRgba(palette.paleLime["BASE"], 0.12),
          hover: hexToRgba(palette.paleLime["BASE"], 0.18),
          press: hexToRgba(palette.paleLime["BASE"], 0.24),
        },
      },
      added06: {
        loud: {
          default: palette.mutedMint["D4"],
          hover: palette.mutedMint["D16"],
          press: palette.mutedMint["D28"],
        },
        calm: {
          default: hexToRgba(palette.paleMint["BASE"], 0.13),
          hover: hexToRgba(palette.paleMint["BASE"], 0.2),
          press: hexToRgba(palette.paleMint["BASE"], 0.27),
        },
      },
      added07: {
        loud: {
          default: palette.mutedTeal["D4"],
          hover: palette.mutedTeal["D16"],
          press: palette.mutedTeal["D28"],
        },
        calm: {
          default: hexToRgba(palette.paleTeal["BASE"], 0.13),
          hover: hexToRgba(palette.paleTeal["BASE"], 0.2),
          press: hexToRgba(palette.paleTeal["BASE"], 0.27),
        },
      },
      added08: {
        loud: {
          default: palette.mutedCyan["BASE"],
          hover: palette.mutedCyan["D12"],
          press: palette.mutedCyan["D25"],
        },
        calm: {
          default: hexToRgba(palette.paleCyan["BASE"], 0.14),
          hover: hexToRgba(palette.paleCyan["BASE"], 0.21),
          press: hexToRgba(palette.paleCyan["BASE"], 0.28),
        },
      },
      added09: {
        loud: {
          default: palette.mutedIndigo["L5"],
          hover: palette.mutedIndigo["D6"],
          press: palette.mutedIndigo["D18"],
        },
        calm: {
          default: hexToRgba(palette.paleIndigo["BASE"], 0.15),
          hover: hexToRgba(palette.paleIndigo["BASE"], 0.22),
          press: hexToRgba(palette.paleIndigo["BASE"], 0.29),
        },
      },
      added10: {
        loud: {
          default: palette.mutedPurple["L4"],
          hover: palette.mutedPurple["D8"],
          press: palette.mutedPurple["D20"],
        },
        calm: {
          default: hexToRgba(palette.palePurple["BASE"], 0.15),
          hover: hexToRgba(palette.palePurple["BASE"], 0.22),
          press: hexToRgba(palette.palePurple["BASE"], 0.29),
        },
      },
      added11: {
        loud: {
          default: palette.mutedPink["L2"],
          hover: palette.mutedPink["D11"],
          press: palette.mutedPink["D24"],
        },
        calm: {
          default: hexToRgba(palette.palePink["BASE"], 0.15),
          hover: hexToRgba(palette.palePink["BASE"], 0.23),
          press: hexToRgba(palette.palePink["BASE"], 0.3),
        },
      },
    },
    border: {
      onSpaceIsland: palette.neutral["D60"],
      onPage: palette.neutral["D66"],
      onLayer1: palette.neutral["D60"],
      onLayer2: palette.neutral["D50"],
      onLayer2Depth: palette.neutral["D52"],
      onLayer3: palette.neutral["D40"],
      neutral: {
        calm: {
          medium: palette.white["W10"],
          strong: palette.white["W20"],
        },
      },
      brand: {
        calm: {
          medium: hexToRgba(palette.paleBlue["BASE"], 0.19),
        },
      },
      accent: {
        calm: {
          medium: hexToRgba(palette.paleRose["BASE"], 0.2),
        },
      },
      positive: {
        calm: {
          medium: hexToRgba(palette.paleGreen["BASE"], 0.17),
        },
      },
      warning: {
        calm: {
          medium: hexToRgba(palette.paleAmber["BASE"], 0.15),
        },
      },
      negative: {
        calm: {
          medium: hexToRgba(palette.paleRed["BASE"], 0.2),
        },
      },
      info: {
        calm: {
          medium: hexToRgba(palette.paleBlue["BASE"], 0.19),
        },
      },
      disabled: {
        calm: {
          medium: palette.white["W10"],
        },
      },
      added01: {
        calm: {
          medium: hexToRgba(palette.paleSunset["BASE"], 0.19),
        },
      },
      added02: {
        calm: {
          medium: hexToRgba(palette.paleOrange["BASE"], 0.18),
        },
      },
      added03: {
        calm: {
          medium: hexToRgba(palette.paleYellow["BASE"], 0.15),
        },
      },
      added04: {
        calm: {
          medium: hexToRgba(palette.paleCitron["BASE"], 0.15),
        },
      },
      added05: {
        calm: {
          medium: hexToRgba(palette.paleLime["BASE"], 0.16),
        },
      },
      added06: {
        calm: {
          medium: hexToRgba(palette.paleMint["BASE"], 0.18),
        },
      },
      added07: {
        calm: {
          medium: hexToRgba(palette.paleTeal["BASE"], 0.18),
        },
      },
      added08: {
        calm: {
          medium: hexToRgba(palette.paleCyan["BASE"], 0.18),
        },
      },
      added09: {
        calm: {
          medium: hexToRgba(palette.paleIndigo["BASE"], 0.2),
        },
      },
      added10: {
        calm: {
          medium: hexToRgba(palette.palePurple["BASE"], 0.2),
        },
      },
      added11: {
        calm: {
          medium: hexToRgba(palette.palePink["BASE"], 0.2),
        },
      },
    },
    text: {
      neutral: {
        strong: palette.white["W90"],
        medium: palette.white["W60"],
        weak: palette.white["W40"],
        onCalm: palette.white["W90"],
      },
      brand: {
        strong: palette.paleBlue["L41"],
        medium: palette.paleBlue["L4"],
        weak: palette.paleBlue["D26"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleBlue["L12"],
      },
      accent: {
        strong: palette.paleRose["L45"],
        medium: palette.paleRose["L11"],
        weak: palette.paleRose["D23"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleRose["L20"],
      },
      positive: {
        strong: palette.paleGreen["L31"],
        medium: palette.paleGreen["D5"],
        weak: palette.paleGreen["D32"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleGreen["L2"],
      },
      warning: {
        strong: palette.paleAmber["L16"],
        medium: palette.paleAmber["D14"],
        weak: palette.paleAmber["D38"],
        onLoud: palette.black["B100"],
        onCalm: palette.paleAmber["D8"],
      },
      negative: {
        strong: palette.paleRed["L44"],
        medium: palette.paleRed["L9"],
        weak: palette.paleRed["D24"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleRed["L18"],
      },
      info: {
        strong: palette.paleBlue["L41"],
        medium: palette.paleBlue["L4"],
        weak: palette.paleBlue["D26"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleBlue["L12"],
      },
      inverse: {
        onLoud: palette.black["B90"],
      },
      disabled: {
        default: palette.white["W20"],
        onCalm: palette.white["W20"],
        brand: palette.paleBlue["D51"],
        accent: palette.paleRose["D48"],
        positive: palette.paleGreen["D54"],
        warning: palette.paleAmber["D58"],
        negative: palette.paleRed["D49"],
        info: palette.paleBlue["D51"],
        added01: palette.paleSunset["D51"],
        added02: palette.paleOrange["D53"],
        added03: palette.paleYellow["D60"],
        added04: palette.paleCitron["D59"],
        added05: palette.paleLime["D56"],
        added06: palette.paleMint["D52"],
        added07: palette.paleTeal["D51"],
        added08: palette.paleCyan["D51"],
        added09: palette.paleIndigo["D49"],
        added10: palette.palePurple["D48"],
        added11: palette.palePink["D48"],
      },
      added01: {
        strong: palette.paleSunset["L40"],
        medium: palette.paleSunset["L3"],
        weak: palette.paleSunset["D27"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleSunset["L12"],
      },
      added02: {
        strong: palette.paleOrange["L36"],
        medium: palette.paleOrange["D2"],
        weak: palette.paleOrange["D30"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleOrange["L5"],
      },
      added03: {
        strong: palette.paleYellow["L10"],
        medium: palette.paleYellow["D16"],
        weak: palette.paleYellow["D39"],
        onLoud: palette.black["B90"],
        onCalm: palette.paleYellow["D11"],
      },
      added04: {
        strong: palette.paleCitron["L13"],
        medium: palette.paleCitron["D15"],
        weak: palette.paleCitron["D39"],
        onLoud: palette.black["B95"],
        onCalm: palette.paleCitron["D10"],
      },
      added05: {
        strong: palette.paleLime["L25"],
        medium: palette.paleLime["D9"],
        weak: palette.paleLime["D35"],
        onLoud: palette.black["B100"],
        onCalm: palette.paleLime["D4"],
      },
      added06: {
        strong: palette.paleMint["L37"],
        medium: palette.paleMint["BASE"],
        weak: palette.paleMint["D28"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleMint["L10"],
      },
      added07: {
        strong: palette.paleTeal["L38"],
        medium: palette.paleTeal["BASE"],
        weak: palette.paleTeal["D28"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleTeal["L10"],
      },
      added08: {
        strong: palette.paleCyan["L39"],
        medium: palette.paleCyan["L2"],
        weak: palette.paleCyan["D27"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleCyan["L12"],
      },
      added09: {
        strong: palette.paleIndigo["L43"],
        medium: palette.paleIndigo["L9"],
        weak: palette.paleIndigo["D24"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleIndigo["L18"],
      },
      added10: {
        strong: palette.palePurple["L45"],
        medium: palette.palePurple["L11"],
        weak: palette.palePurple["D23"],
        onLoud: palette.white["W100"],
        onCalm: palette.palePurple["L18"],
      },
      added11: {
        strong: palette.palePink["L46"],
        medium: palette.palePink["L11"],
        weak: palette.palePink["D23"],
        onLoud: palette.white["W100"],
        onCalm: palette.palePink["L20"],
      },
    },
    icon: {
      neutral: {
        strong: palette.white["W90"],
        medium: palette.white["W60"],
        weak: palette.white["W40"],
        onCalm: palette.white["W90"],
      },
      brand: {
        strong: palette.paleBlue["L41"],
        medium: palette.paleBlue["L4"],
        weak: palette.paleBlue["D26"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleBlue["L12"],
      },
      accent: {
        strong: palette.paleRose["L45"],
        medium: palette.paleRose["L11"],
        weak: palette.paleRose["D23"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleRose["L20"],
      },
      positive: {
        strong: palette.paleGreen["L31"],
        medium: palette.paleGreen["D5"],
        weak: palette.paleGreen["D32"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleGreen["L2"],
      },
      warning: {
        strong: palette.paleAmber["L16"],
        medium: palette.paleAmber["D14"],
        weak: palette.paleAmber["D38"],
        onLoud: palette.black["B100"],
        onCalm: palette.paleAmber["D8"],
      },
      negative: {
        strong: palette.paleRed["L44"],
        medium: palette.paleRed["L9"],
        weak: palette.paleRed["D24"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleRed["L18"],
      },
      info: {
        strong: palette.paleBlue["L41"],
        medium: palette.paleBlue["L4"],
        weak: palette.paleBlue["D26"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleBlue["L12"],
      },
      inverse: {
        onLoud: palette.black["B90"],
      },
      disabled: {
        default: palette.white["W20"],
        onCalm: palette.white["W20"],
        brand: palette.paleBlue["D51"],
        accent: palette.paleRose["D48"],
        positive: palette.paleGreen["D54"],
        warning: palette.paleAmber["D58"],
        negative: palette.paleRed["D49"],
        info: palette.paleBlue["D51"],
        added01: palette.paleSunset["D51"],
        added02: palette.paleOrange["D53"],
        added03: palette.paleYellow["D60"],
        added04: palette.paleCitron["D59"],
        added05: palette.paleLime["D56"],
        added06: palette.paleMint["D52"],
        added07: palette.paleTeal["D51"],
        added08: palette.paleCyan["D51"],
        added09: palette.paleIndigo["D49"],
        added10: palette.palePurple["D48"],
        added11: palette.palePink["D48"],
      },
      added01: {
        strong: palette.paleSunset["L40"],
        medium: palette.paleSunset["L3"],
        weak: palette.paleSunset["D27"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleSunset["L12"],
      },
      added02: {
        strong: palette.paleOrange["L36"],
        medium: palette.paleOrange["D2"],
        weak: palette.paleOrange["D30"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleOrange["L5"],
      },
      added03: {
        strong: palette.paleYellow["L10"],
        medium: palette.paleYellow["D16"],
        weak: palette.paleYellow["D39"],
        onLoud: palette.black["B90"],
        onCalm: palette.paleYellow["D11"],
      },
      added04: {
        strong: palette.paleCitron["L13"],
        medium: palette.paleCitron["D15"],
        weak: palette.paleCitron["D39"],
        onLoud: palette.black["B95"],
        onCalm: palette.paleCitron["D10"],
      },
      added05: {
        strong: palette.paleLime["L25"],
        medium: palette.paleLime["D9"],
        weak: palette.paleLime["D35"],
        onLoud: palette.black["B100"],
        onCalm: palette.paleLime["D4"],
      },
      added06: {
        strong: palette.paleMint["L37"],
        medium: palette.paleMint["BASE"],
        weak: palette.paleMint["D28"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleMint["L10"],
      },
      added07: {
        strong: palette.paleTeal["L38"],
        medium: palette.paleTeal["BASE"],
        weak: palette.paleTeal["D28"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleTeal["L10"],
      },
      added08: {
        strong: palette.paleCyan["L39"],
        medium: palette.paleCyan["L2"],
        weak: palette.paleCyan["D27"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleCyan["L12"],
      },
      added09: {
        strong: palette.paleIndigo["L43"],
        medium: palette.paleIndigo["L9"],
        weak: palette.paleIndigo["D24"],
        onLoud: palette.white["W100"],
        onCalm: palette.paleIndigo["L18"],
      },
      added10: {
        strong: palette.palePurple["L45"],
        medium: palette.palePurple["L11"],
        weak: palette.palePurple["D23"],
        onLoud: palette.white["W100"],
        onCalm: palette.palePurple["L18"],
      },
      added11: {
        strong: palette.palePink["L46"],
        medium: palette.palePink["L11"],
        weak: palette.palePink["D23"],
        onLoud: palette.white["W100"],
        onCalm: palette.palePink["L20"],
      },
    },
    other: {
      none: palette.black["B0"],
    },
  },
};
export const darkTheme = {
  ...lightTheme,
  semantic: darkSemantic,
  components: getComponentTokens(darkSemantic),
};
