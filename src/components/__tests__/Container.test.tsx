import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container/Container';

test('renders children', () => {
  const { container } = render(
    <Container>
      <div>child</div>
    </Container>,
  );
  expect(container.textContent).toContain('child');
});
