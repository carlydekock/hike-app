import React from 'react';
import ReactDOM from 'react-dom';
import SignupButton from '../LogoutButton';

describe('Signup button component', () => {
  it('renders signup button without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupButton/>, div);
  })
})