import classNames from "classnames";
import * as React from "react";
import { OverridableComponentProps } from "./overridableComponentProps";

type BaseProps = {
  variant?: "title" | "body";
};
type Props<C extends React.ElementType> = OverridableComponentProps<
  C,
  BaseProps
>;

const Text = <C extends React.ElementType>({
  component,
  children,
  className,
  variant = "body",
  ...rest
}: Props<C>) => {
  const Component = component ?? "h1";
  return (
    <Component
      className={classNames(
        {
          title: "text-4xl font-semibold",
          body: "text-md",
        }[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { Text };
