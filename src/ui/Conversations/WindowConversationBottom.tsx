import { ChartSquareBarIcon, ChevronDownIcon } from "@heroicons/react/outline";
import {
  HeartIcon,
  MinusIcon,
  PhoneIcon,
  PlusCircleIcon,
  VideoCameraIcon,
  XIcon,
} from "@heroicons/react/solid";

import classNames from "classnames";
import {
  FbIcon,
  ImageProfileUser,
  Message,
  MessageFromItem,
  MessageToItem,
} from "../index";

export default function WindowConversationBottom({
  user,
  positionRight = "right-20",
  onClickMinus,
  onClickClose,
  ...rest
}: any) {
  return (
    <div
      {...rest}
      className={classNames(
        "hidden xl:block fixed bottom-0 z-50",
        positionRight
      )}
    >
      <div
        style={{ width: "20rem" }}
        className="h-auto bg-white rounded-t-md shadow-2xl"
      >
        <div className="flex flex-col justify-between">
          <div className="space-x-2 px-2 w-full flex items-center justify-between h-12 border-b border-gray-100 shadow">
            {user.src && (
              <div className="w-10 h-10">
                <ImageProfileUser
                  src={user.src}
                  hasStory={false}
                  widthClass="w-full"
                  heightCLass="h-full"
                  widthClassDot="w-2"
                  heightClassDot="h-2"
                />
              </div>
            )}

            <div className="w-full h-full flex items-center justify-between">
              <div className="w-36 flex flex-col leading-4">
                <div className="flex">
                  {user.name && (
                    <h6 className="text-gray-800 font-semibold truncate">
                      {user.name}
                    </h6>
                  )}

                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>

                <span className="text-gray-400 text-xs font-semibold">
                  En ligne
                </span>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button type="button" className="focus:outline-none">
                  <VideoCameraIcon className="w-5 h-5 text-gray-400" />
                </button>

                <button type="button" className="focus:outline-none">
                  <PhoneIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={onClickMinus}
                >
                  <MinusIcon className="w-5 h-5 text-gray-400" />
                </button>

                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={onClickClose}
                >
                  <XIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          <Message>
            {[1, 2, 3, 4].map((msg, key) =>
              key % 2 === 0 ? (
                <MessageFromItem
                  key={key}
                  srcImgUser={user.src}
                  message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat, accusamus qui enim iure non quo mollitia."
                />
              ) : (
                <MessageToItem
                  key={key}
                  message="mollitia commodi aut est eius doloribus hic doloremque voluptate possimus. Reprehenderit libero dolore provident."
                />
              )
            )}
          </Message>

          <div className="px-2 w-full flex items-center justify-between h-10">
            <div className="w-full flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <PlusCircleIcon className="w-7 h-7 text-defaultcolor-500" />
                <FbIcon
                  classNameSize="w-6 h-6"
                  backgroundSize="25px 1184px"
                  backgroundPosition="0 -25px"
                  backgroundUrl="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/k3BKMWO4lFg.png"
                />
                <ChartSquareBarIcon className="w-7 h-7 text-gray-500" />
              </div>

              <input
                type="text"
                placeholder="Aa"
                className="w-40 px-3 py-1 bg-gray-100 rounded-2xl focus:outline-none"
              />

              <div className="w-full">
                <HeartIcon className="w-7 h-7 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
