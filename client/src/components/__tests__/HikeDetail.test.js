import React from 'react';
import ReactDOM from 'react-dom';
import HikeDetail from '../HikeDetail';

const hike = {
  hike: {
    name: 'Hike1',
    description: 'Hike1 description',
    length: '3 mi',
    elevation_gain: '1000 ft',
    time: '1.5 hrs',
    keywords: 'Mountain, lake',
    latitude: 1.000,
    longitude: -1.500,
  }
}

describe('Hike details component', () => {
  it('renders hike details without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HikeDetail hike={hike}/>, div);
  })
})