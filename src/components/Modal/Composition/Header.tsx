import { ComponentProps, FC } from "react";
import { X } from "lucide-react";
import classNames from "classnames";
import { useModalContext } from "../ModalContext";

interface HeaderStateProps {}
interface HeaderDispatchProps {}

type HeaderProps = HeaderStateProps &
  HeaderDispatchProps &
  ComponentProps<"header">;

const Header: FC<HeaderProps> = ({ children, className, ...props }) => {
  const headerStyle = classNames(
    "flex justify-between items-center p-16",
    className
  );
  const { onClose } = useModalContext();
  return (
    <header className={headerStyle} {...props}>
      <h6 className="title">{children}</h6>
      <div
        className="button-close"
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
      >
        <X size={20} />
      </div>
    </header>
  );
};

export default Header;
