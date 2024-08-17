import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Frontend/src/app/ui/Header';

test('renders the homepage', () => {
  render(<Header />);
  expect(screen.getByText('Crypto Custodian')).toBeInTheDocument();
});

// describe('Always True Test', () => {
//   it('should always return true', () => {
//     expect(true).toBe(true);
//   });
// });

