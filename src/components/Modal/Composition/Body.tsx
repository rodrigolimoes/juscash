import { ComponentProps, FC } from "react";
import classNames from "classnames";

interface BodyStateProps {}
interface BodyDispatchProps {}

type BodyProps = BodyStateProps & BodyDispatchProps & ComponentProps<"div">;

const Body: FC<BodyProps> = ({ children, className, ...props }) => {
  const bodyStyle = classNames("p-x-16", className);
  return (
    <div className={bodyStyle} {...props}>
      {children}
    </div>
  );
};

export default Body;
