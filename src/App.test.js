import { render } from "@testing-library/react";
import App from "./App";

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
