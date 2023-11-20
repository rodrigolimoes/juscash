import React, { ComponentProps, FC, ReactNode } from "react";
import "./style.css";
import classNames from "classnames";

interface InputStateProps {
  /**
   * If true, the input will indicate an error
   */
  error?: boolean;
  /**
   * End adornment for this component
   */
  endAdornment?: ReactNode;
  /**
   * Text to indicate some help to the user
   */
  helperText?: string;
}
interface InputDispatchProps {}

type InputProps = InputStateProps &
  InputDispatchProps &
  ComponentProps<"input">;

/**
 * Render an input field
 * @param endAdornment End adornment for this component
 * @param error If true, the input will indicate an error
 * @param helperText Text to indicate some help to the user
 * @param className Override or extend the styles applied to the component
 * @param props Input props
 * @constructor
 * @example
 * <Input type="password" placeholder="Password" endAdornment={<Eye />}/>
 */
const Input: FC<InputProps> = ({
  endAdornment,
  error,
  helperText,
  className,
  ...props
}) => {
  const inputStyle = classNames("input", className, {
    "input-end-adornment": !!endAdornment,
    "input-error": !!error,
  });
  const helperTextStyle = classNames("helper-text", {
    "helper-text-error": !!error,
  });

  return (
    <>
      <div className="relative flex items-center justify-end">
        <input className={inputStyle} {...props} />
        {endAdornment && (
          <div className="absolute end-adornment">{endAdornment}</div>
        )}
      </div>
      {helperText && <span className={helperTextStyle}>{helperText}</span>}
    </>
  );
};

export default Input;
