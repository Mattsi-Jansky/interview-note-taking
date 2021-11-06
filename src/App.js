import React from 'react'
import './App.css'
import CandidateSelector from './components/CandidateSelector'
import Category from './components/Category'
import QuestionAndAnswer from './components/QuestionAndAnswer'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    if(this.props.candidateName !== undefined) {
      this.state.candidateName = this.props.candidateName
    }
  }

  renderCategories = () => this.props.categories
    .map((category) => ({
      ...category,
      questions: category.questions.map((question, i) =>
        <QuestionAndAnswer key={i}
          candidateName={this.state.candidateName}
          category={category.name}
          question={question.value} />)
    }))
    .map((category, i) =>
      <Category 
        key={i}
        candidateName={this.state.candidateName}
        name={category.categoryName}>
        {category.questions}
      </Category>
    )

  render() {
    const categories = this.state.candidateName !== undefined ? this.renderCategories() : []
    return (
      <div className="App">
        <CandidateSelector
          updateSelectedOption={candidateName => this.setState({ candidateName: candidateName })}
        />
        {categories}
      </div>
    )
  }
}

export default App
