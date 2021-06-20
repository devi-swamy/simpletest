import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("<Greeting Component testing", () => {
  test("Testing the Greeting Comp", () => {
    //Arrange
    render(<Greetings />);

    //Act

    //Assert
    const welcometext = screen.getByText("Welcome", { exact: false });
    expect(welcometext).toBeInTheDocument();
  });

  test("Testing the happy path before button click", () => {
    render(<Greetings />);
    const buttoncontent = screen.getByText(/HOPE YOU ARE FINE/i);
    expect(buttoncontent).toBeInTheDocument();
  });

  test("Testing the text content after the button clicked", () => {
    //arrange
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const buttoncontent = screen.getByText("Yes thank you", { exact: false });
    expect(buttoncontent).toBeInTheDocument();
  });

  test("Not to render 'Hope you are fine'  when the button clicked", () => {
    //arrange
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const buttoncontent = screen.queryByText(/HOPE YOU ARE FINE/i);
    expect(buttoncontent).toBeNull();
  });
});
