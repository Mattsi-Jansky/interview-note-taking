import { render, screen } from '@testing-library/react'
import QuestionAndAnswer from './QuestionAndAnswer'
import { shallow } from 'enzyme'

beforeEach(() => {
  localStorage.clear()
})

test('renders question', () => {
  render(<QuestionAndAnswer question="foo bar" />)
  const questionTextValue = screen.getByText(/foo bar/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('loads answer from localstorage', () => {
  localStorage.setItem('default-foo bar', 'bar foo')
  render(<QuestionAndAnswer question="foo bar" />)
  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('given nothing in localstorage, textarea is blank', () => {
  const wrapper = shallow(<QuestionAndAnswer question="foo bar" />)
  const textarea = wrapper.find('textarea')
  expect(textarea.props().defaultValue).toBe("")
})
