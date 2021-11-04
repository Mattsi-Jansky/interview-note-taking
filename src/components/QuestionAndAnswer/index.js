import React from 'react'
import Answer from '../Answer'

class QuestionAndAnswer extends React.Component {
  getStorageKey = () => `${this.props.candidateName}-${this.props.category}-${this.props.question}`

  render() {
    return (
      <details>
        <summary>{this.props.question}</summary>
        <Answer storageKey={this.getStorageKey()}/>
      </details>
    )
  }
}

export default QuestionAndAnswer
