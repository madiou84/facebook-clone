import { PlusIcon } from "@heroicons/react/solid";

import ImageProfileUser from "../ImgProfileUser";
import { StoryItemProps } from "./props";

export default function StoryItem({ className, story }: StoryItemProps) {
  return (
    <div className={className}>
      <div className="relative w-24 xl:w-28 h-40 xl:h-48 transition-all ease-in duration-500">
        <button className="absolute top-4 left-2 focus:outline-none">
          {story.profileImg && (
            <div className="w-9 h-9 rounded-full">
              <ImageProfileUser
                alt={story.profileImg}
                src={story.profileImg}
                className="object-cover w-full h-full rounded-full ring-4 ring-defaultcolor-500"
              />
            </div>
          )}
        </button>

        {story.profileImg ? (
          <div className="w-full h-full">
            <ImageProfileUser
              alt={story.storyImage}
              src={story.storyImage}
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="w-full absolute bottom-0">
              <div className="font-semibold px-2 py-2 text-sm leading-none text-white">
                {story.name}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full">
            <ImageProfileUser className="h-2/3 object-cover w-full rounded-t-xl" />
            <div className="h-2/6 relative bg-white rounded-b-xl">
              <div className="p-1 bg-white absolute rounded-full -top-5 right-9">
                <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-defaultcolor-500">
                  <PlusIcon className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="w-full absolute bottom-0">
              <div className="font-semibold px-2 py-2 text-sm leading-none text-gray-700 text-center">
                {story.name}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
