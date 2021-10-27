import { ThumbUpIcon } from '@heroicons/react/outline';
import { PhotographIcon as PhotographIconSolid, VideoCameraIcon } from '@heroicons/react/solid';

import { FbIcon } from "./index";

const createFormActions = [
    {
        iconSize: 'auto',
        iconPosition: '0 0',
        text: 'Vidéo en direct',
        icon: <VideoCameraIcon className="w-8 h-8 text-red-500" />,
        backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/jrzbj1_5Jys.png?_nc_eui2=AeFee-fpRhnrFoZiME_O8ZfuTPtfdEsRv7NM-190SxG_s9toKEb-q3D_7rY2ZUztbxheXLPE0CCtRqLTLWwMWGxD',
    },
    {
        iconSize: 'auto',
        text: 'Photo/Vidéo',
        iconPosition: '0 -225px',
        icon: <PhotographIconSolid className="w-8 h-8 text-green-500" />,
        backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/jrzbj1_5Jys.png?_nc_eui2=AeFee-fpRhnrFoZiME_O8ZfuTPtfdEsRv7NM-190SxG_s9toKEb-q3D_7rY2ZUztbxheXLPE0CCtRqLTLWwMWGxD',
    },
    {
        iconSize: 'auto',
        text: 'Humeur/Activé',
        iconPosition: '0 -25px',
        icon: <ThumbUpIcon className="w-8 h-8 text-yellow-400" />,
        backgroundUrl: 'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/jrzbj1_5Jys.png?_nc_eui2=AeFee-fpRhnrFoZiME_O8ZfuTPtfdEsRv7NM-190SxG_s9toKEb-q3D_7rY2ZUztbxheXLPE0CCtRqLTLWwMWGxD',
    },
]

export default function FormWhatWouldYouSay({ styleContainer = '', ...rest } : any) {
    return (
        <div className={styleContainer} {...rest}>
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
                            type="text"
                            placeholder="Quoi de neuf Madiou ?"
                            className="px-4 w-full h-8 xl:h-9 rounded-full border border-gray-200 xl:placeholder-gray-700 xl:bg-secondary-300 focus:outline-none focus:ring-primary-500 focus:ring-2 focus:ring-offset-4 transition-all duration-200 ease-in"
                        />
                    </form>
                </div>

                <div className="xl:hidden">
                    <FbIcon
                        classNameSize="w-6 h-6"
                        backgroundSize="25px 1184px"
                        backgroundPosition="0 -25px"
                        backgroundUrl="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/k3BKMWO4lFg.png"
                    />
                </div>
            </div>

            <div className="w-full hidden xl:block px-3 py-2">
                <div className="w-full border-t border-gray-200 pb-2"/>
                <div className="flex items-center justify-evenly">
                    {createFormActions.map((item, key) => (
                        <div
                            key={key}
                            className="w-full flex items-center justify-center hover:bg-secondary-300 py-2 rounded-md space-x-2 cursor-pointer transition-all duration-200 ease-in"
                        >
                            <FbIcon
                                classNameSize="w-8 h-6"
                                backgroundSize={item.iconSize}
                                backgroundUrl={item.backgroundUrl}
                                backgroundPosition={item.iconPosition}
                            />
                            
                            <div className="text-gray-500 font-semibold text-sm">
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}