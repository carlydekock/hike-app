import { render } from "@testing-library/react";
import MainNav from "../MainNav";
import { BrowserRouter } from 'react-router-dom';

test('should load the mainnav within the navbar on page load', () => {
  render(
    <BrowserRouter>
      <MainNav />
    </BrowserRouter>
  );
}) 