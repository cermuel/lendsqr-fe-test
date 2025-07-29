import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/shared/button";

describe("Button Component", () => {
  it("renders button with correct children and default variant class", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("btn--default");
  });

  it("applies correct variant class", () => {
    render(<Button variant="outlined">Outlined</Button>);

    const button = screen.getByText("Outlined");
    expect(button).toHaveClass("btn--outlined");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByText("Click");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
