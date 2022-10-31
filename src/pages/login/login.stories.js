import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../../theme";

import Login from "./login";

export default {
  title: "Page/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <Theme>
    <Router>
      <Login {...args} />
    </Router>
  </Theme>
);

export const LogIn = Template.bind({});
LogIn.args = {};
