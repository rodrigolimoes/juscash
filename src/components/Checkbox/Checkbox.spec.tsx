import { render } from "@testing-library/react";
import { Checkbox } from "./index";

describe("Checkbox", () => {
  it("should render a checkbox", () => {
    const { getByText, container } = render(<Checkbox>task 1</Checkbox>);

    const label = container.querySelector("label");

    expect(getByText("task 1")).toBeDefined();
    expect(label?.className).toEqual("m-l-6");
  });
});
