import { API_URL, CocktailCode } from '../../shared/constants';
import type { CocktailsResponse } from './types';

export async function fetchCocktails(
  code: CocktailCode,
  signal?: AbortSignal,
): Promise<CocktailsResponse> {
  const res = await fetch(API_URL(code), { signal });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}
