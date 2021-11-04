import { render, screen } from '@testing-library/react'
import Answer from '.'
import { shallow } from 'enzyme'

beforeEach(() => {
  localStorage.clear()
})

describe('Regardless of storageKey', () => {

  ['testkey','another test key','test$%20_K3Y'].forEach((i) => {
    test(`loads answer from localstorage given key '${i}'`, () => {
      localStorage.setItem('answer-test', 'bar foo')

      render(<Answer storageKey="test" />)

      const questionTextValue = screen.getByText(/bar foo/i)
      expect(questionTextValue).toBeInTheDocument()
    })

    test(`given nothing in localstorage, textarea is blank given key '${i}'`, () => {
      const wrapper = shallow(<Answer storageKey="test"/>)

      const textarea = wrapper.find('textarea')
      expect(textarea.props().value).toBe("")
    })

    test(`saves answer to localstorage given key '${i}'`, () => {
      const wrapper = shallow(<Answer storageKey="test"/>)
      const textarea = wrapper.find('textarea')

      textarea.simulate('change', { target: { value: 'bar foo' } })

      const result = localStorage.getItem('answer-test')
      expect(result).toBe('bar foo')
    })
  })
})