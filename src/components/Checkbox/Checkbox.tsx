import React, { ComponentProps, FC } from "react";
import { v4 } from "uuid";

interface CheckboxStateProps {}
interface CheckboxDispatchProps {}

type CheckboxProps = CheckboxStateProps &
  CheckboxDispatchProps &
  ComponentProps<"input">;

const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  const id = v4();
  return (
    <div>
      <input id={id} type="checkbox" {...props} />
      <label form={id} className="m-l-6">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
