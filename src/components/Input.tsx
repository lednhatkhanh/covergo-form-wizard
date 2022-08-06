import classNames from "classnames";
import * as React from "react";
import { useFormControlId } from "./FormControl";
import { ExtendableComponentProps } from "./overridableComponentProps";

type Props = ExtendableComponentProps<"input">;

const Input = ({ className, ...rest }: Props) => {
  const [{ id, name }] = useFormControlId();

  return (
    <input
      className={classNames(className, "bg-white px-4 py-2 rounded border-2")}
      id={id}
      name={name}
      {...rest}
    />
  );
};

export { Input };
