/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders message', () => {
  const message = 'Error!';

  const component = render(
    <ErrorMessage message={message} />,
  );

  expect(component.container).toHaveTextContent('Error!');
});

test('renders non-string message', () => {
  const message = 404;

  const component = render(
    <ErrorMessage message={message} />,
  );

  expect(component.container).toHaveTextContent('404');
});
