import React from 'react';
import { render } from '@testing-library/react';
import New from './new';

test('Renders New', () => {
  const { getByTestId } = render(<New />);
  const linkElement = getByTestId(/newButton/i);
  expect(linkElement).toBeInTheDocument();
});