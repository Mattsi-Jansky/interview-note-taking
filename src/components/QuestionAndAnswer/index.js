import React from 'react'
import Answer from '../Answer'
import './QuestionAndAnswer.css'

class QuestionAndAnswer extends React.Component {
  getStorageKey = () => `${this.props.candidateName}-${this.props.category}-${this.props.question}`

  render() {
    return (
      <details>
        <summary>{this.props.question}</summary>
        {this.props.hint && <p className="hint">{this.props.hint}</p>}
        <Answer storageKey={this.getStorageKey()}/>
      </details>
    )
  }
}

export default QuestionAndAnswer
