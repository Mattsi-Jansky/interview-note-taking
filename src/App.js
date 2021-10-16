import React from 'react'
import './App.css'
import Category from './components/Category'

class App extends React.Component {
  render() {
    const categories = this.props.categories.map((category, i) => 
      <Category key={i} name={category.name} />
    )
    return (
      <div className="App">
        {categories}
      </div>
    )
  }
}

export default App
