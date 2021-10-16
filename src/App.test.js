import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Category from './components/Category'

test('includes category', () => {
  const app = shallow(<App />)
  expect(app.find(Category).length).toBe(1);
});
