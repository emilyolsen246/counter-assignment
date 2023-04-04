import { render, screen } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countermessage = screen.getByText(/Counter/i);
  expect(countermessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const value = screen.getByText(0);
  expect(value).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText('+');
  click(increment);
  const one = screen.getByText('1');
  expect(one).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText('-');
  click(decrement);
  const negativeone = screen.getByText('-1');
  expect(negativeone).toBeInTheDocument();
});
