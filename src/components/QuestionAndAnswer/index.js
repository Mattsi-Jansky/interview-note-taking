import React from 'react'

class QuestionAndAnswer extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = { value: this.getStoredValue()}
  }

  componentDidUpdate(prevProps) {
    if(prevProps.candidateName !== this.props.candidateName) {
      this.setState({ value: this.getStoredValue()})
    }
  }

  handleChange(event) {
    localStorage.setItem(this.getStorageKey(), event.target.value)
    this.setState({value: event.target.value})
  }

  getStorageKey = () => `${this.props.candidateName}-${this.props.category}-${this.props.question}`

  getStoredValue() { 
    const storedValue = localStorage.getItem(this.getStorageKey())
    return storedValue == null ? "" : storedValue
  }

  render() {
    return (
      <details>
        <summary>{this.props.question}</summary>
        <div>
          <textarea 
            value={this.state.value}
            onChange={this.handleChange.bind(this)}/>
        </div>
      </details>
    )
  }
}

export default QuestionAndAnswer
