import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Dropdown } from "../components/ui/dropdown";

const options = [
  { label: "First", value: "1" },
  { label: "Second", value: "2" },
];

describe("Dropdown Component", () => {
  it("renders with label and placeholder", () => {
    render(
      <Dropdown options={options} label="Choose an option" onSelect={vi.fn()} />
    );
    expect(screen.getByText("Choose an option")).toBeInTheDocument();
    expect(screen.getByText("Select...")).toBeInTheDocument();
  });

  it("shows options when clicked", () => {
    render(
      <Dropdown options={options} label="Test Dropdown" onSelect={vi.fn()} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("calls onSelect and updates selected value", () => {
    const handleSelect = vi.fn();
    render(
      <Dropdown
        options={options}
        label="Test Dropdown"
        onSelect={handleSelect}
      />
    );
    fireEvent.click(screen.getByRole("button")); // open dropdown
    fireEvent.click(screen.getByText("Second")); // select option

    expect(handleSelect).toHaveBeenCalledWith({ label: "Second", value: "2" });
    // Check that dropdown closes and selection is shown
    expect(screen.queryByText("First")).not.toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("displays selected prop if provided", () => {
    render(
      <Dropdown
        options={options}
        label="With Selected"
        onSelect={vi.fn()}
        selected={{ label: "First", value: "1" }}
      />
    );
    expect(screen.getByText("First")).toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", () => {
    render(
      <>
        <Dropdown options={options} label="Outside Test" onSelect={vi.fn()} />
        <div data-testid="outside">Outside Element</div>
      </>
    );

    fireEvent.click(screen.getByRole("button")); // open dropdown
    expect(screen.getByText("First")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside")); // click outside
    expect(screen.queryByText("First")).not.toBeInTheDocument();
  });
});
