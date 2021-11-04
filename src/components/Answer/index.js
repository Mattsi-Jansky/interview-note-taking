import React from 'react'

class Answer extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = { value: this.getStoredValue()}
  }

  componentDidUpdate(prevProps) {
    if(prevProps.storageKey !== this.props.storageKey) {
      this.setState({ value: this.getStoredValue()})
    }
  }

  handleChange(event) {
    localStorage.setItem(this.props.storageKey, event.target.value)
    this.setState({value: event.target.value})
  }

  getStoredValue() {
    const storedValue = localStorage.getItem(this.props.storageKey)
    return storedValue == null ? "" : storedValue
  }

  render() {
    return (
      <div>
        <textarea 
          value={this.state.value}
          onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Answer
