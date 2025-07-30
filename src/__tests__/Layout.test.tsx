import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/shared/layout";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    Outlet: () => <div data-testid="mock-outlet">Mock Outlet</div>,
  };
});

vi.mock("../components/shared/navbar", () => ({
  default: ({ onToggleSidebar }: { onToggleSidebar: () => void }) => (
    <button onClick={onToggleSidebar} data-testid="mock-navbar">
      Toggle Sidebar
    </button>
  ),
}));

vi.mock("../components/shared/sidebar", () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <div data-testid="mock-sidebar">
      Sidebar is {isOpen ? "Open" : "Closed"}
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe("Layout", () => {
  it("renders layout and outlet content", () => {
    render(<Layout />, { wrapper: MemoryRouter });

    expect(screen.getByTestId("mock-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-outlet")).toBeInTheDocument();
    expect(screen.getByText("Sidebar is Closed")).toBeInTheDocument();
  });

  it("toggles sidebar when navbar toggle button is clicked", () => {
    render(<Layout />, { wrapper: MemoryRouter });

    const toggleButton = screen.getByTestId("mock-navbar");

    fireEvent.click(toggleButton);
    expect(screen.getByText("Sidebar is Open")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText("Sidebar is Closed")).toBeInTheDocument();
  });

  it("closes sidebar when Sidebar close button is clicked", () => {
    render(<Layout />, { wrapper: MemoryRouter });

    // Open it first
    fireEvent.click(screen.getByTestId("mock-navbar"));
    expect(screen.getByText("Sidebar is Open")).toBeInTheDocument();

    // Close
    fireEvent.click(screen.getByText("Close"));
    expect(screen.getByText("Sidebar is Closed")).toBeInTheDocument();
  });
});
