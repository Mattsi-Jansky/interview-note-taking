import React from 'react'
import QuestionAndAnswer from './QuestionAndAnswer'

class Category extends React.Component {
  render() {
    return (
      <details>
        <summary>
          {this.props.name}
        </summary>
        <div className="details-body">
          <QuestionAndAnswer question="Is C# pass-by-reference, or pass-by-value?"/>
        </div>
      </details>)
  }
}

export default Category
