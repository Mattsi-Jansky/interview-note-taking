import React from 'react'

class Category extends React.Component {
  render() {
    return (
      <details>
        <summary>
          {this.props.name}
        </summary>
        <div className="details-body">
          {this.props.children}
        </div>
      </details>)
  }
}

export default Category
