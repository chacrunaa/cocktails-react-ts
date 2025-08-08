import { fetchCocktails } from '../api';
import { expect, it } from 'vitest';

it('Запрос успешен', async () => {
  const res = await fetchCocktails('mojito');
  expect(res.drinks).toBeTruthy();
});
