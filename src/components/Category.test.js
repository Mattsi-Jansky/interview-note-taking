import { render, screen } from '@testing-library/react'
import Category from './Category'

test('renders category name', () => {
  render(<Category name="foo bar" />)
  const categoryName = screen.getByText(/foo bar/i)
  expect(categoryName).toBeInTheDocument()
})
