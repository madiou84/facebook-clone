import { UserGroupIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

import PostAction from './PostAction';
import { classNames } from '../helper';
import PostActionItem from './PostActionItem';
import { ImageProfileUser } from '../ImageProfileUser';


export default function PostItem({ post, className, ...rest }: any) {
    return (
        <div className={className} {...rest}>
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center">
                    <div className="mr-2">
                        <ImageProfileUser
                            hasStory={false}
                            src={post.user.imgProfil}
                        />
                    </div>

                    <div className="flex-col leading-tight">
                        <h2 className="font-bold">
                            {post.user.name}
                        </h2>
                        <div className="space-x-2 text-sm text-gray-400 leading-none">
                            <span>3 min</span>
                            <UserGroupIcon
                                className="align-top inline-block w-3 h-3"
                            />
                        </div>
                    </div>
                </div>

                <DotsHorizontalIcon
                    className="w-5 h-5"
                />
            </div>

            <p
                className="px-4 pt-2 pb-2 font-sans leading-tight"
                dangerouslySetInnerHTML={{__html: post.content}}
            />

            <div className={
                classNames(
                    `grid gap-1 auto-rows-max`,
                    post.photos.length === 1 && 'grid-cols-1',
                    post.photos.length === 2 && 'grid-cols-2',
                    post.photos.length === 3 && 'grid-cols-3',
                )
            }>
                {post.photos.map((photo: any, key: any) => (
                    <img
                        key={key}
                        alt={photo}
                        src={photo}
                        className={
                            classNames(
                                (post.photos.length === 3) && 'w-full h-96 object-cover',
                                (post.photos.length !== 3) && 'w-full h-full object-cover',
                            )
                        }
                    />
                ))}
            </div>

            <div className="px-4 flex items-center justify-between py-2 text-sm text-center text-gray-700">
                <div className="flex-none truncate w-1/3">
                    Ibrahima et 19 autres personnes aiment
                </div>
                <div className="flex-grow w-full text-center">
                    45 Commenataires
                </div>
                <div className="flex-none truncate w-1/5 text-center">
                    4 Partages
                </div>
            </div>

            <PostAction>
                {[
                    {
                        component: <ThumbUpIcon className="w-5 h-5 inline-block"/>,
                        text: `J'aime`
                    },
                    {
                        component: <ChatAltIcon className="w-5 h-5 inline-block"/>,
                        text: `Commenter`,
                    },
                    {
                        component: <ShareIcon className="w-5 h-5 inline-block"/>,
                        text: `Partager`
                    },
                ].map((item, key) => {
                    return (
                        <PostActionItem key={key}>
                            {item.component}
                            <span>{item.text}</span>
                        </PostActionItem>
                    )
                })}
            </PostAction>
        </div>
    )
}