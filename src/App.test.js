import App from './App'
import { shallow } from 'enzyme'
import Category from './components/Category'

const testCategoriesWithNoCategories = [ ]

const testCategoriesWithOneCategory = [ { name:"Enzyme" } ]

const testCategoriesWithMultipleCategories = [
  { name:"Enzyme" },
  { name:"Jest" },
  { name:"Eslint" }
]

test('includes category', () => {
  const wrapper = shallow(<App categories={testCategoriesWithOneCategory} />)
  expect(wrapper.find(Category).length).toBe(1)
})

test('render no categories if no categories are passed', () => {
  const wrapper = shallow(<App categories={testCategoriesWithNoCategories}/>)
  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(0)
})

test('get configuration from injected data for one category', () => {
  const wrapper = shallow(<App categories={testCategoriesWithOneCategory}/>)
  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(1)
  expect(categories.props().name).toEqual("Enzyme")
})

test('get configuration from injected data for multiple categories', () => {
  const wrapper = shallow(<App categories={testCategoriesWithMultipleCategories}/>)
  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(3)
  expect(categories.get(0).props.name).toEqual("Enzyme")
  expect(categories.get(1).props.name).toEqual("Jest")
  expect(categories.get(2).props.name).toEqual("Eslint")
})
