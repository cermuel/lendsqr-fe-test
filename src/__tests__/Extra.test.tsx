import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Extra from "../components/ui/extra";

describe("Extra Component", () => {
  const props = {
    img: "https://example.com/icon.png",
    title: "Users",
    value: "2453",
  };

  it("renders image, title and value", () => {
    render(<Extra {...props} />);

    const img = screen.getByAltText("Users") as HTMLImageElement;
    const title = screen.getByText("Users");
    const value = screen.getByText("2453");

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(props.img);
    expect(title).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it("applies correct class names", () => {
    render(<Extra {...props} />);

    expect(screen.getByRole("img")).toHaveClass("img");
    expect(screen.getByText("Users")).toHaveClass("title");
    expect(screen.getByText("2453")).toHaveClass("value");
  });
});
