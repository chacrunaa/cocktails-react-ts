import React from 'react';
import { useParams } from 'react-router-dom';
import { CocktailCode, isCocktailCode } from '../shared/constants';
import { useCocktailsByCode } from '../modules/cocktails/hooks';
import { Cocktail } from '../modules/cocktails/types';
import Container from '../components/Container/Container';
import SideMenu from '../components/SideMenu/SideMenu';
import Card from '../components/Card/Card';
import NotFoundPage from './NotFoundPage';

function renderIngredients(drink: Cocktail) {
  return (
    <ul>
      {Array.from({ length: 15 }, (_, i) => i + 1)
        .map((i) => {
          const ingredient = drink[`strIngredient${i}`] ?? null;
          const measure = drink[`strMeasure${i}`] ?? null;

          return { ingredient, measure };
        })
        .filter((x) => x.ingredient)
        .map((x, idx) => (
          <li key={idx}>
            {[x.measure, x.ingredient].filter(Boolean).join(' ')}
          </li>
        ))}
    </ul>
  );
}

export default function CocktailsPage() {
  const params = useParams<{ code?: string }>();
  const codeParam = (params.code ?? '').toLowerCase() as CocktailCode;
  const { drinks, status, error } = useCocktailsByCode(codeParam);

  if (!isCocktailCode(codeParam)) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      <div className="grid">
        <SideMenu />
        <section>
          {status === 'loading' && <p>Загрузка…</p>}
          {status === 'error' && <p role="alert">Ошибка загрузки: {error}</p>}
          {status === 'success' && drinks && drinks.length === 0 && (
            <p>Ничего не найдено.</p>
          )}

          {drinks && drinks.length > 0 && (
            <div className="list">
              {drinks.map((d) => {
                const parts = [
                  d.strCategory,
                  d.strAlcoholic,
                  d.strGlass,
                ].filter(Boolean);
                const subtitle = parts.join(' • ');
                return (
                  <Card
                    key={d.idDrink}
                    title={d.strDrink}
                    subtitle={subtitle || ''}
                    imageSrc={d.strDrinkThumb}
                    imageAlt={d.strDrink}
                  >
                    {d.strInstructions && (
                      <p>
                        <b>Instructions:</b> {d.strInstructions}
                      </p>
                    )}
                    <div>
                      <strong>Ingredients:</strong>
                      {renderIngredients(d)}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </Container>
  );
}
