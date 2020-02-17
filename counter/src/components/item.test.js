import React from 'react';
import { render } from '@testing-library/react';
import Item from './item';

test('Renders Item', () => {
  const { getByText } = render(<Item title="test" counter="2" />);
  const linkElement = getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});