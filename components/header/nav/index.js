import React from "react";

import { Container } from "./nav.css";

const Nav = props => (
  <Container>
    <ul>
      <li>
        <a href="#">Projects</a>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
