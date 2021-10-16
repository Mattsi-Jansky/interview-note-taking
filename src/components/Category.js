import React from 'react';
import Question from './Question'

class Category extends React.Component {
  render() {
    return (
      <details>
        <summary>
          C# & Dotnet
        </summary>
        <div class="details-body">
          <Question />
        </div>
      </details>)
  }
}

export default Category;
