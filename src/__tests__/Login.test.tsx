import { describe, it, vi, beforeEach, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { login } from "../services/slices/userSlice";
//@ts-expect-error
import configureStore from "redux-mock-store";
import Login from "../pages/login";

vi.mock("../services/slices/userSlice", () => ({
  login: vi.fn(),
}));

const mockStore = configureStore([]);
const mockDispatch = vi.fn();

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

describe("Login Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({});
    vi.clearAllMocks();
  });

  it("renders all elements correctly", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("FORGOT PASSWORD?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("✅ dispatches login action when valid email is entered and button is clicked", () => {
    (login as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      type: "LOGIN",
    });

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const loginButton = screen.getByRole("button", { name: /log in/i });
    fireEvent.click(loginButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith({ email: "test@example.com" });
  });

  it("❌ does not dispatch login action when email is empty and button is clicked", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const loginButton = screen.getByRole("button", { name: /log in/i });

    expect(loginButton).toBeDisabled();

    fireEvent.click(loginButton);

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(login).not.toHaveBeenCalled();
  });
});
