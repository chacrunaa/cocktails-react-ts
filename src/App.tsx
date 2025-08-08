import React from 'react';
import AppRouter from './app-router';
import { ErrorBoundary } from './error-boundary';
import './app.css';

export default function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}
