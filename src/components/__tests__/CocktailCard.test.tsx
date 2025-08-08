import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card/Card';

test('renders title and children', () => {
  render(
    <Card title="Test" subtitle="Cat • A • G" imageSrc={null}>
      <div>
        <strong>Ingredients:</strong>
        <ul>
          <li>50ml Rum</li>
        </ul>
      </div>
    </Card>,
  );

  expect(screen.getByRole('article', { name: /Test/i })).toBeInTheDocument();
  expect(screen.getByText(/50ml Rum/i)).toBeInTheDocument();
});
