import classNames from "classnames";
import * as React from "react";
import { useFormControlId } from "./FormControl";
import { ExtendableComponentProps } from "./overridableComponentProps";

type Props = ExtendableComponentProps<"select">;

const Select = ({ className, children, ...rest }: Props) => {
  const [{ id, name }] = useFormControlId();

  return (
    <select
      className={classNames(
        className,
        "bg-white px-4 py-2 border-2 rounded appearance-none",
      )}
      id={id}
      name={name}
      {...rest}
    >
      {children}
    </select>
  );
};

export { Select };
