import React from 'react';
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
  expect(await screen.findByText(/Загрузка страницы/)).toBeInTheDocument();
});

it('Рендер 404 страницы', async () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>,
  );
  expect(await screen.findByText(/404/)).toBeInTheDocument();
});
