import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

describe('Header component', () => {
  it('renders header component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
  })
})