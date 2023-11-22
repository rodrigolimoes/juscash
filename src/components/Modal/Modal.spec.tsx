import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Modal", () => {
  it("should return an error message ", () => {
    try {
      const { getByText } = render(<Header>Title</Header>);

      expect(getByText("Title")).toBeNull();
    } catch (e) {
      const { message } = e as Error;

      expect(message).toEqual(
        "Child components of Modal cannot be rendered outside the Modal component!"
      );
    }
  });
});
