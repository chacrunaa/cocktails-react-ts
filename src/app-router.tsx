import React from 'react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CODES } from './shared/constants';

const CocktailsPage = lazy(() => import('./pages/CocktailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function AppRouter() {
  return (
    <Suspense fallback={<p>Загрузка страницы</p>}>
      <Routes>
        <Route path="/" element={<Navigate to={`/${CODES[0]}`} replace />} />
        <Route path="/:code" element={<CocktailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
