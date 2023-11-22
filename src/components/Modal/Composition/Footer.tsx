import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

interface FooterStateProps {}
interface FooterDispatchProps {}

type FooterProps = FooterStateProps &
  FooterDispatchProps &
  ComponentProps<"footer">;

const Footer: FC<FooterProps> = ({ children, className, ...props }) => {
  const footerStyle = classNames("p-16", className);
  return (
    <footer className={footerStyle} {...props}>
      {children}
    </footer>
  );
};

export default Footer;
