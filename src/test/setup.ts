import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './server';
import { cleanup } from '@testing-library/react';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
