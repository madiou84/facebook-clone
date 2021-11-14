import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { UsersIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

import ImageProfileUser from './ImgProfileUser';
import { FbIcon } from '.';

export default function Modal({ isOpen, setIsOpen }: any) {
    if (!isOpen) {
        return null
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 z-50 overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        leaveTo="opacity-0"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leaveFrom="opacity-100"
                        leave="ease-in duration-200"
                        enter="ease-out duration-300"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-100 bg-opacity-80" />
                    </Transition.Child>

                    <span aria-hidden="true" className="inline-block h-screen align-middle">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        leave="ease-in duration-200"
                        leaveTo="opacity-0 scale-95"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leaveFrom="opacity-100 scale-100"
                    >
                        <div className="inline-block w-full max-w-lg py-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-xl">
                            <Dialog.Title as="div" className="border-b border-gray-200 px-4 pb-3 pt-1">
                                <div className="flex justify-between items-center">
                                    <span></span>
                                    
                                    <div className="text-xl font-bold leading-6 text-gray-900">
                                        Créer une publication
                                    </div>
                                    
                                    <XIcon
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center p-2 bg-gray-200 w-10 h-10 rounded-full text-2xl"
                                    />
                                </div>
                            </Dialog.Title>

                            <div className="mt-2 px-4 py-2">
                                <div className="flex pb-3">
                                    <div className="w-10 h-10">
                                        <ImageProfileUser/>
                                    </div>

                                    <div className="pl-2">
                                        <h3 className="text-gray-800">
                                            Madiou Samantan
                                        </h3>

                                        <div className="relative inline-block font-semibold px-2 py-1 bg-gray-200 leading-3 space-x-1 rounded-md">
                                            <UsersIcon className="inline-block align-baseline w-3 h-3"/>
                                            <h6 className="text-xs inline-block align-baseline">Amis</h6>
                                            <div className="inline-block absolute bottom-2 align-baseline w-3 h-3">
                                                <FbIcon
                                                    backgroundPosition="-168px -128px"
                                                    backgroundSize="auto"
                                                    backgroundUrl="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png?_nc_eui2=AeH5pejNVT8D-168nPGXHPoALbdPuRKRHYktt0-5EpEdibtyl3U-q7XECulCj545_JDnuaFd3hPe8SNdm2AZ3cJN"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <textarea
                                    autoFocus={isOpen}
                                    placeholder="Quoi de neuf, Madiou ?"
                                    className="w-full h-40 text-xl resize-none sidbar placeholder-gray-400 focus:outline-none"
                                />
                            </div>

                            <div className="mt-4 px-4 py-2">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-defaultcolor-500 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Publier
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}