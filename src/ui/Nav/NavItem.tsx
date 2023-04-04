import classNames from "classnames";
import { useCallback } from "react";
import { NavigationIconType } from "../../types";

interface NavItemProps {
  item: NavigationIconType;
  onClickRow?: (item: any) => void;
}

export default function NavItem({ item, onClickRow }: NavItemProps) {
  const handleClick = () => {
    onClickRow && onClickRow(item);
  };

  return (
    <li
      onClick={handleClick}
      className={classNames({
        "transition-all duration-200 ease-in": true,
        "h-12 flex justify-center items-center w-full text-gray-500": true,
        "text-blue-500 border-b-2 border-blue-500": item.isActive,
      })}
    >
      <div className="relative flex justify-center items-center">
        {item.notificationCount && (
          <span className="absolute -top-2 -right-3 md:-right-3 w-6 h-6 flex items-center justify-center text-base text-white rounded-full bg-red-500">
            {item.notificationCount}
          </span>
        )}
        {item.icon}
      </div>
    </li>
  );
}
