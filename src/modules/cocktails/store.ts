import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Cocktail } from './types';
import type { CocktailCode } from '../../shared/constants';
import { fetchCocktails } from './api';

export type Status = 'idle' | 'loading' | 'success' | 'error';

type State = {
  data: Partial<Record<CocktailCode, Cocktail[]>>;
  status: Partial<Record<CocktailCode, Status>>;
  error: Partial<Record<CocktailCode, string | null>>;
  controllers: Partial<Record<CocktailCode, AbortController>>;
  load: (code: CocktailCode) => Promise<void>;
};

export const useCocktails = create<State>()(
  devtools((set, get) => ({
    data: {},
    status: {},
    error: {},
    controllers: {},
    async load(code) {
      const { data, status } = get();
      if (data[code]) return;
      if (status[code] === 'loading') return;

      const controller = new AbortController();
      set((s) => ({
        status: { ...s.status, [code]: 'loading' },
        error: { ...s.error, [code]: null },
        controllers: { ...s.controllers, [code]: controller },
      }));

      try {
        const res = await fetchCocktails(code, controller.signal);
        set((s) => ({
          data: { ...s.data, [code]: res.drinks ?? [] },
          status: { ...s.status, [code]: 'success' },
        }));
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'Unknown error';
        set((s) => ({
          status: { ...s.status, [code]: 'error' },
          error: { ...s.error, [code]: message },
        }));
      } finally {
        set((s: any) => {
          const { [code]: rest } = s.controllers;
          return { controllers: rest };
        });
      }
    },
  })),
);
