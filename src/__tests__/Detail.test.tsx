import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Detail from "../components/ui/detail";

describe("Detail Component", () => {
  it("renders the label and value correctly", () => {
    render(<Detail label="Email" value="test@example.com" />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
  });

  it("applies correct class names", () => {
    render(<Detail label="Phone" value="1234567890" />);

    const labelElement = screen.getByText("Phone");
    const valueElement = screen.getByText("1234567890");

    expect(labelElement).toHaveClass("detail__label");
    expect(valueElement).toHaveClass("detail__value");
  });
});
