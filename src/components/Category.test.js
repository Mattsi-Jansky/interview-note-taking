import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Answer from './Answer'
import Category from './Category'

test('renders category name', () => {
  render(<Category name="foo bar" />)

  const categoryName = screen.getByText(/foo bar/i)
  expect(categoryName).toBeInTheDocument()
})

test('renders a child', () => {
  const wrapper = shallow(<Category name="foo bar">
    <div id="test" />
  </Category>)

  const divs = wrapper.find('div')
  expect(divs.length).toBe(2)
})

test('renders many children', () => {
  const wrapper = shallow(<Category name="foo bar">
    <div id="test" />
    <div id="test2" />
  </Category>)

  const divs = wrapper.find('div')
  expect(divs.length).toBe(3)
})

test('renders general-purpose answer', () => {
  const wrapper = shallow(<Category 
    candidateName="barfoo"
    name="foo bar">
  </Category>)

  const answer =  wrapper.find(Answer)
  expect(answer.props().storageKey).toBe("barfoo-foo bar")
})