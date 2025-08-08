import React from 'react';
import { Link } from 'react-router-dom';
import { CODES } from '../shared/constants';
import Container from '../components/Container/Container';

export default function NotFoundPage() {
  return (
    <Container>
      <h2>Страница не найдена</h2>
      <p>
        Перейдите на <Link to={`/${CODES[0]}`}>главную</Link>
      </p>
    </Container>
  );
}
