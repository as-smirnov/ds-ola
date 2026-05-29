/**
 * Преобразует HEX-цвет в RGBA-строку с заданной непрозрачностью.
 * @param hex Строка цвета в формате #FFFFFF или #FFF
 * @param alpha Коэффициент непрозрачности от 0 до 1 (например, 0.15 для 15%)
 */
export const hexToRgba = (hex: string, alpha: number): string => {
	// 1. Очищаем строку от решетки
	let cleanHex = hex.replace("#", "");

	// 2. Если HEX короткий (например, "FFF"), превращаем его в длинный "FFFFFF"
	if (cleanHex.length === 3) {
		cleanHex = cleanHex
			.split("")
			.map((char) => char + char)
			.join("");
	}

	// 3. Извлекаем sub-строки для R, G, B и переводим из 16-ричной системы в 10-ричную
	const r = parseInt(cleanHex.substring(0, 2), 16);
	const g = parseInt(cleanHex.substring(2, 4), 16);
	const b = parseInt(cleanHex.substring(4, 6), 16);

	// 4. Возвращаем готовую валидную CSS-строку
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
