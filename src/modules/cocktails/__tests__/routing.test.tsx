import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import { expect, it } from 'vitest';

it('Редирект к первому элементу кодов', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  const link = await screen.findByRole('link', { name: /Margarita/i });
  expect(link).toHaveAttribute('aria-current', 'page');
});

it('Рендер 404 страницы', async () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>,
  );

  expect(
    await screen.findByRole('heading', { name: /Страница не найдена/i }),
  ).toBeInTheDocument();
});
