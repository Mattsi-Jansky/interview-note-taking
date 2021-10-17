import React from 'react'
import './CandidateSelector.css'

import Selector from 'react-select/creatable'

class CandidateSelector extends React.Component {

  constructor(props) {
    super(props)
    const names = JSON.parse(localStorage.getItem('names'))
    this.state = {
      options: names != null ? names.map(name => ({ value: name, label: name })) : [],
      selectedOption: ""
    }
  }

  onCreate(candidateName) {
    const names = JSON.parse(localStorage.getItem('names')) || []
    names.push(candidateName)
    localStorage.setItem('names', JSON.stringify(names))
    this.refresh()
    this.setState({ selectedOption: { value: candidateName, label: candidateName } })
  }

  refresh() {
    const names = JSON.parse(localStorage.getItem('names')) || []
    this.setState({ options: names.map(name => ({ value: name, label: name })) })
  }

  render() {
    return (
      <div id="candidate_selector">
        <label id="candidate_name_label">Candidate</label>
        <Selector 
          aria-labelledby="candidate_name_label" 
          id="candidate_name"
          hasValue
          value={this.state.selectedOption}
          onCreateOption={this.onCreate.bind(this)}
          options={this.state.options }
          onChange={(candidate) => {
            this.setState({ selectedOption: candidate })
          }}/>
      </div>
    )
  }
}

export default CandidateSelector
