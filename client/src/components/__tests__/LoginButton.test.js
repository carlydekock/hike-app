import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from '../LoginButton';

describe('Login button component', () => {
  it('renders login button without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginButton/>, div);
  })
})