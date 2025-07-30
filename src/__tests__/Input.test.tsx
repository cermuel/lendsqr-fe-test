import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/shared/input";

describe("Input Component", () => {
  it("renders the input with placeholder", () => {
    render(<Input placeholder="Enter name" />);
    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
  });

  it("accepts and updates value", () => {
    const handleChange = vi.fn();
    render(
      <Input
        placeholder="Email"
        value="test@example.com"
        onChange={handleChange}
      />
    );
    const input = screen.getByPlaceholderText("Email") as HTMLInputElement;
    expect(input.value).toBe("test@example.com");

    fireEvent.change(input, { target: { value: "updated@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("shows toggle for password and toggles visibility", () => {
    render(<Input placeholder="Password" type="password" value="secret" />);
    const input = screen.getByPlaceholderText("Password") as HTMLInputElement;
    const toggle = screen.getByText("Show");

    expect(input.type).toBe("password");
    expect(toggle).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(input.type).toBe("text");

    fireEvent.click(screen.getByText("Hide"));
    expect(input.type).toBe("password");
  });
});
