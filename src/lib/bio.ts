// Turns the bio text the user typed into the string they copy.
// The symbol board is appended at the end. Nothing is truncated:
// cutting a string can split an emoji.

import { measureText } from "@/lib/measure";
import { convertText, type TextStyleId } from "@/lib/text-styles";

export interface BioDraft {
  text: string;
  over: boolean;
}

export function composeBio(
  input: string,
  styleId: TextStyleId | "plain",
  symbols: string[],
  max: number,
): BioDraft {
  const styled = styleId === "plain" ? input : convertText(input, styleId);
  const text = styled + symbols.join("");
  return { text, over: measureText(text).codePoints > max };
}
