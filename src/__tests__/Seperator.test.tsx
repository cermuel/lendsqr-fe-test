import { render } from "@testing-library/react";
import Seperator from "../components/ui/seperator";

describe("Seperator", () => {
  it("renders with default vertical orientation", () => {
    const { container } = render(<Seperator />);
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    expect(div?.className).toContain("seperator");
    expect(div?.className).toContain("vertical");
  });

  it("renders with horizontal orientation", () => {
    const { container } = render(<Seperator orientation="horizontal" />);
    const div = container.querySelector("div");
    expect(div?.className).toContain("seperator");
    expect(div?.className).toContain("horizontal");
  });
});
