import classNames from "classnames";
import { PropsWithChildren } from "react";

interface NavProps extends PropsWithChildren {
  bgContainer?: string;
  bgSubContainer?: string;
}

export function NavMobile(props: NavProps) {
  const {
    children,
    bgContainer = "bg-white",
    bgSubContainer = "flex items-center justify-center",
    ...rest
  } = props;

  return (
    <nav className={classNames(bgContainer, "xl:hidden")}>
      <ul className={bgSubContainer} {...rest}>
        {children}
      </ul>
    </nav>
  );
}
