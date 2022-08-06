import classNames from "classnames";
import * as React from "react";
import {
  ExtendableComponentProps,
  OverridableComponentProps,
} from "./overridableComponentProps";

type BaseProps = {
  size?: "default" | "large";
  variant?: "primary" | "secondary";
};
type Props<C extends React.ElementType> = OverridableComponentProps<
  C,
  BaseProps
>;

const Button = <C extends React.ElementType>({
  className,
  children,
  size = "default",
  variant = "primary",
  component,
  type = "button",
  ...rest
}: Props<C>) => {
  const Component = component ?? "button";

  return (
    <Component
      className={classNames(
        "rounded py-2 px-6 text-sm hover:opacity-75 transition duration-200 ease-in-out font-semibold border-2 border-black",
        { default: "py-2 px-6", large: "px-16 py-3" }[size],
        { primary: "bg-black text-white", secondary: "bg-white text-black" }[
          variant
        ],
      )}
      type={type}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { Button };
