import React from 'react'

class QuestionAndAnswer extends React.Component {
  handleChange(event) {
    localStorage.setItem(`${this.props.candidateName}-${this.props.category}-${this.props.question}`, event.target.value)
  }

  render() {
    const answer = localStorage.getItem(`${this.props.candidateName}-${this.props.category}-${this.props.question}`) || ""
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
