import React from "react";
import { icons } from "./icons-set";

export type IconGridSize = "12.Base" | "16.Base" | "16.Small";
export type IconName = keyof typeof icons["16"]["base"] | keyof typeof icons["12"]["base"];

export interface IIconProps extends Omit<React.SVGAttributes<SVGElement>, "name"> {
  name: IconName;
  size?: IconGridSize;
}

export const Icon: React.FC<IIconProps> = ({ name, size = "16.Base", ...props }) => {
  const [gridSize, typeName] = size.split(".");
  const subFolder = typeName.toLowerCase() as "base" | "small";
  
  const currentPath = (icons as any)[gridSize]?.[subFolder]?.[name];

  // 🎯 Наш дизайн-контролер: если иконки нет в конкретной сетке
  if (!currentPath) {
    // Включаем предупреждение только в режиме разработки, чтобы не спамить в продакшене
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[DS-OLA]: Иконка "${name}" отсутствует в сетке "${size}". ` +
        `Пожалуйста, сверьтесь с Figma или попросите дизайнеров добавить глиф в icons-set.ts.`
      );
    }
    
    // Вместо незаметного null возвращаем пустой невидимый SVG-квадрат.
    // Разработчик увидит, что отступ под иконку есть, но она пустая — это идеальный маркер бага!
    return (
      <svg 
        viewBox={`0 0 ${gridSize} ${gridSize}`} 
        width="100%" 
        height="100%" 
        style={{ opacity: 0 }} 
        {...props} 
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      fill="none"
      xmlns="http://w3.org"
      width="100%"
      height="100%"
      {...props}
    >
      <path d={currentPath} fill="currentColor" />
    </svg>
  );
};
