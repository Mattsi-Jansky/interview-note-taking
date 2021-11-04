import { render, screen } from '@testing-library/react'
import QuestionAndAnswer from '.'
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
  localStorage.setItem('default-category-foo bar', 'bar foo')

  render(<QuestionAndAnswer
    candidateName="default"
    category="category"
    question="foo bar" />)

  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('given nothing in localstorage, textarea is blank', () => {
  const wrapper = shallow(<QuestionAndAnswer
    candidateName="default"
    category="category"
    question="foo bar" />)

  const textarea = wrapper.find('textarea')
  expect(textarea.props().value).toBe("")
})

test('saves answer to localstorage', () => {
  const wrapper = shallow(<QuestionAndAnswer
    candidateName="default"
    category="category"
    question="foo bar" />)
  const textarea = wrapper.find('textarea')

  textarea.simulate('change', { target: { value: 'bar foo' } })

  const result = localStorage.getItem('default-category-foo bar')
  expect(result).toBe('bar foo')
})

test('uses question as key for localstorage when reading', () => {
  localStorage.setItem('default-category-testy mctestface', 'bar foo')

  render(<QuestionAndAnswer
    candidateName="default"
    category="category"
    question="testy mctestface" />)

  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('uses question as key for localstorage when writing', () => {
  const wrapper = shallow(<QuestionAndAnswer
    candidateName="default"
    category="category"
    question="testy mctestface" />)

  const textarea = wrapper.find('textarea')
  textarea.simulate('change', { target: { value: 'bar foo' } })

  const result = localStorage.getItem('default-category-testy mctestface')
  expect(result).toBe('bar foo')
})

test('uses category as key for localstorage when reading', () => {
  localStorage.setItem('default-testy mctestface-foo bar', 'bar foo')

  render(<QuestionAndAnswer 
    candidateName="default"
    category="testy mctestface"
    question="foo bar" />)

  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('uses category as key for localstorage when writing', () => {
  const wrapper = shallow(<QuestionAndAnswer 
    candidateName="default"
    category="testy mctestface"
    question="foo bar" />)

  const textarea = wrapper.find('textarea')
  textarea.simulate('change', { target: { value: 'bar foo' } })
  
  const result = localStorage.getItem('default-testy mctestface-foo bar')
  expect(result).toBe('bar foo')
})

test('uses candidate name as key for localstorage when reading', () => {
  localStorage.setItem('testy mctestface-category-foo bar', 'bar foo')

  render(<QuestionAndAnswer 
    candidateName="testy mctestface" 
    category="category" 
    question="foo bar" />)

  const questionTextValue = screen.getByText(/bar foo/i)
  expect(questionTextValue).toBeInTheDocument()
})

test('uses candidate name as key for localstorage when writing', () => {
  const wrapper = shallow(<QuestionAndAnswer 
    candidateName="testy mctestface"
    category="category"
    question="foo bar" />)

  const textarea = wrapper.find('textarea')
  textarea.simulate('change', { target: { value: 'bar foo' } })
  
  const result = localStorage.getItem('testy mctestface-category-foo bar')
  expect(result).toBe('bar foo')
})
