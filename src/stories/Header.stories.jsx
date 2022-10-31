import React from "react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Kanika Bijlani",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
