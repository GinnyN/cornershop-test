import React from 'react';
import { render } from '@testing-library/react';
import FilterForm from './filterForm';

test('Renders Filter Form', () => {
  const { getByTestId } = render(<FilterForm />);
  const linkElement = getByTestId(/FilterFormChange/i);
  expect(linkElement).toBeInTheDocument();
});