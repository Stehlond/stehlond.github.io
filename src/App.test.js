import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Kontakt/i });
  expect(heading).toBeInTheDocument();
});
