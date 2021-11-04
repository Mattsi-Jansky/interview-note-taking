import React from 'react'
import Answer from './Answer'

class Category extends React.Component {
  getStorageKey = () => `${this.props.candidateName}-${this.props.name}`

  render() {
    return (
      <details>
        <summary>
          {this.props.name}
        </summary>
        <Answer storageKey={this.getStorageKey()}/>
        <div className="details-body">
          {this.props.children}
        </div>
      </details>)
  }
}

export default Category
