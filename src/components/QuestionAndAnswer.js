import React from 'react'

class QuestionAndAnswer extends React.Component {
  handleChange(event) {
    localStorage.setItem('default-foo bar', event.target.value)
  }

  render() {
    const answer = localStorage.getItem('default-foo bar') || ""
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div className="question-body">
          <textarea defaultValue={answer} onChange={this.handleChange}/>
        </div>
      </details>
    )
  }
}

export default QuestionAndAnswer
