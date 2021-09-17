// const app = require('../app.js');
// const supertest = require('supertest');
// const request = supertest(app.app);
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/routes/Home.jsx';
import { useAuth0 } from '@auth0/auth0-react';
require('dotenv').config();
const sub = process.env.SUB;
const email = process.env.EMAIL;
// const request = require('supertest');
// const app = require('../app.js');
// const {useAuth0} = require('@auth0/auth0-react');

const user = {
  email: `${email}`,
  email_verified: true,
  sub: `${sub}`
}

jest.mock('@auth0/auth0-react');
const mockedUseAuth0 = jest.mock(useAuth0);

describe('testing auth', () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( < Home / > , div);
  });
})