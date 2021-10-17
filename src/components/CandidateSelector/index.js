import React from 'react'
import './CandidateSelector.css'

class CandidateSelector extends React.Component {
  render() {
    return (
      <div id="candidate_selector">
        <label for="candidate_name">Candidate</label>
        <input type="text" id="candidate_name"></input>
      </div>
    )
  }
}

export default CandidateSelector
