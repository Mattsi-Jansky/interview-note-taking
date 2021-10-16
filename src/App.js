import React from 'react'
import './App.css'
import Category from './components/Category'
import QuestionAndAnswer from './components/QuestionAndAnswer'

class App extends React.Component {
  render() {
    const categories = this.props.categories
      .map((category) => ({
        ...category,
        questions: category.questions.map((question, i) =>
          <QuestionAndAnswer key={i} question={question} />)
      }))
      .map((category, i) =>
        <Category key={i} name={category.name}>
          {category.questions}
        </Category>
      )
    return (
      <div className="App">
        {categories}
      </div>
    )
  }
}

export default App
