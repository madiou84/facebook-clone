import React from 'react'
import { PhotographIcon } from '@heroicons/react/outline'

export default function FormWhatWouldYouSay({ styleContainer = 'mt-0.5 bg-white' } : any) {
    return (
        <div className={styleContainer}>
            <div className="flex items-center px-3 py-2 space-x-2">
                <div className="">
                    <div className="w-10 h-10">
                        <img
                            alt=""
                            className="w-full h-full object-cover rounded-full"
                            src="https://scontent.fdkr3-1.fna.fbcdn.net/v/t1.6435-9/164138734_110378421139999_7798075979519869159_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFqK6nG_fftUF3cWzUPCkZtyQ8TjlV_SMDJDxOOVX9IwJtiaAxta2SPgZiGBrBbiRrHGfAMSjHeTHUyZ7NhUJUR&_nc_ohc=Hu6ECKCMtR8AX9lFBxN&_nc_ht=scontent.fdkr3-1.fna&oh=e1b291845aaabe1f006eec30fd3d9277&oe=617D96A9"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <form>
                        <input
                            id=""
                            name=""
                            type="text"
                            placeholder="Que voulez-vous dire ?"
                            className="px-4 w-full h-8 rounded-full border border-gray-200"
                        />
                    </form>
                </div>

                <div className="">
                    <div className="w-10 h-10">
                        <PhotographIcon
                            className="text-primary-900"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}