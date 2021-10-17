import React from 'react'

class QuestionAndAnswer extends React.Component {
  render() {
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div className="question-body">
          <textarea defaultValue={localStorage.getItem('default-foo bar')}/>
        </div>
      </details>
    )
  }
}

export default QuestionAndAnswer
