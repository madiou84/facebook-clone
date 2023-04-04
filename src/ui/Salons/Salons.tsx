import { PropsWithChildren } from "react";

interface SalonsProps extends PropsWithChildren {
  [key: string]: any;
  className?: string;
  styleContainer?: string;
}

export default function Salons(props: SalonsProps) {
  const {
    className = "w-full h-16 my-4 space-x-2 flex items-center justify-center overflow-hidden bg-white rounded-lg",
    styleContainer,
    children,
    ...rest
  } = props;

  return (
    <div className={className} {...rest}>
      <div className="w-full flex items-center px-3 py-2 space-x-2">
        {children}
      </div>
    </div>
  );
}
