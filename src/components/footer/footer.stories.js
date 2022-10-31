import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../../theme";

import Footer from "./index";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <Theme>
    <Router>
      <Footer {...args} />
    </Router>
  </Theme>
);

export const FooterStyle = Template.bind({});
FooterStyle.args = {};
