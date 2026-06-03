export const motion = {
  duration: {
    50: "0.05s",
    100: "0.1s", // 100-150мс — идеальная скорость для быстрого клика кнопок
    150: "0.15s",
    200: "0.2s",
    250: "0.25s", // 250мс — для выпадающих меню и модалок
    300: "0.3s",
  },
  easing: {
    linear: "linear",
    easeInOut: "ease-in-out",
    easeOut: "ease-out",
    easeIn: "ease-in",
  },
} as const;
