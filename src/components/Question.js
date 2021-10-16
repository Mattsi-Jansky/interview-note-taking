import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div class="question-body">
          <textarea></textarea>
        </div>
      </details>
    )
  }
}

export default Question;
