import classNames from "classnames";
import * as React from "react";
import { ExtendableComponentProps } from "./overridableComponentProps";

type Props = ExtendableComponentProps<"button"> & {
  size?: "default" | "large";
};

const Button: React.FC<Props> = ({
  className,
  children,
  size = "default",
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "bg-black rounded py-2 px-6 text-white text-sm hover:bg-opacity-75 transition duration-200 ease-in-out font-semibold",
        { default: "py-2 px-6", large: "px-16 py-3" }[size],
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
