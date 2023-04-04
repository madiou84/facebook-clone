import { ThumbUpIcon } from "@heroicons/react/outline";
import {
  PhotographIcon as PhotographIconSolid,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

import { CreateFormActionProps, FormWhatWouldYouSayProps } from "../types";
import ImageProfileUser from "./ImgProfileUser";
import Modal from "./Modal";

const createFormActions: CreateFormActionProps[] = [
  {
    iconSize: "auto",
    iconPosition: "0 0",
    text: "Vidéo en direct",
    icon: <VideoCameraIcon className="w-8 h-8 text-red-500" />,
    backgroundUrl:
      "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png",
  },
  {
    iconSize: "auto",
    text: "Photo / vidéo",
    iconPosition: "0 -225px",
    icon: <PhotographIconSolid className="w-8 h-8 text-green-500" />,
    backgroundUrl:
      "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png",
  },
  {
    iconSize: "auto",
    text: "Humeur / activé",
    iconPosition: "0 -25px",
    icon: <ThumbUpIcon className="w-8 h-8 text-yellow-400" />,
    backgroundUrl:
      "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png",
  },
];

export default function FormWhatWouldYouSay(props: FormWhatWouldYouSayProps) {
  const { styleContainer, ...rest } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnFocus = () => setIsOpen(true);

  return (
    <div className={styleContainer} {...rest}>
      <div className="flex items-center px-3 py-2 space-x-2">
        <div className="w-10 h-10">
          <ImageProfileUser className="w-full h-full object-cover rounded-full" />
        </div>

        <div className="w-full">
          <form>
            <input
              type="text"
              onClick={handleOnFocus}
              placeholder="Quoi de neuf Madiou ?"
              className="px-4 w-full h-8 xl:h-10 rounded-full border border-gray-200 xl:placeholder-gray-500 xl:bg-secondary-300 transition-all duration-200 ease-in focus:outline-none"
            />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </form>
        </div>

        <div className="xl:hidden">
          <div className="w-10 h-10">
            <img src="icon.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="w-full hidden xl:block px-3 py-2">
        <div className="w-full border-t border-gray-200 pb-2" />
        <div className="flex items-center justify-evenly">
          {createFormActions.map((item, key) => (
            <div
              key={key}
              className="w-full flex items-center justify-center hover:bg-secondary-300 py-2 rounded-md space-x-2 cursor-pointer transition-all duration-200 ease-in"
            >
              <div className="w-6 h-6">
                <img
                  src={item.backgroundUrl}
                  alt={item.backgroundUrl}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="text-gray-500 font-semibold text-sm">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
