import classNames from "classnames";
import * as React from "react";
import { ExtendableComponentProps } from "./overridableComponentProps";

type Props = ExtendableComponentProps<"div">;

const Container: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classNames(
        className,
        "bg-gray-100 p-12 flex flex-col gap-y-6 items-center mx-auto mt-32 w-[fit-content]",
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Container };
