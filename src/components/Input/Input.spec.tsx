import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should render an input", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="name" type="text" />
    );

    expect(getByPlaceholderText("name")).toBeDefined();
  });
});
