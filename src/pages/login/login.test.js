import { render, screen } from "@testing-library/react";
// import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./login";
import { createMemoryHistory } from "history";

describe("Test the login component", () => {
  //test for directing route const navigate = useNavigate();

  test("should redirect and update history", () => {
    // dont check with history
    const history = createMemoryHistory();
    render(
      <Router>
        <Login />
      </Router>
    );

    const userClick = screen.getByRole("button", { name: "Log in" });
    userEvent.click(userClick);

    expect(history.location.pathname).toEqual("/"); //make it fail
  });

  it("should render login component correctly", async () => {
    const { asFragment } = render(
      <Router>
        <Login />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  function renderWithRouter(
    ui,
    {
      route = "/",
      history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
  ) {
    return {
      ...render(<Router history={history}>{ui}</Router>),
      history,
    };
  }

  it("should allow to navigate to dashboard if login button is clicked", () => {
    const { history } = renderWithRouter(<Login />, {
      route: "/login",
    });
    // expect(history.location.pathname).toBe('/login');
    const userClick = screen.getByRole("button", { name: "Log in" });
    userEvent.click(userClick);
    expect(history.location.pathname).toBe("/login");
  });

  it("login component should not be an empty element", () => {
    const { container } = render(
      <Router>
        <Login />
      </Router>
    );
    expect(container).not.toBeEmptyDOMElement();
  });

  test("Show error message if email or user id is wrong", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const emailNode = screen.getByPlaceholderText("Enter Email");
    userEvent.type(emailNode, "michael.lawson@gmail.com");

    const userClick = screen.getByRole("button", { name: "Log in" });
    userEvent.click(userClick);

    const message = screen.getByText(/Please enter mycompany id/); //add the data-test-id

    expect(message).toBeInTheDocument();
  });

  //write after validation, if wrong user id, show the error
  test("email input feild should accept email", () => {
    const onLogin = jest.fn();
    render(
      <Router>
        <Login onLogin={onLogin} />
      </Router>
    );
    const emailNode = screen.getByPlaceholderText("Enter Email");
    userEvent.type(emailNode, "michael.lawson@mycompany.com");
    expect(emailNode.value).toMatch("michael.lawson@mycompany.com");
  });

  // test based on backend functionality
});
