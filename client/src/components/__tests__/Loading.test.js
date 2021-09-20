import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../LogoutButton';

describe('Loading component', () => {
  it('renders loading notification without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading/>, div);
  })
})