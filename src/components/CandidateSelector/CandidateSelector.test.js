import { render, screen } from '@testing-library/react'
import selectEvent from "react-select-event"
import CandidateSelector from '.'

beforeEach(() => {
  localStorage.clear()
})

test('creates localStorage entry if none exists', () => {
  const wrapper = render(<CandidateSelector />)
  const result = localStorage.getItem('names')
  expect(result).toBe('[]')
})

test('displays name from localstorage', () => {
  localStorage.setItem('names', JSON.stringify(["Vader, Darth"]))
  const wrapper = render(<CandidateSelector />)
  const selectorNode = wrapper.getByLabelText("Candidate")
  selectEvent.openMenu(selectorNode)
  const option = wrapper.getByText("Vader, Darth")
  expect(option).toBeInTheDocument()
})

test('adds new candidate name to localstorage', async () => {
  const wrapper = render(<CandidateSelector />)
  const selectorNode = wrapper.getByLabelText("Candidate")
  await selectEvent.create(selectorNode, "Vader, Darth")
  const result = localStorage.getItem('names')
  expect(result).toBe('["Vader, Darth"]')
})

