import { render } from "@testing-library/react";
import { Body, Footer, Header, Modal } from "./index";

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
  it("should render a modal", () => {
    const { getByText, container } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <Header>Title</Header>
        <Body>Body</Body>
        <Footer>Footer</Footer>
      </Modal>
    );

    const [wrapper, modalContent, buttonClose, body] =
      container.querySelectorAll("div");
    const header = container.querySelector("header");
    const footer = container.querySelector("footer");

    expect(getByText("Title")).toBeDefined();
    expect(getByText("Body")).toBeDefined();
    expect(getByText("Footer")).toBeDefined();
    expect(wrapper.className).toEqual("modal-wrapper open");
    expect(modalContent.className).toEqual("modal-content");
    expect(buttonClose.className).toEqual("button-close");
    expect(body.className).toEqual("p-x-16");
    expect(header.className).toEqual(
      "flex justify-between items-center title p-16"
    );
    expect(footer.className).toEqual("p-16");
  });
});
