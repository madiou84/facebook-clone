import React from 'react';

export default function StoryItem({ className, story }: any) {
    return (
        <div className={className}>
            <div className="relative w-24 h-40">
                <button className="absolute top-2 left-2">
                    {story.profileImg ? (
                        <div className="w-10 h-10 border-4 border-primary-300 rounded-full">
                            <img
                                alt={story.profileImg}
                                src={story.profileImg}
                                className="object-cover w-full h-full rounded-full"
                            />
                        </div>
                    ) : (
                        <span className="w-10 h-10 absolute top-0 left-2.5 bg-white text-primary-500 text-center rounded-full text-3xl">
                            +
                        </span>
                    )}
                </button>

                <div className="absolute bottom-0">
                    <div className="font-semibold px-2 py-2 text-sm leading-none rounded-b-xl text-white bg-gradient-to-b from-transparent to-black">
                        {story.name}
                    </div>
                </div>

                <img
                    alt={story.storyImage}
                    src={story.storyImage}
                    className="object-cover w-full h-full rounded-xl"
                />
            </div>
        </div>
    )
}