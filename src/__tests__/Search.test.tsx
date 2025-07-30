import { describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../components/shared/search";

describe("SearchInput", () => {
  it("renders the search input and button", () => {
    render(<SearchInput />);
    expect(
      screen.getByPlaceholderText("Search for anything")
    ).toBeInTheDocument();
    expect(screen.getByAltText("search icon")).toBeInTheDocument();
  });

  it("allows typing into the input", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(
      "Search for anything"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Test search" } });
    expect(input.value).toBe("Test search");
  });
});
