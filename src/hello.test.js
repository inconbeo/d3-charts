import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import {shallow, mount} from 'enzyme';

describe('<Hello />', () => {
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders hello world', () => {
    const wrapper = shallow(<Hello text='Hello world'/>);
    const inst = wrapper.instance()
    expect(inst.props.text).toBe('Hello world');
  })
})