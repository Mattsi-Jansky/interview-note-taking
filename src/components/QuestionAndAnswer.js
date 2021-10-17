import React from 'react'

class QuestionAndAnswer extends React.Component {
  handleChange(event) {
    localStorage.setItem(`default-${this.props.category}-${this.props.question}`, event.target.value)
  }

  render() {
    const answer = localStorage.getItem(`default-${this.props.category}-${this.props.question}`) || ""
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div className="question-body">
          <textarea defaultValue={answer} onChange={this.handleChange.bind(this)}/>
        </div>
      </details>
    )
  }
}

export default QuestionAndAnswer
