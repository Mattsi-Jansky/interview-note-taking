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

test('saves answer to localstorage', () => {
  const wrapper = shallow(<QuestionAndAnswer question="foo bar" />)
  const textarea = wrapper.find('textarea')
  textarea.simulate('change', { target: { value: 'bar foo' } })
  const result = localStorage.getItem('default-foo bar')
  expect(result).toBe('bar foo')
})

test('uses question as key for localstorage when reading', () => {
  localStorage.setItem('default-testy mctestface', 'bar foo')
  render(<QuestionAndAnswer question="testy mctestface" />)
  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('uses question as key for localstorage when writing', () => {
  const wrapper = shallow(<QuestionAndAnswer question="testy mctestface" />)
  const textarea = wrapper.find('textarea')
  textarea.simulate('change', { target: { value: 'bar foo' } })
  const result = localStorage.getItem('default-testy mctestface')
  expect(result).toBe('bar foo')
})