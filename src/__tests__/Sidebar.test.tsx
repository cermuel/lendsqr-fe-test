import { render, screen } from "@testing-library/react";
import Sidebar from "../components/shared/sidebar";
import { SIDE_MENU_LINKS } from "../constants";

describe("Sidebar", () => {
  const onCloseMock = vi.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  test("renders sidebar with logo and org button", () => {
    render(<Sidebar isOpen={true} onClose={onCloseMock} />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Switch Organization")).toBeInTheDocument();
  });

  test("renders all sidebar sections and links", () => {
    render(<Sidebar isOpen={true} onClose={onCloseMock} />);
    SIDE_MENU_LINKS.forEach((section) => {
      section.links.forEach((link) => {
        expect(screen.getByText(link.title)).toBeInTheDocument();
      });
    });
  });

  test("active class is added to current route", () => {
    delete (window as any).location;
    (window as any).location = { pathname: "/dashboard" };

    render(<Sidebar isOpen={true} onClose={onCloseMock} />);
    SIDE_MENU_LINKS.forEach((section) => {
      section.links.forEach((link) => {
        if (link.url && "/dashboard".includes(link.url)) {
          expect(screen.getByText(link.title).parentElement).toHaveClass(
            "active"
          );
        }
      });
    });
  });
});
