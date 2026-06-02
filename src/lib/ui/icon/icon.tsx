import React from "react";
import { icons } from "./icons-set";

export type IconGridSize = "16.Base" | "16.Small";

// 👑 МАГИЯ АВТОКОМПЛИТА: TypeScript сам прочитает все ключи из твоей папки base
// и при вводе name="" автоматически подскажет тебе: "loader" | "mixed" | "check" | "circle"
export type IconName = keyof typeof icons[16]["base"];

export interface IIconProps extends Omit<React.SVGAttributes<SVGElement>, "name"> {
  name: IconName;       // Строгое имя иконки из нашего словаря
  size?: IconGridSize;  // Наш семантический размер ("16.Base" или "16.Small")
}

export const Icon: React.FC<IIconProps> = ({ 
  name, 
  size = "16.Base", 
  ...props 
}) => {
  
  /**
   * 🛠️ НАШ СИСТЕМНЫЕ РАЗБОРЩИК ПУТИ:
   * Метод split('.') режет строчку "16.Base" на части: ["16", "Base"]
   */
  const [gridSize, typeName] = size.split(".");
  const subFolder = typeName.toLowerCase() as "base" | "small";

  // Динамически и безопасно забираем путь из нашего словаря точь-в-точь по твоей архитектуре!
  // Код зайдет по адресу: icons["16"]["base"]["mixed"]
  const currentPath = (icons as any)[gridSize]?.[subFolder]?.[name];

  // Подушка безопасности: если иконки нет в словаре, возвращаем пустоту, чтобы проект не упал
  if (!currentPath) return null;

  return (
    <svg
      viewBox="0 0 16 16" /* Холст у нас стабильно 16х16 */
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      {/* fill="currentColor" заставит вектор намертво слушаться ховеров кнопки! */}
      <path d={currentPath} fill="currentColor" />
    </svg>
  );
};
