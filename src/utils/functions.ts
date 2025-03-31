/**
 * Truncates a given text to a specified length and appends a suffix if the text exceeds the length.
 *
 * @param {string} text - The input text to be truncated.
 * @param {number} [length=100] - The maximum length of the truncated text. Defaults to 100.
 * @param {string} [suffix="..."] - The suffix to append to the truncated text. Defaults to "...".
 * @returns {string} - The truncated text with the suffix if applicable, or the original text if it is shorter than the specified length.
 */

export function txtSlicer(
  text: string,
  length: number = 100,
  suffix: string = "...",
): string {
  if (text.length >= length) {
    return text.slice(0, length) + suffix;
  }
  return text;
};