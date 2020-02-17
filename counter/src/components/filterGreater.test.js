import React from 'react';
import { render } from '@testing-library/react';
import FilterGreater from './filterGreater';

test('Renders Filter by Greater than', () => {
  const { getByTestId } = render(<FilterGreater />);
  const linkElement = getByTestId(/inputNumber/i);
  expect(linkElement).toBeInTheDocument();
});