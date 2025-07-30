import { render, screen, fireEvent } from "@testing-library/react";
import Paginator from "../components/ui/paginator";

describe("Paginator", () => {
  const setup = (props = {}) => {
    const defaultProps = {
      totalEntries: 100,
      entriesPerPage: 10,
      currentPage: 1,
      onChangePage: vi.fn(),
      onChangeEntriesPerPage: vi.fn(),
    };
    return render(<Paginator {...defaultProps} {...props} />);
  };

  it("renders correctly with default props", () => {
    setup();
    expect(screen.getByText("Showing")).toBeInTheDocument();
    expect(screen.getByText("out of 100")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("10");
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("calls onChangePage when a page button is clicked", () => {
    const onChangePage = vi.fn();
    setup({ onChangePage, currentPage: 2 });

    const button = screen.getByText("1");
    fireEvent.click(button);

    expect(onChangePage).toHaveBeenCalledWith(1);
  });

  it("disables the prev button on first page", () => {
    setup({ currentPage: 1 });
    const prevButton = screen.getByText("<") as HTMLButtonElement;
    expect(prevButton.disabled).toBe(true);
  });

  it("disables the next button on last page", () => {
    setup({ currentPage: 10, entriesPerPage: 10 });
    const nextButton = screen.getByText(">") as HTMLButtonElement;
    expect(nextButton.disabled).toBe(true);
  });

  it("calls onChangeEntriesPerPage when selection changes", () => {
    const onChangeEntriesPerPage = vi.fn();
    setup({ onChangeEntriesPerPage });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "25" } });

    expect(onChangeEntriesPerPage).toHaveBeenCalledWith(25);
  });

  it("renders ellipsis on large screens if totalPages > 5", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    setup({ totalEntries: 200, entriesPerPage: 10 });

    expect(screen.getAllByText("...").length).toBeGreaterThan(0);
  });
});
