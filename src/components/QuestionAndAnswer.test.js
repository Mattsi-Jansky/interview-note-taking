import { render, screen } from '@testing-library/react'
import QuestionAndAnswer from './QuestionAndAnswer'

test('renders question', () => {
  render(<QuestionAndAnswer question="foo bar" />)
  const questionTextValue = screen.getByText(/foo bar/i)
  expect(questionTextValue).toBeInTheDocument()
})
