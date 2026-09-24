import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page sections', () => {
  window.scrollTo = () => {};
  render(<App />);
  expect(screen.getByRole('heading', { name: /Oblasti praxe/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /O mně/i })).toBeInTheDocument();
});
