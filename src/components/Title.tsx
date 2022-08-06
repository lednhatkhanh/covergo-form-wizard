import * as React from "react";
import { OverridableComponentProps } from "./overridableComponentProps";

type Props<C extends React.ElementType> = OverridableComponentProps<C>;

const Title = <C extends React.ElementType>({
  component,
  children,
  className,
  ...rest
}: Props<C>) => {
  const Component = component ?? "h1";
  return <Component className="text-4xl font-semibold"></Component>;
};

export { Title };
