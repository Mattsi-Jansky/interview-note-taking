import React from 'react'
import './CandidateSelector.css'

import Selector from 'react-select/creatable'

class CandidateSelector extends React.Component {

  constructor(props) {
    super(props)
    var names = this.getNames()
    if(names == null) {
      localStorage.setItem('names', "[]")
      names = []
    }
    this.state = {
      options: this.optionsFromNames(names),
      selectedOption: ""
    }
  }

  onCreate(candidateName) {
    const names = this.getNames()
    names.push(candidateName)
    localStorage.setItem('names', JSON.stringify(names))
    this.setState({ 
      options: this.optionsFromNames(names),
      selectedOption: { value: candidateName, label: candidateName }
    })
  }

  optionsFromNames = (names) => names.map(name => ({ value: name, label: name }))
  getNames = () => JSON.parse(localStorage.getItem('names'))

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
