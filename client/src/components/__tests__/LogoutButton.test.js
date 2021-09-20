import React from 'react';
import ReactDOM from 'react-dom';
import LogoutButton from '../LogoutButton';

describe('Logout button component', () => {
  it('renders logout button without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogoutButton/>, div);
  })
})