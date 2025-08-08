export const CODES = ['margarita', 'mojito', 'a1', 'kir'] as const;
export type CocktailCode = (typeof CODES)[number];

export const API_URL = (code: CocktailCode) =>
  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`;

// Узнаём, что строка — валидный код
export function isCocktailCode(v: string): v is CocktailCode {
  return (CODES as readonly string[]).includes(v);
}
