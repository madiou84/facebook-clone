import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, UserGroupIcon } from "@heroicons/react/solid";

import classNames from "classnames";
import {
  REGEX_TO_RECOGNIZE_HTAG,
  REGEX_TO_RECOGNIZE_LINKS,
  REGEX_TO_RECOGNIZE_SPACE,
} from "../../constants";
import { PostsProps } from "../../types";
import { ImageProfileUser } from "../ImageProfileUser";
import PostAction from "./PostAction";
import PostActionItem from "./PostActionItem";
import { POST_ACTIONS } from "../../constants/data";

export default function PostItem({
  post,
  className,
  ...rest
}: {
  [key: string]: any;
  post: PostsProps;
  className?: string;
}) {
  const content = post.content
    .replace(
      REGEX_TO_RECOGNIZE_LINKS,
      '<a class="text-blue-500" href="$1">$1</a>'
    )
    .replace(
      REGEX_TO_RECOGNIZE_HTAG,
      '<a class="text-blue-500" href="#$1">#$1</a>'
    )
    .replace(REGEX_TO_RECOGNIZE_SPACE, "<br/>");

  const postSize = post.photos?.length || 0;

  return (
    <div className={className} {...rest}>
      <div className="flex items-center justify-between px-2 xl:px-4">
        <div className="flex items-center">
          <div className="mr-2">
            <ImageProfileUser hasStory={false} src={post.user.imgProfil} />
          </div>

          <div className="flex-col leading-tight">
            <h2 className="font-bold">{post.user.name}</h2>

            <div className="space-x-2 text-sm text-gray-400 leading-none">
              <span>3 min</span>
              <UserGroupIcon className="align-top inline-block w-3 h-3" />
            </div>
          </div>
        </div>

        <DotsHorizontalIcon className="w-5 h-5" />
      </div>

      <p
        className="px-2 xl:px-4 pt-2 pb-2 font-sans leading-tight"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {Array.isArray(post.videos) &&
        post.videos.length > 0 &&
        post.videos.map((video) => (
          <video className="block w-full h-full aspect-auto" controls>
            <source src={video} type="video/mp4" />
          </video>
        ))}

      {Array.isArray(post.photos) && postSize > 0 && (
        <div
          className={classNames({
            "grid gap-1 aauto-rows-max": true,
            [`grid-cols-${postSize < 3 ? postSize : 3}`]: postSize,
            [`grid-row-${postSize}`]: postSize,
          })}
        >
          {post.photos.map((photo: any, key: any) => (
            <img
              key={key}
              alt={photo}
              src={photo}
              className={classNames({
                "w-full object-cover": true,
                "h-96": postSize === 3,
                "h-full": postSize !== 3,
              })}
            />
          ))}
        </div>
      )}

      <div className="px-4 flex items-center justify-between py-2 text-sm text-center text-gray-700">
        <div className="flex-none truncate w-1/3">
          Ibrahima et 19 autres personnes aiment
        </div>
        <div className="flex-grow w-full text-center">45 Commenataires</div>
        <div className="flex-none truncate w-1/5 text-center">4 Partages</div>
      </div>

      <PostAction>
        {POST_ACTIONS.map((item, key) => {
          return (
            <PostActionItem key={key}>
              {item.component}
              <span>{item.text}</span>
            </PostActionItem>
          );
        })}
      </PostAction>
    </div>
  );
}
