import * as React from "react";
import { useFormControlId } from "./FormControl";
import { ExtendableComponentProps } from "./overridableComponentProps";
import { Text } from "./Text";

type Props = ExtendableComponentProps<"label">;

const Label = ({ children, ...rest }: Props) => {
  const [{ id }] = useFormControlId();

  return (
    <Text component="label" htmlFor={id} {...rest}>
      {children}
    </Text>
  );
};

export { Label };
