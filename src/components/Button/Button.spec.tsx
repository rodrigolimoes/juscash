import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("contained", () => {
    it("should render a success button", () => {
      const { getByText, container } = render(
        <Button variant="contained" color="success">
          Create
        </Button>
      );

      const button = container.querySelector("button");

      expect(getByText("Create")).toBeDefined();
      expect(button.className).toEqual("button button-contained-success");
    });
    it("should render a secondary button", () => {
      const { getByText, container } = render(
        <Button variant="contained" color="secondary">
          Create
        </Button>
      );

      const button = container.querySelector("button");

      expect(getByText("Create")).toBeDefined();
      expect(button.className).toEqual("button button-contained-secondary");
    });
  });
});
