import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import { BrowserRouter } from 'react-router-dom';

test('should load the navbar on page load', () => {
  render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
  );
}) 