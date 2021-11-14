import { useState } from 'react';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { PhotographIcon as PhotographIconSolid, VideoCameraIcon } from '@heroicons/react/solid';

import Modal from './Modal';
import { FbIcon } from "./index";
import ImageProfileUser from './ImgProfileUser';

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
    let [isOpen, setIsOpen] = useState(false);

    const handleOnFocus = () => setIsOpen(true);

    return (
        <div className={styleContainer} {...rest}>
            <div className="flex items-center px-3 py-2 space-x-2">
                <div className="">
                    <div className="w-10 h-10">
                        <ImageProfileUser
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <form>
                        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
                        <input
                            type="text"
                            onClick={handleOnFocus}
                            placeholder="Quoi de neuf Madiou ?"
                            className="px-4 w-full h-8 xl:h-9 rounded-full border border-gray-200 xl:placeholder-gray-700 xl:bg-secondary-300 transition-all duration-200 ease-in focus:outline-none"
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