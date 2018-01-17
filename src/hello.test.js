
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import { shallow, mount } from 'enzyme'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders hello world', () => {
    const word = "Hello world";
    const wrapper = shallow(<Hello text={word}/>);
    console.log(wrapper);
    const welcome = <h1></h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

