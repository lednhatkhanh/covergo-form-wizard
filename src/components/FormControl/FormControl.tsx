import classNames from "classnames";
import * as React from "react";
import { ExtendableComponentProps } from "../overridableComponentProps";
import { FormControlIdProvider } from "./formControlContext";

type BaseProps = {
  id: string;
  name: string;
  layout?: "default" | "radio-buttons";
};
type Props = ExtendableComponentProps<"div", BaseProps>;

const FormControl: React.FC<Props> = ({
  id,
  name,
  children,
  className,
  layout = "default",
  ...rest
}) => {
  const contextValue = React.useMemo(() => ({ name, id }), [id, name]);

  return (
    <FormControlIdProvider initialValue={contextValue}>
      <div
        {...rest}
        className={classNames(
          className,
          {
            default: "flex flex-col gap-y-2",
            "radio-buttons": "",
          }[layout],
        )}
      >
        {children}
      </div>
    </FormControlIdProvider>
  );
};

export { FormControl };
