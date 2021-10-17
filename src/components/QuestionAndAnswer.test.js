import { render, screen } from '@testing-library/react'
import QuestionAndAnswer from './QuestionAndAnswer'

test('renders question', () => {
  render(<QuestionAndAnswer question="foo bar" />)
  const questionTextValue = screen.getByText(/foo bar/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('loads answer from localstorage', () => {
  localStorage.setItem('default-foo bar', 'bar foo')
  // https://github.com/skidding/react-testing-examples/blob/2ddde93f77cecf8c0ab63870b4173a11fe1416ca/tests/jest-rtl/localstorage/test.js
  render(<QuestionAndAnswer question="foo bar" />)
  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})
