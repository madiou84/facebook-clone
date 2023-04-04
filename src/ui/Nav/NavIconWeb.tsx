import classNames from "classnames";
import { PropsWithChildren } from "react";
import { NavigationIconType } from "../../types";

export function NavIconWeb({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={classNames("flex items-center justify-center", className)}>
      {children}
    </div>
  );
}

export function NavIconWebItem({ item }: { item: NavigationIconType }) {
  return (
    <div
      className={classNames(
        "w-full flex items-center justify-center cursor-pointer",
        {
          "text-gray-500": !item.isActive,
          "border-b-4 border-defaultcolor-500 text-defaultcolor-500":
            item.isActive,
        }
      )}
    >
      <div
        className={classNames("w-full flex justify-center items-center h-14", {
          "hover:bg-gray-100 rounded-lg": !item.isActive,
        })}
      >
        {item.icon}
      </div>
    </div>
  );
}
