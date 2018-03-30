import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter.js';

configure({
  adapter: new Adapter()
});


function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  }
  const component = shallow(
    <Counter value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('counter component', () => {
  it('first button should call onIncrement', () => {
    const {
      buttons, actions
    } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })
  it('second button should call onDecrement', () => {
    const {
      buttons, actions
    } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onDecrement).toBeCalled()
  })
})
