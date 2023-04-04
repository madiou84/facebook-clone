import classNames from "classnames";
import { PropsWithChildren } from "react";

export default function FixedSidbar({
  children,
  className,
  ...rest
}: PropsWithChildren<{ [key: string]: any; className?: string }>) {
  return (
    <div className={classNames("fixed", className)}>
      <div
        {...rest}
        style={{ maxHeight: "93vh" }}
        className="w-full overflow-x-hidden sidbar"
      >
        {children}
      </div>
    </div>
  );
}
