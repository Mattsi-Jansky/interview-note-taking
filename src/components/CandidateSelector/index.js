import React from 'react'
import './CandidateSelector.css'

import Selector from 'react-select/creatable'

class CandidateSelector extends React.Component {
  render() {
    return (
      <div id="candidate_selector">
        <label htmlFor="candidate_name">Candidate</label>
        <Selector id="candidate_name" />
      </div>
    )
  }
}

export default CandidateSelector
