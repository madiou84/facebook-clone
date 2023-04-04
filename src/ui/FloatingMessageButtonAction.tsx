import { classNames } from "../utils/helper";

export function FloatingButtonMakeMessage({
  children,
  className,
  ...rest
}: any) {
  return (
    <button
      {...rest}
      type="button"
      className={classNames("fixed focus:outline-none", className)}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 shadow-xl">
        {children}
      </div>
    </button>
  );
}

export function NewMessageButtonAction({ children }: any) {
  return (
    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900">
      {children}
    </button>
  );
}
