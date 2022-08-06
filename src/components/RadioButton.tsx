import * as React from "react";
import { ExtendableComponentProps } from "./overridableComponentProps";

type BaseProps = { value?: string };
type Props = ExtendableComponentProps<"input", BaseProps>;

const RadioButton: React.FC<Props> = ({
  type = "radio",
  className,
  children,
  id,
  ...rest
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <input type={type} id={id} {...rest} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export { RadioButton };
