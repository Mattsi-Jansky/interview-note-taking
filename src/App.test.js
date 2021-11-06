import App from './App'
import { shallow } from 'enzyme'
import Category from './components/Category'
import QuestionAndAnswer from './components/QuestionAndAnswer'
import CandidateSelector from './components/CandidateSelector'

const testCategoriesWithNoCategories = []

const testCategoriesWithOneCategory = [{ categoryName:"Enzyme", questions: [] }]

const testCategoriesWithMultipleCategories = [
  { categoryName:"Enzyme", questions: [] },
  { categoryName:"Jest", questions: [] },
  { categoryName:"Eslint", questions: [] }
]

const testCategoryWithOneQuestion = [{ 
  categoryName:"Enzyme",
  questions: [
    { "value": "What is the average speed of an unladen swallow?" },
  ]
}]

const testCategoryWithManyQuestions = [{ 
  categoryName:"Enzyme",
  questions: [
    { "value": "What is the average speed of an unladen swallow?" },
    { "value":"What is your favourite color?" },
    { "value":"Do you feel lucky?" }
  ]
}]

test('includes category', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoriesWithOneCategory} />)

  expect(wrapper.find(Category).length).toBe(1)
})

test('render no categories if no categories are passed', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoriesWithNoCategories}/>)

  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(0)
})

test('get configuration from injected data for one category', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoriesWithOneCategory}/>)

  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(1)
  expect(categories.props().name).toEqual("Enzyme")
})

test('get configuration from injected data for multiple categories', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoriesWithMultipleCategories}/>)

  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(3)
  expect(categories.get(0).props.name).toEqual("Enzyme")
  expect(categories.get(1).props.name).toEqual("Jest")
  expect(categories.get(2).props.name).toEqual("Eslint")
})

test('Pass candidateName to Category', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoriesWithOneCategory}/>)

  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(1)
  expect(categories.props().candidateName).toEqual("Dave")
})

test('Create a question component', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoryWithOneQuestion}/>)

  var questionAndAnswers = wrapper.find(QuestionAndAnswer)
  expect(questionAndAnswers.length).toEqual(1)
  expect(questionAndAnswers.props().question).toBe("What is the average speed of an unladen swallow?")
})

test('Create question components', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoryWithManyQuestions}/>)

  var questionAndAnswers = wrapper.find(QuestionAndAnswer)
  expect(questionAndAnswers.length).toEqual(3)
  expect(questionAndAnswers.get(0).props.question).toBe("What is the average speed of an unladen swallow?")
  expect(questionAndAnswers.get(1).props.question).toBe("What is your favourite color?")
  expect(questionAndAnswers.get(2).props.question).toBe("Do you feel lucky?")
})

test('Pass callback to CandidateSelector that sets App state', () => {
  const wrapper = shallow(<App 
    candidateName="Dave"
    categories={testCategoryWithOneQuestion}/>)
  const candidateSelector = wrapper.find(CandidateSelector)
  const callback = candidateSelector.props().updateSelectedOption

  callback('my little test')

  expect(wrapper.state('candidateName')).toBe('my little test')
})

test('Do not display any categories if no candidate selected', () => {
  const wrapper = shallow(<App 
    categories={testCategoriesWithMultipleCategories}/>)

  var categories = wrapper.find(Category)
  expect(categories.length).toEqual(0)
})
