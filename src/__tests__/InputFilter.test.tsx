import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FilterInput from "../components/ui/input-filter";

describe("FilterInput Component", () => {
  it("renders the label and input", () => {
    render(
      <FilterInput
        label="Search"
        placeholder="Search users"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search users")).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(
      <FilterInput
        label="Filter"
        placeholder="Enter name"
        value="John"
        onChange={() => {}}
      />
    );

    const input = screen.getByPlaceholderText("Enter name") as HTMLInputElement;
    expect(input.value).toBe("John");
  });

  it("calls onChange when value is changed", () => {
    const handleChange = vi.fn();
    render(
      <FilterInput
        label="Email"
        placeholder="Enter email"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("applies correct class names", () => {
    render(
      <FilterInput
        label="Username"
        placeholder="Enter username"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByText("Username")).toHaveClass("label");
    expect(screen.getByPlaceholderText("Enter username")).toHaveClass("input");
  });
});
