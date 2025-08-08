import { useCocktails } from '../store';
import { expect, it } from 'vitest';

it('dedupes and caches by code', async () => {
  const calls: string[] = [];
  const prev = global.fetch as any;
  (global as any).fetch = async (url: string) => {
    calls.push(url);
    return new Response(JSON.stringify({ drinks: [] }), { status: 200 });
  };

  const { load } = useCocktails.getState();
  await load('a1');
  await load('a1');
  expect(calls.length).toBe(1);
  global.fetch = prev;
});
