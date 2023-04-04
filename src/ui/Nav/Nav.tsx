import { SearchIcon } from "@heroicons/react/outline";
import Layout from "../Layout";

import classNames from "classnames";
import { PropsWithChildren } from "react";
import {
  WEB_NAVIGATION_ICONS_CENTER,
  WEB_NAVIGATION_ICONS_RIGHT,
} from "../../constants/data";
import ImageProfileUser from "../ImgProfileUser";
import { NavIconWeb, NavIconWebItem } from "./NavIconWeb";
import { Icon } from "../Icon/Icon";

interface NavProps extends PropsWithChildren {
  bgContainer?: string;
  bgSubContainer?: string;
}

export default function Nav(props: NavProps) {
  const {
    bgContainer = "bg-white",
    bgSubContainer = "flex items-center justify-center",
    children,
    ...rest
  } = props;

  return (
    <nav {...rest} className={classNames("hidden xl:block h-14")}>
      <div className="w-full fixed bg-white z-10">
        <Layout
          className="flex items-center justify-between"
          leftComponent={
            <div className="w-full flex items-center justify-start">
              <div className="w-14 h-14 ml-2">
                <Icon name="fb" />
              </div>

              <div className="w-full relative">
                <SearchIcon className="absolute top-2.5 left-3 w-5 h-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Rechercher sur Facebook"
                  className="w-full pl-9 py-2 rounded-full bg-gray-100 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          }
          centerComponent={
            <NavIconWeb className="h-14">
              {WEB_NAVIGATION_ICONS_CENTER.map((item, key) => (
                <NavIconWebItem key={key} item={item} />
              ))}
            </NavIconWeb>
          }
          rightComponent={
            <div className="flex justify-end h-14">
              <div className="flex items-center space-x-2 mr-2">
                {WEB_NAVIGATION_ICONS_RIGHT.map((item, key) => (
                  <div
                    key={key}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-400 cursor-pointer"
                  >
                    {item.icon}
                  </div>
                ))}

                <a
                  href="https://www.facebook.com/madiou.samantan"
                  className="rounded-full hover:bg-gray-100 py-"
                >
                  <div className="w-10 h-10 object-contain">
                    <ImageProfileUser />
                  </div>
                </a>
              </div>
            </div>
          }
        />
      </div>
    </nav>
  );
}
