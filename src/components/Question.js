import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <details>
        <summary>Is C# pass-by-reference, or pass-by-value?</summary>
        <div class="question-body">
          <textarea></textarea>
        </div>
      </details>
    )
  }
}

export default Question;
