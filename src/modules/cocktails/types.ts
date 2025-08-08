export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string | null;
  strCategory: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strInstructions: string | null;
  [k: `strIngredient${number}`]: string | null;
  [k: `strMeasure${number}`]: string | null;
};

export type CocktailsResponse = { drinks: Cocktail[] | null };
