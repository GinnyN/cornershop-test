import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Total:/);
  expect(linkElement).toBeInTheDocument();
});
