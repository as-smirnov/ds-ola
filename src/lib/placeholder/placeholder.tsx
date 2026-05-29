import { FC } from "react";
import styled from "styled-components";

export interface PlaceholderProps {
	/**
	 * Текстовое поля для ввода пользователем
	 */
	text?: string;
}

const StyledPlaceholder = styled.div<PlaceholderProps>`
	color: ${(props) => props.theme.semantic.colors.text.neutral.strong};
`;

/**
 * Тестовый компонент заглушка
 */
export const Placeholder: FC<PlaceholderProps> = ({ text = "Привет" }) => {
	return <StyledPlaceholder>{text}</StyledPlaceholder>;
};
