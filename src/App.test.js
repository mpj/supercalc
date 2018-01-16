import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('doesnt crash on partial input', () => {
  const wrapper = shallow(<App />)
  wrapper.find('input').simulate('change', {
    target: { value: '5' }
  })
})

it('multiplies', () => {
  const wrapper = shallow(<App />)

  wrapper.find('input').simulate('change', {
    target: { value: '5*9' }
  })
  const renderedResult = wrapper.find('#result').text()
  expect(renderedResult).toBe('45')
})

it('adds', () => {
  const wrapper = shallow(<App />)

  wrapper.find('input').simulate('change', {
    target: { value: '25+10' }
  })
  const renderedResult = wrapper.find('#result').text()
  expect(renderedResult).toBe('35')
})