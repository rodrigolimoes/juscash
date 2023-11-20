import { render } from "@testing-library/react";
import Input from "./Input";

const wrapperStyle = "relative flex items-center justify-end";
const inputStyle = "input";
const helperStyle = "helper-text";

describe("Input", () => {
  it("should render an input", () => {
    const { getByPlaceholderText, container } = render(
      <Input placeholder="name" type="text" />
    );

    const div = container.querySelector("div");
    const span = container.querySelector("span");
    const input = container.querySelector("input");

    expect(getByPlaceholderText("name")).toBeDefined();
    expect(div.className).toEqual(wrapperStyle);
    expect(input.className).toEqual(inputStyle);
    expect(span).toEqual(null);
  });

  it("should render an input field with auxiliary text", () => {
    const { getByPlaceholderText, container } = render(
      <Input placeholder="name" type="text" helperText="Your Name" />
    );

    const span = container.querySelector("span");
    const div = container.querySelector("div");
    const input = container.querySelector("input");

    expect(getByPlaceholderText("name")).toBeDefined();
    expect(div.className).toEqual(wrapperStyle);
    expect(input.className).toEqual(inputStyle);
    expect(span.className).toEqual(helperStyle);
  });
});
