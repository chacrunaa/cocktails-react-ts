import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  http.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    ({ request }) => {
      const url = new URL(request.url);
      const s = url.searchParams.get('s');

      if (s === 'mojito') {
        return HttpResponse.json({
          drinks: [
            {
              idDrink: '1',
              strDrink: 'Mojito',
              strDrinkThumb: null,
              strCategory: 'Cocktail',
              strAlcoholic: 'Alcoholic',
              strGlass: 'Highball',
              strInstructions: 'Mix',
              strIngredient1: 'Rum',
              strMeasure1: '50ml',
            },
          ],
        });
      }

      if (s === 'a1') {
        return HttpResponse.json({ drinks: [] });
      }

      return HttpResponse.json({ drinks: null });
    },
  ),
);
