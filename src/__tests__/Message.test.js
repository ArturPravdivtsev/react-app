import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

test('renders author for Message correctly', () => {
  render(<Message id="1" author="Test" text="Text" />);
  const author = screen.getByText(/Test/i);
  expect(author).toBeInTheDocument();
});

test('renders text for Message correctly', () => {
    render(<Message id="1" author="Author" text="Text" />);
    const text = screen.getByText(/Text/i);
    expect(text).toBeInTheDocument();
});