import React from 'react';

type Props = { children: React.ReactNode; fallback?: React.ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Boundary caught:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div role="alert" style={{ padding: 16 }}>
            <h2>Что-то пошло не так</h2>
            <p>Нужно обновить страницу</p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
