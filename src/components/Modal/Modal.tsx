import { ComponentProps, FC } from "react";
import classNames from "classnames";
import "./style.css";
import { ModalContext } from "./ModalContext";

interface ModalStateProps {
  isOpen: boolean;
}
interface ModalDispatchProps {
  onClose: () => void;
}

type ModalProps = ModalStateProps & ModalDispatchProps & ComponentProps<"div">;

const Modal: FC<ModalProps> = ({ children, onClose, isOpen }) => {
  const wrapperStyles = classNames("modal-wrapper", {
    open: isOpen,
  });
  return (
    <div className={wrapperStyles}>
      <div className={"modal-content"}>
        <ModalContext.Provider value={{ onClose }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>
  );
};

export default Modal;
