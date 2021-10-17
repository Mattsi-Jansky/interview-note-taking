import { render, screen } from '@testing-library/react'
import selectEvent from "react-select-event"
import CandidateSelector from '.'

const noop = () => ""

beforeEach(() => {
  localStorage.clear()
})

test('creates localStorage entry if none exists', () => {
  render(<CandidateSelector updateSelectedOption={noop}/>)

  const result = localStorage.getItem('names')
  expect(result).toBe('[]')
})

test('displays name from localstorage', () => {
  localStorage.setItem('names', JSON.stringify(["Vader, Darth"]))
  const wrapper = render(<CandidateSelector updateSelectedOption={noop}/>)

  const selectorNode = wrapper.getByLabelText("Candidate")
  selectEvent.openMenu(selectorNode)

  const option = wrapper.getByText("Vader, Darth")
  expect(option).toBeInTheDocument()
})

test('displays names from localstorage', () => {
  localStorage.setItem('names', JSON.stringify(["Vader, Darth", "Organa, Leia"]))
  const wrapper = render(<CandidateSelector updateSelectedOption={noop}/>)

  const selectorNode = wrapper.getByLabelText("Candidate")
  selectEvent.openMenu(selectorNode)

  expect(wrapper.getByText("Vader, Darth")).toBeInTheDocument()
  expect(wrapper.getByText("Organa, Leia")).toBeInTheDocument()
})

test('adds new candidate name to localstorage', async () => {
  const wrapper = render(<CandidateSelector updateSelectedOption={noop}/>)

  const selectorNode = wrapper.getByLabelText("Candidate")
  await selectEvent.create(selectorNode, "Vader, Darth")

  const result = localStorage.getItem('names')
  expect(result).toBe('["Vader, Darth"]')
})

test('Calls callback when item selected', async () => {
  localStorage.setItem('names', JSON.stringify(["Vader, Darth", "Organa, Leia"]))
  var selectedOption = "not called"
  const updateSelectionOption = (option) => selectedOption = option

  const wrapper = render(<CandidateSelector updateSelectedOption={updateSelectionOption} />)
  const selectorNode = wrapper.getByLabelText("Candidate")
  selectEvent.openMenu(selectorNode)
  await selectEvent.select(selectorNode, "Vader, Darth")

  expect(selectedOption).toBe("Vader, Darth")
})

test('Calls callback when item selected', async () => {
  var selectedOption = "not called"
  const updateSelectionOption = (option) => selectedOption = option

  const wrapper = render(<CandidateSelector updateSelectedOption={updateSelectionOption} />)
  const selectorNode = wrapper.getByLabelText("Candidate")
  await selectEvent.create(selectorNode, "Vader, Darth")

  expect(selectedOption).toBe("Vader, Darth")
})
