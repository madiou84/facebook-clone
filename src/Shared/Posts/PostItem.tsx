import React from 'react';
import { UserGroupIcon, DotsHorizontalIcon } from '@heroicons/react/solid';

function ImageProfileUserPost({ srcPath }: any) {
    return (
        <div className="w-10 h-19 rounded-full">
            <div className="relative p-0.5 border-2 border-secondary-500 rounded-full">
                <img
                    alt=""
                    src={srcPath}
                    className="w-full h-full object-center rounded-full"
                />
                
                <div className="absolute bottom-0 -right-0.5">
                    <div className="border-2 border-secondary-300 rounded-full w-3 h-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function PostItem({ post, className, ...rest }: any) {
    return (
        <div className={className} {...rest}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="mr-2">
                        <ImageProfileUserPost
                            srcPath={post.user.imgProfil}
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

            <div className="pt-2">
                <p
                    className="pb-2 font-sans leading-tight"
                    dangerouslySetInnerHTML={{__html: post.content}}
                />

                <div className="grid grid-cols-2 gap-2">
                    {post.photos.map((photo: any, key: any) => (
                        <img
                            alt=""
                            key={key}
                            src={photo}
                            className="w-full object-contain"
                        />
                    ))}
                </div>

                <div className="flex items-center justify-between py-2 text-sm text-center text-gray-700">
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

                <div className="border-t border-secondary-500">
                    <div className="flex items-center justify-evenly space-x-4 py-1">
                        <button
                            type="button"
                            className="text-center"
                        >J'aime</button>
                        <button
                            type="button"
                            className="text-center"
                        >Commenter</button>
                        <button
                            type="button"
                            className="text-center"
                        >Partager</button>
                    </div>
                </div>
            </div>
        </div>
    )
}