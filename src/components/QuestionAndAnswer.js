import React from 'react';

class QuestionAndAnswer extends React.Component {
  render() {
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div className="question-body">
          <textarea></textarea>
        </div>
      </details>
    )
  }
}

export default QuestionAndAnswer;
