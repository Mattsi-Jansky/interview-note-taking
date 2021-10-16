import React from 'react';
import Question from './Question'

class Category extends React.Component {
  render() {
    return (
      <details>
        <summary>
          {this.props.name}
        </summary>
        <div class="details-body">
          <Question question="Is C# pass-by-reference, or pass-by-value?"/>
        </div>
      </details>)
  }
}

export default Category;
