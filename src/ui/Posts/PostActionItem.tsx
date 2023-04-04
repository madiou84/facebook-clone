import { PropsWithChildren } from "react";

export default function PostActionItem({
  children,
  ...rest
}: PropsWithChildren<{ [key: string]: any }>) {
  return (
    <button
      {...rest}
      type="button"
      className="px-2 py-1 w-full h-full text-center hover:bg-gray-100 rounded-sm space-x-1"
    >
      {children}
    </button>
  );
}
