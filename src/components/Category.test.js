import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
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
  console.log(wrapper.debug())
  const divs = wrapper.find('div')
  expect(divs.length).toBe(3)
})