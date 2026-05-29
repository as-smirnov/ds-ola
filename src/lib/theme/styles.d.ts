import "styled-components";
// 1. Импортируем сам объект вашей темы
import { lightTheme } from './theme';
// 2. Просим TypeScript автоматически изучить структуру этого объекта и создать тип
type CustomTheme = typeof lightTheme;

declare module "styled-components" {
    // 3. Наследуем DefaultTheme от созданного типа
    export interface DefaultTheme extends CustomTheme {}
}