import { useEffect } from 'react';
import { useCocktails, type Status } from './store';
import type { CocktailCode } from '../../shared/constants';

export function useCocktailsByCode(code: CocktailCode) {
  const { data, status, error, load } = useCocktails();

  useEffect(() => {
    void load(code);
  }, [code, load]);

  const st: Status = status[code] ?? 'idle';

  return {
    drinks: data[code],
    status: st,
    error: error[code] ?? null,
  };
}
