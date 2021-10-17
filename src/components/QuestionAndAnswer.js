import React from 'react'

class QuestionAndAnswer extends React.Component {
  render() {
    const answer = localStorage.getItem('default-foo bar') || ""
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div className="question-body">
          <textarea defaultValue={answer}/>
        </div>
      </details>
    )
  }
}

export default QuestionAndAnswer
