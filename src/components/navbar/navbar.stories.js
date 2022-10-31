import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../../theme";

import Navbar from "./index";

export default {
  title: "Example/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <Theme>
    <Router>
      <Navbar {...args} />
    </Router>
  </Theme>
);

export const NavBar = Template.bind({});
NavBar.args = {};
