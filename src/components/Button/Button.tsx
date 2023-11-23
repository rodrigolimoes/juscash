import { ComponentProps, FC, ReactNode } from "react";
import "./style.css";
import classNames from "classnames";

type Variant = "contained" | "outlined";
type Color = "success" | "secondary" | "info";

interface ButtonStateProps {
  color?: Color;
  variant?: Variant;
  icon?: ReactNode;
}
interface ButtonDispatchProps {}

type ButtonProps = ButtonStateProps &
  ButtonDispatchProps &
  ComponentProps<"button">;

/**
 * Render a Button
 * @param children Button content
 * @param color Button color
 * @param variant Button variant
 * @param className Override or extend the styles applied to the component
 * @param icon Icon to render on button
 * @param props Button props
 * @constructor
 *
 * @example
 * <Button variant="outlined" color="success">Create</Button>
 */
const Button: FC<ButtonProps> = ({
  children,
  color = "info",
  variant = "contained",
  className,
  icon,
  ...props
}) => {
  const buttonStyle = classNames("button", className, {
    [`button-${variant}-${color}`]: true,
    "button-icon": !!icon,
  });

  return (
    <button className={buttonStyle} {...props}>
      {icon && <>{icon}</>}
      {children}
    </button>
  );
};

export default Button;
